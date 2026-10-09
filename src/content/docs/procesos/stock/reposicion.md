---
title: Reposición
description: Detectar faltantes y preparar las cantidades a reponer.
sidebar:
  order: 2
---

## Para qué sirve

La **reposición** detecta faltantes, considera los **arribos próximos** y sugiere **cantidades a reponer** para cada producto. Se consulta en **Stock → Reposición** (`/stock/reposicion`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver necesidades de reposición · Configurar políticas de reposición · Ejecutar sugerencias de reposición
:::

## Estados

| Estado | Descripción |
|---|---|
| **Crítico** | Por debajo del mínimo; reponer ya. |
| **Reponer** | Requiere reposición. |
| **Cubierto** | El faltante se cubre con arribos en camino. |
| **Correcto** | Nivel adecuado. |
| **Sin configurar** | El producto no tiene política de reposición. |

## Datos

Para cada producto se muestra el **stock físico**, el **stock objetivo** y la **cantidad sugerida** a reponer, según su política y los arribos.

## Cómo usar

1. Ir a **Stock → Reposición**.
2. Filtrar por **estado** y buscar producto.
3. Según el caso, incluir u ocultar los **productos sin configurar**.
4. Preparar las cantidades a reponer (orden de compra o ejecución de la sugerencia, según permisos).

## Reglas y consideraciones

- Para que un producto aparezca con sugerencias, debe tener **política/stock objetivo** configurado.
- Los **arribos próximos** pueden convertir un faltante en **Cubierto**.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| Todo figura "Sin configurar" | Falta la política de reposición. | Configurá el stock objetivo/mínimo. |
| No sugiere reponer | Hay arribos que cubren el faltante. | Es correcto: estado "Cubierto". |

## Ver también

- [Disponibilidad de stock](/procesos/stock/disponibilidad/).
- [Órdenes de compra](/procesos/compras/ordenes-de-compra/).
