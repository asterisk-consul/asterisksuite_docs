---
title: Stock y fabricación
description: Control de existencias, reposición y fabricación por BOM.
sidebar:
  order: 4
---

## Para qué sirve

Reúne el control de **stock** por depósito, el análisis de **disponibilidad comercial**, la **reposición** y la **fabricación** (producción a partir de BOM).

## Componentes

- **Disponibilidad**: stock físico, reservado, en tránsito y proyectado.
- **Reposición**: faltantes y cantidades sugeridas a reponer.
- **Fabricación**: registro de producción, descuento de materiales e historial.
- **Picking y pallets**: preparación y movimiento dentro del depósito (Logística).

Los accesos de la portada muestran **conteos reales**: el badge de **Productos** refleja la cantidad de productos activos (el servidor devuelve además el de inactivos) sin descargar el catálogo completo, y se mantiene correcto aunque navegues listados paginados.

## Páginas de esta sección

- [Disponibilidad de stock](/procesos/stock/disponibilidad/)
- [Reposición](/procesos/stock/reposicion/)
- [Fabricación](/procesos/stock/fabricacion/)
- [Picking y pallets](/procesos/stock/picking-y-pallets/)
- [Combustible](/procesos/stock/combustible/)

## Permisos necesarios

:::note[Permisos necesarios]
- Stock: Ver stock · Ver movimientos de stock · Crear movimientos de stock
- Reposición: Ver necesidades de reposición · Configurar políticas de reposición · Ejecutar sugerencias de reposición
- Fabricación: Acceder a fabricación y consultar materiales · Registrar fabricaciones y movimientos de materiales · Ver el historial de fabricación · Configurar BOM e ingeniería de productos · Ver costos de fabricación
:::

## Ver también

- [Productos](/configuracion/productos/) y [Componentes y BOM](/configuracion/productos/componentes-bom/).
- [Depósitos y ubicaciones](/configuracion/depositos-ubicaciones/).
