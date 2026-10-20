---
title: Mis ventas y reportes
description: Panel del vendedor y reportes de ventas.
sidebar:
  order: 6
---

## Para qué sirve

**Mis ventas** es el panel del vendedor con sus órdenes, pendientes y análisis. Los **reportes de ventas** analizan la operación por punto de venta y producto.

## Permisos necesarios

:::note[Permisos necesarios]
- Ver ventas · Exportar reportes de ventas
- **Ver precios, totales y comisiones de órdenes de venta restringidas** (`sales.orders.view_amounts`) para ver importes cuando el tipo de documento los oculta.
:::

## Mis ventas

Se accede desde **Mis ventas** (`/mis-ventas`):

- **Órdenes** — las OV del vendedor.
- **Pendientes** — lo que resta facturar/entregar.
- **Análisis** — métricas del período.
- **Por cliente** — ventas agrupadas por cliente.

## Estados e importes en los listados

Los listados de **Ventas**, **Órdenes de Venta** y **Remitos** muestran, sin necesidad de abrir el documento:

- **Estados comerciales derivados** según el avance real (En preparación, Lista para despacho, Remito pendiente, Parcialmente entregada…).
- **Avance porcentual de cobro** (% cobrado y % requerido por el circuito de ventas).
- **Indicadores operativos** (borradores, en preparación, listas para despacho, remitos pendientes).

Si el tipo de documento restringe importes en ese estado y no tenés el permiso `sales.orders.view_amounts`, la columna **Total** muestra **Restringido** y el detalle no revela precios, totales ni comisiones: seguís operando con los estados y porcentajes. OWNER y ADMIN ven los importes siempre.

## Reportes de ventas

En **Ventas → Reportes** (`/erp/sales/sales-reports`):

- **Por punto de venta** — ventas por punto/secuencia.
- **Productos** — ventas por producto.
- **Ventas** — detalle general.

## Comisiones

El vendedor tiene **comisión (%)** y **base** (facturado o cobrado) definidos en su ficha de empleado. Las comisiones **ya no se cargan en la OV**: se asignan por período en la bandeja **RRHH → Reportes → Comisiones** (`/erp/rrhh/commissions`), con varios vendedores por documento, participación y liquidación por facturación o cobro (ver [Vales y comisiones](/procesos/rrhh/vales-y-comisiones/)).

## Ver también

- [Ventas](/procesos/ventas/) y [Crear una Orden de Venta](/procesos/ventas/crear-orden-de-venta/).
- [Vales y comisiones](/procesos/rrhh/vales-y-comisiones/).
- [Gestionar roles y permisos](/administracion/usuarios-roles-permisos/gestionar-roles/).
