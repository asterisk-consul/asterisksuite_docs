#!/usr/bin/env node
/**
 * CLI de estado de la documentación.
 *
 *   node scripts/docs-status.mjs [status]                 ver estado + pendientes
 *   node scripts/docs-status.mjs report                   regenerar DOCS_STATUS.md y la página del portal
 *   node scripts/docs-status.mjs check                    exit 1 si hay versiones pendientes
 *   node scripts/docs-status.mjs mark <version> [--force] marcar docs como al día hasta <version>
 *                                                      (--force omite la validación de huecos)
 *   node scripts/docs-status.mjs skip <version> --note "" marcar versión sin impacto documental
 *   node scripts/docs-status.mjs partial <version> --note ""
 *   node scripts/docs-status.mjs unresolve <version>      volver a dejarla pendiente
 *
 * Opciones: --note "<texto>" · --force
 */
import {
  REPORT_FILE,
  SITE_PAGE_FILE,
  STATUS_FILE,
  compareVersions,
  computeState,
  loadAppVersions,
  loadStatus,
  persistDerived,
  renderReport,
  renderSitePage,
  todayISO,
  writeJson
} from './status-lib.mjs'
import { writeFileSync } from 'node:fs'

function parseArgs(argv) {
  const args = { _: [], note: '', force: false }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--') continue // pnpm/npm reenvían el separador como argumento literal
    if (arg === '--note') args.note = argv[++i] ?? ''
    else if (arg.startsWith('--note=')) args.note = arg.slice('--note='.length)
    else if (arg === '--force') args.force = true
    else args._.push(arg)
  }
  return args
}

function writeReport(status) {
  const state = computeState({ status })
  persistDerived(status, state)
  const freshStatus = loadStatus()
  const freshState = computeState({ status: freshStatus })
  writeFileSync(REPORT_FILE, renderReport(freshState), 'utf8')
  writeFileSync(SITE_PAGE_FILE, renderSitePage(freshState), 'utf8')
  return freshState
}

function printState(state) {
  const latest = state.latest ? `v${state.latest.version} (${state.latest.date || 's/f'})` : 'desconocida'
  console.log(`Última versión de la app : ${latest}`)
  console.log(`Documentación al día hasta: v${state.cutoff}${state.lastReview ? ` (revisado ${state.lastReview})` : ''}`)
  console.log(`Fuente de versiones       : ${state.versionsFromSource ? 'versions.json del frontend' : 'campos derivados de docs-status.json (versions.json no disponible)'}\n`)

  if (!state.pending.length) {
    console.log('✅ Sin pendientes: la documentación cubre todas las versiones publicadas.')
  } else {
    console.log(`⚠️  ${state.pending.length} versión(es) pendientes de revisar:\n`)
    for (const entry of state.pending) {
      console.log(`  v${entry.version} (${entry.date || 's/f'}) — ${entry.status === 'partial' ? 'parcial' : 'pendiente'}`)
      if (entry.note) console.log(`      nota: ${entry.note}`)
      for (const change of entry.changes) console.log(`      - ${change}`)
      console.log('')
    }
  }

  if (state.excluded.length) {
    console.log('Resueltas sin actualizar docs:')
    for (const entry of state.excluded) {
      console.log(`  v${entry.version} — ${entry.status === 'done' ? 'hecho' : 'sin cambios'}${entry.note ? ` · ${entry.note}` : ''}`)
    }
    console.log('')
  }

  if (state.derivedIsStale && state.versionsFromSource) {
    console.log('ℹ️  Los campos derivados de docs-status.json están desactualizados: ejecutá `pnpm docs:report`.')
  }
}

function requireVersion(versions, target) {
  if (!target) throw new Error('Falta la versión. Ejemplo: mark 0.83.0-alpha')
  if (!versions) throw new Error('No se pudo leer asterisksuite_frontend/versiones/versions.json')
  const found = versions.find((v) => v.version === target)
  if (!found) {
    throw new Error(`La versión ${target} no existe en versions.json. Usá el número exacto (ej: 0.83.0-alpha).`)
  }
  return found
}

function main() {
  const { _, note, force } = parseArgs(process.argv.slice(2))
  const [command = 'status', target] = _

  const status = loadStatus()

  if (command === 'status') {
    const state = computeState({ status })
    printState(state)
    persistDerived(status, state)
    return
  }

  if (command === 'report') {
    const state = writeReport(status)
    console.log(`Reporte regenerado:`)
    console.log(`  - ${REPORT_FILE}`)
    console.log(`  - ${SITE_PAGE_FILE}`)
    console.log(`  - campos derivados de ${STATUS_FILE}`)
    console.log(`\nDocumentación al día hasta v${state.cutoff} · ${state.pending.length} pendiente(s).`)
    return
  }

  if (command === 'check') {
    const state = computeState({ status })
    if (!state.pending.length) {
      console.log('OK: la documentación está al día con todas las versiones de la app.')
      return
    }
    console.error(`Hay ${state.pending.length} versión(es) de la app pendientes de revisar:`)
    for (const entry of state.pending) console.error(`  - v${entry.version} (${entry.date || 's/f'})`)
    console.error('\nRevisá los cambios, actualizá los contenidos y ejecutá: pnpm docs:status -- mark <version>')
    process.exit(1)
  }

  if (command === 'mark') {
    const versions = loadAppVersions()
    requireVersion(versions, target)
    const state = computeState({ status, versions })
    const older = state.pending.filter((p) => compareVersions(p.version, target) < 0)
    if (older.length && !force) {
      throw new Error(
        `No se puede marcar ${target} porque siguen pendientes versiones anteriores: ${older
          .map((p) => p.version)
          .join(', ')}\nSi ya las documentaste todas, repetí con --force.`
      )
    }
    status.documentedUpTo = target
    status.lastReview = todayISO()
    for (const key of Object.keys(status.resolved)) {
      if (compareVersions(key, target) <= 0) delete status.resolved[key]
    }
    writeJson(STATUS_FILE, status)
    const fresh = writeReport(status)
    console.log(`✅ Documentación marcada como al día hasta v${target} (revisión ${status.lastReview}).`)
    console.log(`   Quedan ${fresh.pending.length} versión(es) por delante.`)
    return
  }

  if (command === 'skip' || command === 'partial' || command === 'unresolve') {
    if (!target) throw new Error('Falta la versión. Ejemplo: skip 0.78.0-alpha --note "solo rendimiento"')
    if (command === 'unresolve') {
      delete status.resolved[target]
    } else {
      const statuses = { skip: 'skipped', partial: 'partial' }
      if (command === 'skip' && !note) throw new Error('Falta --note "motivo" para skip.')
      if (command === 'partial' && !note) throw new Error('Falta --note "qué falta" para partial.')
      status.resolved[target] = { status: statuses[command], ...(note ? { note } : {}) }
    }
    writeJson(STATUS_FILE, status)
    const state = writeReport(status)
    console.log(`✅ v${target} → ${command === 'unresolve' ? 'pendiente' : status.resolved[target]?.status ?? 'pendiente'}.`)
    console.log(`   Quedan ${state.pending.length} versión(es) pendientes.`)
    return
  }

  throw new Error(`Comando desconocido: ${command}. Usá: status | report | check | mark | skip | partial | unresolve`)
}

try {
  main()
} catch (error) {
  console.error(`\nError: ${error.message}\n`)
  process.exit(1)
}
