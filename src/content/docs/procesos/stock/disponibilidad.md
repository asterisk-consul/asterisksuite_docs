---
title: Disponibilidad de stock
description: Stock físico, reservado, en tránsito y proyectado por producto.
sidebar:
  order: 1
---

## Para qué sirve

Muestra la **disponibilidad comercial** de cada producto: cuánto hay, cuánto está reservado, cuánto está en tránsito y cuánto habrá disponible en los próximos días. Se consulta en **Stock → Disponibilidad** (`/stock/disponibilidad`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver stock · Ver movimientos de stock
:::

## Columnas

- **Stock físico** — existencias reales en depósito.
- **Reservado** — cantidad comprometida (reservas de ventas).
- **Disponible hoy** — físico menos lo reservado.
- **En tránsito** — mercadería en camino (compras/transferencias).
- **Disponible proyectado** — considerando lo reservado y los **arribos** en el horizonte elegido.

## Cómo consultar

1. Ir a **Stock → Disponibilidad**.
2. Buscar el producto por nombre o código.
3. Elegir la **proyección de entrega** (7, 15, 30, 60 o 90 días).
4. Presionar **Actualizar**.

## Notas

- El **disponible proyectado** ayuda a prometer entregas realistas.
- Las **reservas** se generan al confirmar órdenes de venta.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| El disponible no coincide | Hay reservas o tránsito pendientes. | Revisá las columnas de reservado y tránsito. |
| No aparece el producto | Está inactivo o sin stock configurado. | Verificá el producto y su depósito. |

## Ver también

- [Reposición](/procesos/stock/reposicion/).
- [Depósitos y ubicaciones](/configuracion/depositos-ubicaciones/).
