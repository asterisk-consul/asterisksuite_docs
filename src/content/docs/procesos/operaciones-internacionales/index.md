---
title: Operaciones internacionales
description: Importaciones y exportaciones, contenedores y su seguimiento.
sidebar:
  order: 1
---

## Para qué sirve

El módulo de **Operaciones internacionales** gestiona **importaciones** y **exportaciones**: la operación, sus **contenedores**, el **seguimiento** (eventos), los gastos internacionales y la documentación asociada. Se administra en **Operaciones internacionales** (`/operaciones-internacionales`).

## Estados de una operación

```mermaid
flowchart LR
  A[Planificada] --> B[En preparación] --> C[Embarcada] --> D[En tránsito] --> E[Arribada] --> F[Aduana] --> G[Liberada] --> H[Entregada] --> I[Cerrada]
```

## Componentes

- **Operación** — datos generales, origen/destino, transporte, incoterm.
- **Contenedores** — número, tipo, BL, buque, puertos y seguimiento.
- **Documentos** y **cotizaciones** asociadas.
- **Gastos internacionales** — flete, seguro, despachante, derechos, etc.
- **Configuración** — parámetros del módulo.

## Páginas de esta sección

- [Operaciones](/procesos/operaciones-internacionales/operaciones/)
- [Contenedores y seguimiento](/procesos/operaciones-internacionales/contenedores/)

## Permisos necesarios

:::note[Permisos necesarios]
- Ver operaciones internacionales · Crear operaciones internacionales · Editar operaciones internacionales · Eliminar operaciones internacionales
:::

## Ver también

- [Contrapartes](/configuracion/contrapartes/) — proveedores del exterior.
- [Depósitos y ubicaciones](/configuracion/depositos-ubicaciones/).
