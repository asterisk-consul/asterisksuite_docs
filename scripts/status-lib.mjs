import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

/** Raíz del paquete de documentación (asterisksuite-docs/), según la ubicación de este script. */
export const DOCS_ROOT = fileURLToPath(new URL('..', import.meta.url))

/**
 * Rutas de lectura con varios candidatos: `import.meta.url` es confiable cuando el
 * script corre por CLI, pero Astro empaqueta este módulo dentro de `dist/.prerender/`
 * durante el build, y ahí sirve resolver desde `process.cwd()`.
 */
function firstExisting(candidates) {
  for (const candidate of candidates) {
    if (candidate && existsSync(candidate)) return candidate
  }
  return candidates[0]
}

const cwd = typeof process !== 'undefined' ? process.cwd() : ''

/** Fuente de verdad del estado de la documentación (se edita con el CLI). */
export const STATUS_FILE = firstExisting([
  path.join(DOCS_ROOT, 'docs-status.json'),
  cwd && path.resolve(cwd, 'docs-status.json')
])

/** Historial de versiones de la app (fuente de verdad de versiones). */
export const APP_VERSIONS_FILE = firstExisting([
  path.resolve(DOCS_ROOT, '..', 'asterisksuite_frontend', 'versiones', 'versions.json'),
  cwd && path.resolve(cwd, '..', 'asterisksuite_frontend', 'versiones', 'versions.json')
])

/** Reporte generado para humanos (solo se escribe desde el CLI). */
export const REPORT_FILE = path.join(DOCS_ROOT, 'DOCS_STATUS.md')

/** Página pública del portal que muestra el mismo reporte (solo se escribe desde el CLI). */
export const SITE_PAGE_FILE = path.join(
  DOCS_ROOT,
  'src',
  'content',
  'docs',
  'docs',
  'estado-de-la-documentacion.mdx'
)

export function readJson(file) {
  if (!existsSync(file)) return null
  return JSON.parse(readFileSync(file, 'utf8'))
}

