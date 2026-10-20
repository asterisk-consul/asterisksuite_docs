# Asterisk Suite — Documentación

Documentación funcional y técnica de Asterisk Suite, construida con [Astro Starlight](https://starlight.astro.build/).

Sitio: https://docs.asterisksuite.cloud

## Requisitos

- Node.js 22+
- pnpm 11 (se activa vía `corepack enable`)

## Comandos

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo en http://localhost:4321
pnpm build        # build de producción a dist/
pnpm preview      # previsualizar el build

pnpm docs:status  # hasta qué versión de la app están documentados los docs
pnpm docs:report  # regenerar DOCS_STATUS.md y la página de estado publicada
pnpm docs:check   # sale con código 1 si hay versiones de la app sin revisar
```

## Estado de la documentación (versión)

El portal se versiona contra el historial de la app
(`../asterisksuite_frontend/versiones/versions.json`). Siempre se sabe hasta qué versión
está actualizada:

| Archivo | Qué es |
| --- | --- |
| `docs-status.json` | Fuente de verdad: `documentedUpTo` (corte), versiones `resolved` (`skipped`/`partial` con nota) y los campos derivados `app`/`pending` que usa el banner en el build del contenedor. |
| `DOCS_STATUS.md` | Reporte generado con cada versión pendiente y sus cambios. No editar a mano. |
| `src/content/docs/docs/estado-de-la-documentacion.mdx` | El mismo reporte publicado en el sitio. |
| `scripts/docs-status.mjs` | CLI que mantiene todo lo anterior. |

Starlight muestra un **banner en todas las páginas** con el estado
(vía `routeMiddleware` en `astro.config.mjs` → `src/routeData.mjs`), por ejemplo:
*"Documentación al día hasta v0.71.0-alpha · app en v0.82.0-alpha · 11 versiones pendientes de revisar"*.
Se puede cerrar con el botón **×**: queda oculto en ese navegador sólo para el estado
actual (se guarda en `localStorage`) y **vuelve a aparecer cuando cambia el estado**
(corte nuevo o versión de la app pendiente), así no se pierde el aviso.

### Flujo después de cada versión de la app

```bash
pnpm docs:status                              # qué cambió y qué falta revisar
# ... actualizar los .md/.mdx de src/content/docs/ ...
pnpm docs:status -- mark 0.83.0-alpha        # subir el corte (regenera el reporte)
# o, si la versión no aporta cambios documentales:
pnpm docs:status -- skip 0.84.0-alpha --note "solo rendimiento"
# o, si quedó a medias:
pnpm docs:status -- partial 0.85.0-alpha --note "falta la página de X"
```

Commitear junto con los contenidos: `docs-status.json`, `DOCS_STATUS.md` y
`src/content/docs/docs/estado-de-la-documentacion.mdx`.

## Estructura

```
.
├── .github/workflows/docker.yml   # build + push a GHCR + webhook Dokploy
├── public/                        # assets estáticos (favicon, imágenes)
├── scripts/
│   ├── docs-status.mjs            # CLI de estado de la documentación
│   └── status-lib.mjs             # lógica compartida (estado, reportes, banner)
├── src/
│   ├── assets/                    # logo y otros assets procesados por Astro
│   ├── content/docs/              # contenido (Markdown/MDX)
│   │   ├── index.mdx              # portada
│   │   ├── primeros-pasos/
│   │   ├── procesos/
│   │   ├── configuracion/
│   │   ├── administracion/
│   │   └── solucion-de-problemas/
│   ├── routeData.mjs              # banner de estado en todas las páginas
│   └── styles/custom.css          # tema
├── docs-status.json               # fuente de verdad del estado por versión
├── DOCS_STATUS.md                 # reporte generado
├── astro.config.mjs               # configuración de Astro y Starlight
├── Dockerfile                     # build Astro + runtime Node (server.mjs)
└── server.mjs                     # servidor estático (puerto 3000)
```

## Agregar contenido

Crear archivos `.md` o `.mdx` dentro de la sección correspondiente en `src/content/docs/`. El frontmatter mínimo es:

```md
---
title: Título de la página
description: Descripción breve.
sidebar:
  order: 1
---
```

Las secciones de la barra lateral se generan automáticamente a partir de las carpetas configuradas en `astro.config.mjs`.

## Deploy

El workflow `.github/workflows/docker.yml` (en la rama `main`) construye la imagen, la publica en `ghcr.io/asterisk-consul/asterisksuite-docs:prod` y dispara el despliegue en Dokploy mediante el secret `DOKPLOY_DEPLOY_WEBHOOK`.

El contenedor corre un servidor estático Node sobre los archivos de `dist/`, escuchando en el puerto `3000` (igual que el frontend).
