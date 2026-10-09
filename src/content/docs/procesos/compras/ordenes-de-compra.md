---
title: Órdenes de compra
description: Crear una orden de compra a un proveedor.
sidebar:
  order: 1
---

## Para qué sirve

La **Orden de Compra (OC)** es la solicitud de mercadería al proveedor. Se administra en **Compras → Órdenes de Compra** (`/erp/purchases/orders`) y se crea en **Nueva Orden de Compra** (`/erp/purchases/orders/new`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver compras · Crear compras · Editar compras · Confirmar compras · Anular compras
- También aplican los permisos por tipo de documento (órdenes de compra).
:::

## Configuración previa

- El **proveedor** debe existir (Contrapartes).
- Los **productos** deben tener precio de compra/costo.
- Debe existir un **tipo de documento** de categoría Orden (compra) y su **secuencia**.

## Cómo crear una OC

1. Ir a **Órdenes de Compra** y presionar **Nueva Orden de Compra**.
2. **Datos generales**: proveedor, fecha, moneda, descripción, referencia y tipo de documento/secuencia.
3. **Productos**: agregar ítems con producto, cantidad y precio.
4. **Información de recepción** (extensión de la OC):
   - **Prioridad**: Baja, Media, Alta o Urgente.
   - **Fecha estimada de entrega**.
   - **Dirección de recepción**, **contacto**, **teléfono** y **tiempo de entrega**.
   - **Transporte** e **instrucciones de recepción**.
5. Presionar **Guardar Orden de Compra**.

La OC se crea en estado **Borrador**.

## Estados

La OC usa los mismos estados que la orden de venta: **Borrador**, **Aprobada**, **En Preparación**, **Lista Despacho**, **Parcial Entregada**, **Entregada**, **Facturada**, **Cerrada** y **Cancelada**.

## Acciones relacionadas

Desde la OC se puede **Confirmar**, **cambiar de estado** y generar la **recepción** (remito de compra) y la **factura de compra**.

## Reglas y validaciones

- La OC debe tener **proveedor** y al menos un **ítem**.
- La **secuencia** define el número del documento.
- Una OC confirmada no se edita; se avanza de estado o se anula.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No aparece el proveedor | No está cargado. | Crealo en Contrapartes. |
| El producto no tiene costo | Falta precio de compra. | Cargá el costo en el producto. |
| No puedo editar la OC | Está confirmada. | Cambiá de estado o anulá y recreá. |

## Ver también

- [Compras](/procesos/compras/).
- [Recepciones](/procesos/compras/recepciones/).
