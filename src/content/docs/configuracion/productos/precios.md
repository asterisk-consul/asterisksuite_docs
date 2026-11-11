---
title: Precios de producto
description: Definir precios de venta y compra por moneda, costos manuales y precios por variante.
sidebar:
  order: 8
---

## Para qué sirve

Los **precios del producto** son la base de los documentos de venta y compra. Se definen **por moneda** y se administran dentro del producto, en la pestaña **Precios**.

## Permisos necesarios

:::note[Permisos necesarios]
La gestión de precios se habilita con acceso a la gestión de productos:

- Ver productos
- Editar productos

Además, el producto debe tener activada la casilla **Habilitar precio** para cargar precios de venta.
:::

## Dónde se administran

1. Abrir el producto (`/productos/[id]/edit`).
2. Entrar a la pestaña **Precios**.

## Habilitar precio

Antes de cargar precios de venta, el producto debe tener **Habilitar precio** activado (casilla en los datos del producto). Desde la pestaña Precios hay un botón **Habilitar precio** cuando está deshabilitado.

## Precio general por moneda

Para cada moneda se pueden definir:

- **Precio de venta** (`sale_price`).
- **Precio de compra / costo** (`price`).

Se agregan filas por moneda, se editan y se eliminan. Cada cambio queda registrado en el **historial**.

## Actualización automática al confirmar facturas

En **Configuración → Productos, stock y precios → Actualización de precios** se pueden habilitar por separado cuatro opciones. También se encuentra buscando **Actualización de precios** en el Centro de configuración:

- **Precio acordado con el cliente** al confirmar facturas de venta.
- **Precio general de venta** al confirmar facturas de venta.
- **Precio acordado con el proveedor** al confirmar facturas de compra.
- **Costo global de compra** al confirmar facturas de compra.

El precio acordado se guarda para la contraparte y moneda del comprobante. El precio general o el costo global se actualiza en el producto o su variante. Por defecto se mantienen activos los precios por contraparte y el costo global de compra; el precio general de venta empieza desactivado.

Después de confirmar una factura, un toast resume qué opciones cambiaron, cuáles estaban desactivadas y si faltó el permiso para modificar el precio general de venta. Su botón **Cambiar configuración** lleva directamente a los cuatro interruptores. Para editar la configuración se necesita `product-prices.update`; actualizar el precio general de venta también requiere ese permiso al confirmar.

Las notas de crédito y débito no actualizan precios ni costos de productos y no generan avisos de actualización.

## Costo manual

Si el producto no calcula su costo automáticamente, se puede cargar un **costo unitario** indicando:

- **Costo unitario** (obligatorio).
- **Moneda** (obligatorio).
- **Referencia u observación** (opcional).

## Precios por variante

Si el producto tiene **variantes**, se pueden definir precios y costos por variante, además del precio general. Los botones de la pestaña permiten agregar, editar, ver historial y eliminar.

## Precio automático

Cuando el producto tiene origen de costo **BOM** o **Ingeniería**, el costo se calcula a partir de sus componentes. El precio de venta se puede obtener automáticamente como costo + margen (%).

## Reglas y validaciones

- El precio de venta requiere **Habilitar precio**.
- El **costo manual** requiere costo mayor a 0 y moneda.
- Los precios se guardan **por moneda**; una misma moneda no debería duplicarse para el mismo producto.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo cargar precio de venta | El producto no tiene "Habilitar precio". | Activá la casilla o usá **Habilitar precio**. |
| El costo no coincide con el BOM | El costo es manual. | Cambiá el origen de costo a BOM/Ingeniería o recalculá. |
| No veo el precio en la venta | Falta precio para la moneda del documento. | Cargá el precio en esa moneda o usá otra. |

## Ver también

- [Listas de precio](/configuracion/productos/listas-de-precio/).
- [Precios por cliente y proveedor](/configuracion/productos/precios-por-contraparte/).
- [Componentes y BOM](/configuracion/productos/componentes-bom/).