export function writeJson(file, data) {
  writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

export function todayISO(date = new Date()) {
  const p = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`
}

/** "0.71.1-alpha" -> [0, 71, 1] (el sufijo -alpha/-beta no altera el orden). */
export function parseVersion(version) {
  return String(version)
    .split('-')[0]
    .split('.')
    .map((n) => Number.parseInt(n, 10) || 0)
}

export function compareVersions(a, b) {
  const pa = parseVersion(a)
  const pb = parseVersion(b)
  const len = Math.max(pa.length, pb.length)
  for (let i = 0; i < len; i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0)
    if (diff !== 0) return diff
  }
  return 0
}

export function loadStatus(file = STATUS_FILE) {
  const status = readJson(file)
  if (!status) {
    throw new Error(`No se encontró el estado de documentación: ${file}`)
  }
  status.resolved ??= {}
  return status
}

export function loadAppVersions(file = APP_VERSIONS_FILE) {
  return readJson(file)
}

function entryFrom(version, change, extra = {}) {
  return {
    version: version.version,
    date: version.date ?? '',
    changes: (version.changes ?? []).map((c) => c.title),
    ...extra
  }
}

/**
 * Calcula el estado cruzando `documentedUpTo` + `resolved` contra las versiones de la app.
 * - `pending`: versiones más nuevas que el corte que todavía hay que revisar/actualizar.
 * - `excluded`: versiones más nuevas que el corte resueltas como `done` o `skipped`.
 */
export function computeState({ status, versions = loadAppVersions() } = {}) {
  const resolved = status.resolved ?? {}
  const list = versions ? [...versions].sort((a, b) => compareVersions(b.version, a.version)) : []
  const latest = list[0]
    ? { version: list[0].version, date: list[0].date ?? '' }
    : status.app
      ? { ...status.app }
      : null

  const pending = []
  const excluded = []

  for (const version of list) {
    if (compareVersions(version.version, status.documentedUpTo) <= 0) continue
    const rule = resolved[version.version]
    if (rule?.status === 'done' || rule?.status === 'skipped') {
      excluded.push(entryFrom(version, rule, { status: rule.status, note: rule.note }))
    } else {
      pending.push(
        entryFrom(version, null, {
          status: rule?.status === 'partial' ? 'partial' : 'pending',
          note: rule?.note
        })
      )
    }
  }

  return {
    cutoff: status.documentedUpTo,
    lastReview: status.lastReview ?? '',
    latest,
    pending,
    excluded,
    versionsFromSource: Boolean(versions),
    derivedIsStale: isDerivedStale(status, { latest, pending })
  }
}

/** Los campos derivados (`app`, `pending`) existen para que el build Docker pueda mostrar el banner. */
export function isDerivedStale(status, computed) {
  const app = status.app ?? null
  const pending = status.pending ?? null
  const sameApp =
    Boolean(app) === Boolean(computed.latest) &&
    (!app || (app.version === computed.latest.version && app.date === computed.latest.date))
  const samePending =
    Array.isArray(pending) &&
    pending.length === computed.pending.length &&
    pending.every((v, i) => v === computed.pending[i].version)
  return !sameApp || !samePending
}

export function persistDerived(status, state) {
  const next = {
    ...status,
    app: state.latest ? { version: state.latest.version, date: state.latest.date } : null,
    pending: state.pending.map((p) => p.version)
  }
  const changed = JSON.stringify(next) !== JSON.stringify(status)
  if (changed) writeJson(STATUS_FILE, next)
  return changed
}

const STATUS_LABEL = { pending: 'pendiente', partial: 'parcial', skipped: 'sin cambios', done: 'hecho' }

function renderVersionSection(entry) {
  const lines = []
  const label = STATUS_LABEL[entry.status] ?? entry.status
  lines.push(`### v${entry.version}${entry.date ? ` (${entry.date})` : ''} — ${label}`)
  if (entry.note) lines.push('', `> ${entry.note}`, '')
  else lines.push('')
  if (entry.changes.length) {
    for (const change of entry.changes) lines.push(`- ${change}`)
  } else {
    lines.push('- Sin cambios listados.')
  }
  lines.push('')
  return lines
}

/** Genera el contenido del reporte (DOCS_STATUS.md y la página del portal). */
export function renderReport(state) {
  const lines = []
  lines.push('# Estado de la documentación')
  lines.push('')
  lines.push(
    '> Archivo **generado** por `pnpm docs:report` — no editar a mano. Fuente de verdad: `docs-status.json`.'
  )
  lines.push('')

  const latest = state.latest
    ? `**v${state.latest.version}**${state.latest.date ? ` (${state.latest.date})` : ''}`
    : 'desconocida'
  lines.push('## Resumen')
  lines.push('')
  lines.push('| | |')
  lines.push('| --- | --- |')
  lines.push(`| Última versión de la app | ${latest} |`)
  lines.push(`| Documentación al día hasta | **v${state.cutoff}** |`)
  lines.push(`| Última revisión de docs | ${state.lastReview || 'sin registrar'} |`)
  lines.push(
    `| Versiones pendientes de revisar | **${state.pending.length}**${state.pending.length ? ` (${state.pending.map((p) => p.version).join(', ')})` : ''} |`
  )
  lines.push('')

  if (state.pending.length === 0) {
    lines.push('## Pendientes')
    lines.push('')
    lines.push('✅ La documentación cubre todas las versiones publicadas de la app.')
    lines.push('')
  } else {
    lines.push('## Pendientes')
    lines.push('')
    lines.push(
      'Cada entrada es una versión de la app que todavía no se revisó contra los contenidos de `src/content/docs/`.'
    )
    lines.push('')
    for (const entry of state.pending) lines.push(...renderVersionSection(entry))
  }

  if (state.excluded.length) {
    lines.push('## Versiones resueltas sin actualizar docs')
    lines.push('')
    for (const entry of state.excluded) lines.push(...renderVersionSection(entry))
  }

  lines.push('## Cómo actualizar este estado')
  lines.push('')
  lines.push('```bash')
  lines.push('pnpm docs:status                       # ver el estado y los pendientes')
  lines.push('pnpm docs:report                       # regenerar DOCS_STATUS.md y la página del portal')
  lines.push('pnpm docs:status -- mark 0.83.0-alpha  # marcar hasta qué versión quedó documentado')
  lines.push('pnpm docs:status -- skip 0.84.0-alpha --note "solo rendimiento"')
  lines.push('pnpm docs:status -- partial 0.85.0-alpha --note "falta X página"')
  lines.push('pnpm docs:check                        # sale con error si hay pendientes')
  lines.push('```')
  lines.push('')
  lines.push('Después de cada versión nueva de la app: revisar los cambios, actualizar los contenidos,')
  lines.push('ejecutar `pnpm docs:report` y commitear `docs-status.json` junto con los `.md`.')
  lines.push('')

  return `${lines.join('\n')}`
}

/** Mismo reporte, como página MDX del portal. */
export function renderSitePage(state) {
  const body = renderReport(state)
    .replace(/^# Estado de la documentación\n+/, '')
    .replace(/</g, '&lt;')
    .replace(/```bash/g, '```bash')

  return `---
title: Estado de la documentación
description: Hasta qué versión de Asterisk Suite está actualizada la documentación y qué falta revisar.
sidebar:
  hidden: true
editUrl: false
---

${body}`
}

const STATUS_PAGE = '/docs/estado-de-la-documentacion/'
const DISMISS_STORAGE_KEY = 'asterisksuite:docs-banner-dismissed'

/**
 * Banner que Starlight muestra arriba de todas las páginas (ver src/routeData.mjs).
 * `content` es HTML porque Banner.astro hace `set:html`.
 *
 * Incluye un botón de cierre: el aviso se guarda como descartado en `localStorage`
 * sólo para el estado actual (`data-dismiss-key`, basado en el corte y los pendientes),
 * de modo que vuelve a aparecer cuando se documenta una versión nueva.
 */
export function buildBanner(state) {
  if (!state) return null
  const latest = state.latest ? `v${state.latest.version}` : 'desconocida'
  const page = `<a href="${STATUS_PAGE}">Ver estado</a>`
  const message = state.pending.length
    ? `<strong>📄 Documentación al día hasta v${state.cutoff}</strong> · app en ${latest} · <strong>${state.pending.length} versión(es) de la app pendientes de revisar</strong> · ${page}`
    : `<strong>✅ Documentación al día con la última versión de la app (${latest})</strong> · ${page}`
  const dismissKey = `${state.cutoff}|${latest}|${state.pending.length}`

  return {
    content: `${message}<button type="button" class="sl-docs-banner-close" data-dismiss-key="${dismissKey}" data-storage-key="${DISMISS_STORAGE_KEY}" aria-label="Cerrar aviso de documentación" title="Cerrar">&times;</button>`
  }
}

/** Estado calculado de forma perezosa y cacheada para el middleware de rutas. */
let cachedState
export function getDocsState() {
  if (cachedState === undefined) {
    try {
      cachedState = computeState({ status: loadStatus(), versions: loadAppVersions() })
    } catch {
      cachedState = null
    }
  }
  return cachedState
}
