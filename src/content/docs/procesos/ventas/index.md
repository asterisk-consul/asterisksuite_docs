---
title: Ventas
description: Circuito comercial de ventas, del presupuesto al cobro.
sidebar:
  order: 1
---

## Para qué sirve

El módulo de **Ventas** cubre el circuito comercial completo, desde el presupuesto hasta el cobro, pasando por la orden de venta, el remito y la factura.

## Circuito

```mermaid
flowchart LR
  A[Presupuesto] --> B[Orden de Venta]
  B --> C[Orden de Despacho]
  C --> D[Remito]
  B --> E[Factura]
  D --> E
  E --> F[Cobro]
```

## Documentos

| Documento | Categoría | Para qué |
|---|---|---|
| **Presupuesto** | `QUOTE` | Oferta al cliente, con validez. |
| **Orden de Venta** | `ORDER` | Compromiso de venta; dispara preparación y despacho. |
| **Orden de Despacho** | (logística) | Planificación del envío. |
| **Remito** | `REMITO` | Entrega de mercadería. |
| **Factura** | `INVOICE` | Comprobante fiscal. |
| **Nota de Crédito / Débito** | `CREDIT_NOTE` / `DEBIT_NOTE` | Ajustes sobre facturas. |
| **Recibo** | `RECEIPT` | Constancia de cobro. |

## Páginas de esta sección

- [Presupuestos](/procesos/ventas/presupuestos/)
- [Crear una Orden de Venta](/procesos/ventas/crear-orden-de-venta/)
- [Remitos de venta](/procesos/ventas/remitos/)
- [Facturación](/procesos/ventas/facturacion/)
- [Cobros](/procesos/ventas/cobros/)
- [Mis ventas y reportes](/procesos/ventas/mis-ventas/)
- [Circuito de ventas](/procesos/ventas/circuito-de-ventas/) — configuración

## Permisos necesarios

:::note[Permisos necesarios]
- Ver ventas · Crear ventas · Editar ventas · Confirmar ventas · Anular ventas · Eliminar ventas
- Además existen permisos por tipo de documento (presupuestos, órdenes de venta, facturas, remitos, notas de crédito/débito), que permiten un control más fino.
- **Ver precios, totales y comisiones de órdenes de venta restringidas** (`sales.orders.view_amounts`): habilita ver los importes cuando el tipo de documento los oculta en un estado.
:::

## Visibilidad e identificación de documentos

- **Importes restringidos**: el tipo de documento puede ocultar precios, totales y comisiones de la OV en estados elegidos; sin el permiso, los listados muestran estado comercial derivado, avance de cobro e indicadores operativos **sin revelar dinero** (ver [Crear una Orden de Venta](/procesos/ventas/crear-orden-de-venta/#importes-restringidos)).
- **Cargado por**: los usuarios con membresía **OWNER** o **ADMIN** ven la columna **Cargado por** en los listados de ventas, órdenes de venta, remitos y compras.
- **Plantillas comerciales**: los presupuestos y las OV se imprimen con formatos propios de cada empresa, con bloques ordenables y vista previa (ver [Presupuestos](/procesos/ventas/presupuestos/#formato-de-impresión-plantillas-comerciales)).

## Ver también

- [Contrapartes](/configuracion/contrapartes/) — clientes.
- [Productos](/configuracion/productos/) — precios.
- [Secuencias y tipos de documento](/configuracion/documentos/).
