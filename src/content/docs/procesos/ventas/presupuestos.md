---
title: Presupuestos
description: Crear un presupuesto para el cliente y convertirlo en Orden de Venta.
sidebar:
  order: 2
---

## Para qué sirve

El **presupuesto** es una oferta comercial al cliente, con su validez y condiciones. Si el cliente acepta, el presupuesto se **convierte en Orden de Venta**.

Se administran en **Ventas → Presupuestos** (`/erp/budgets`) y se crean en **Nuevo presupuesto** (`/erp/sales/new?category=QUOTE`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver ventas · Crear ventas · Editar ventas · Confirmar ventas · Anular ventas
- También aplican los permisos por tipo de documento (presupuestos) si tu empresa los usa.
:::

## Configuración previa

- El **cliente** debe existir.
- Los **productos** deben tener precio para la moneda.
- Debe existir un **tipo de documento** de categoría Presupuesto y su **secuencia**.

## Cómo crear un presupuesto

1. Ir a **Presupuestos** y presionar **Nuevo presupuesto**.
2. **Datos generales**: cliente, fecha, moneda, descripción, referencia y tipo de documento/secuencia.
3. **Productos**: agregar ítems con producto, cantidad y precio.
4. **Datos del Presupuesto** (extensión):
   - **Fecha de vencimiento** (validez).
   - **Garantía** (ej. "12 meses").
   - **Observaciones comerciales**, **Observaciones internas** y **Exclusiones**.
   - **Términos y condiciones**.
5. Presionar **Guardar Presupuesto**.

## Estados

| N° | Estado | Descripción |
|---|---|---|
| 0 | **Borrador** | Creado, aún no enviado. |
| 1 | **Enviado** | Enviado al cliente, esperando respuesta. |
| 2 | **Aprobado** | El cliente aceptó. |
| 3 | **Rechazado** | El cliente rechazó. |
| 4 | **Vencido** | Expiró la validez. |
| 5 | **Convertido** | Convertido en Orden de Venta. |
| 6 | **Cancelado** | Cancelado. |

## Convertir en Orden de Venta

Con el presupuesto **Aprobado**, se puede **convertir en Orden de Venta** (pasa a estado *Convertido*). La OV toma el cliente y los ítems del presupuesto.

## Reglas y validaciones

- El presupuesto debe tener **cliente** y al menos un **ítem**.
- La **fecha de vencimiento** define la validez.
- Solo un presupuesto **Aprobado** puede convertirse en OV.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo convertir en OV | El presupuesto no está Aprobado. | Cambiá su estado a Aprobado. |
| No aparece el cliente | No está cargado. | Crealo en Contrapartes. |
| El presupuesto figura Vencido | Pasó la fecha de vencimiento. | Generá uno nuevo con nueva validez. |

## Ver también

- [Ventas](/procesos/ventas/) — circuito completo.
- [Crear una Orden de Venta](/procesos/ventas/crear-orden-de-venta/).
