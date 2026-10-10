---
title: Auditoría
description: Registro de cambios del sistema.
sidebar:
  order: 6
---

## Para qué sirve

El sistema registra **automáticamente** los cambios sobre los datos (alta, edición y baja), guardando el **usuario**, la **fecha/hora**, la **IP** y los **valores anteriores y nuevos**. Esto permite auditar quién hizo cada cambio.

## Permisos necesarios

:::note[Permisos necesarios]
- Acceso según los permisos de administración/auditoría de tu empresa.
:::

## Qué se registra

- **Entidad** afectada y **operación** (crear, editar, eliminar).
- **Valores** previos y nuevos.
- **Usuario** y **dirección IP**.
- **Fecha y hora**.

## Cómo aprovecharla

- Para **rastrear** cambios de precios, documentos, permisos o configuración.
- Como respaldo ante discrepancias: permite reconstruir qué cambió y cuándo.
- Cada documento y entidad suele mostrar además **quién creó/modificó** y con qué fecha.

## Consideraciones

- La baja lógica (soft delete) también queda registrada y el elemento puede recuperarse desde la [Papelera](/administracion/papelera/).

## Ver también

- [Papelera](/administracion/papelera/).
- [Seguridad](/administracion/seguridad/).
