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

## Portada de Stock

La página **Stock** reúne los datos de consulta rápida y los accesos del menú lateral. Según los permisos de la persona, muestra:

- Productos activos y cantidad total del catálogo.
- Depósitos activos y cantidad total.
- Productos que requieren reposición, separados entre críticos y para reponer.
- Productos inventariables que todavía no tienen una política de reposición.

El panel **Reposición prioritaria** presenta hasta cinco productos críticos o por debajo del punto de reposición, con su disponibilidad actual. Desde **Estado de reposición** se puede abrir el informe filtrado por cada estado. Los accesos se agrupan en **Catálogo** (productos, categorías, etiquetas, unidades, plantillas de costo y productos por contraparte) y **Operación** (depósitos, disponibilidad, reposición y fabricación); solo se muestran los destinos habilitados para los permisos de la persona.

**Fabricación** está dentro del menú **Stock**. Sus opciones mantienen permisos independientes: consultar el resumen, ejecutar fabricaciones, consultar el historial y administrar los BOM requieren sus permisos de producción correspondientes.

## Páginas de esta sección

- [Disponibilidad de stock](/procesos/stock/disponibilidad/)
- [Reposición](/procesos/stock/reposicion/)
- [Fabricación](/procesos/stock/fabricacion/)
- [Picking y pallets](/procesos/stock/picking-y-pallets/)

## Permisos necesarios

:::note[Permisos necesarios]
- Stock: Ver stock · Ver movimientos de stock · Crear movimientos de stock
- Reposición: Ver necesidades de reposición · Configurar políticas de reposición · Ejecutar sugerencias de reposición
- Fabricación: Acceder a fabricación y consultar materiales · Registrar fabricaciones y movimientos de materiales · Ver el historial de fabricación · Configurar BOM e ingeniería de productos · Ver costos de fabricación
:::

## Ver también

- [Productos](/configuracion/productos/) y [Componentes y BOM](/configuracion/productos/componentes-bom/).
- [Depósitos y ubicaciones](/configuracion/depositos-ubicaciones/).
