---
title: Facturas de compra
description: Registrar el comprobante del proveedor y su confirmación.
sidebar:
  order: 3
---

## Para qué sirve

La **factura de compra** registra el comprobante del proveedor. Se administra en **Compras** (`/erp/purchases/purchases-documents`) y se crea en **Nuevo Comprobante de Compra** (`/erp/purchases/purchases-documents/new`). Las **notas de crédito/débito** de compra ajustan una factura.

## Permisos necesarios

:::note[Permisos necesarios]
- Ver compras · Crear compras · Editar compras · Confirmar compras · Anular compras
- También aplican los permisos por tipo de documento (facturas y notas de compra).
:::

## Configuración previa

- El **proveedor** debe existir.
- **Tipo de documento** de categoría Factura (compra) y su **secuencia**.
- **Impuestos** y **categorías fiscales** configurados (para el cálculo de IVA de compra).

## Cómo registrar una factura de compra

1. Ir a **Nuevo Comprobante de Compra** (o generarla desde la OC/recepción).
2. **Datos generales**: proveedor, fecha, moneda, tipo de documento y secuencia.
3. **Productos**: ítems con producto, cantidad y precio.
4. El sistema calcula los **impuestos** y el total.
5. Guardar y **Confirmar**.

Para las **notas de crédito/débito** de compra, se selecciona el **documento de referencia** (la factura) y se ajustan los ítems.

## Confirmación

Al confirmar, el comprobante actualiza la **cuenta corriente del proveedor** (cuenta por pagar) y queda disponible para su **pago**.

## Estados

| N° | Estado | Descripción |
|---|---|---|
| 0 | **Borrador** | Creado, aún no confirmado. |
| 1 | **Pendiente** | Pendiente de confirmación. |
| 2 | **Confirmada** | Confirmada. |
| 3 | **Anulada** | Anulada. |

## Reglas y validaciones

- La factura debe tener **proveedor** y al menos un **ítem**.
- La confirmación actualiza la **cuenta corriente**.
- Los documentos confirmados no se editan; se ajustan con notas.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| El IVA no es el esperado | Categoría fiscal o impuestos mal configurados. | Revisá [Impuestos](/configuracion/impuestos/). |
| No puedo editar | Está confirmada. | Emití una nota de crédito/débito. |
| No aparece para pagar | No está confirmada. | Confirmá la factura. |

## Ver también

- [Órdenes de compra](/procesos/compras/ordenes-de-compra/) y [Recepciones](/procesos/compras/recepciones/).
- [Pagos](/procesos/compras/pagos/).
