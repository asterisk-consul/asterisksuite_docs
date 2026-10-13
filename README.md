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
```

## Estructura

```
.
├── .github/workflows/docker.yml   # build + push a GHCR + webhook Dokploy
├── public/                        # assets estáticos (favicon, imágenes)
├── src/
│   ├── assets/                    # logo y otros assets procesados por Astro
│   ├── content/docs/              # contenido (Markdown/MDX)
│   │   ├── index.mdx              # portada
│   │   ├── primeros-pasos/
│   │   ├── procesos/
│   │   ├── configuracion/
│   │   ├── administracion/
│   │   └── solucion-de-problemas/
│   └── styles/custom.css          # tema
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
