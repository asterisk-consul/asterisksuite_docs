---
title: Cuentas corrientes
description: Saldos a cobrar y a pagar por cliente, proveedor o empleado.
sidebar:
  order: 4
---

## Para qué sirve

Las **cuentas corrientes** muestran los **saldos** de cada tercero: cuánto te deben (a cobrar) y cuánto debés (a pagar). Se administran en **Tesorería → Cuentas Corrientes** (`/erp/treasury/current-accounts`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver cuentas corrientes (y permisos de pagos/cobros para registrar movimientos).
:::

## Vistas y filtros

- Pestañas **Activas** e **Historial**.
- Filtro por **tipo de tercero**: Cliente, Proveedor o Empleado.
- Filtro por **saldo**: positivo, negativo o en cero.

La tabla muestra **tercero**, **tipo**, **última actividad** y **saldo** (en moneda base).

## Movimientos

El saldo se compone de movimientos como:

- **Cobro** / **Pago**.
- **Anticipo**.
- **Préstamo** y **pago de préstamo**.
- **Ajuste**.
- **Transferencia**.
- **Cheque emitido**, **cheque recibido** y **cheque rechazado**.

## Saldo inicial

Desde la pantalla se puede registrar un **saldo inicial** por tercero, para migrar cuentas existentes.

## Detalle por tercero

Al abrir un tercero (`/erp/treasury/current-accounts/[partyId]`) se ve su **historial de movimientos** y el saldo resultante.

## Reglas y consideraciones

- Los saldos se expresan en la **moneda base**.
- Los movimientos se generan desde pagos, cobros y cheques.
- Un saldo positivo/negativo indica a favor o contra el tercero según el tipo.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| El saldo no coincide | Falta registrar un cobro/pago o el saldo inicial. | Revisá los movimientos del tercero. |
| No aparece el tercero | No tiene movimientos. | Registrá un movimiento o saldo inicial. |

## Ver también

- [Cobros](/procesos/ventas/cobros/) y [Pagos](/procesos/compras/pagos/).
- [Cheques](/procesos/tesoreria/cheques/).
