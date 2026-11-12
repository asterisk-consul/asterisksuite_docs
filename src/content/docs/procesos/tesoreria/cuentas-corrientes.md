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
- Solo OWNER o ADMIN puede eliminar un ajuste manual de corrección de saldo.
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
- **Retenciones** practicadas a proveedores o sufridas de clientes.

Al confirmar un anticipo, el saldo disponible se registra en la cuenta corriente del cliente o proveedor. Cuando se aplica a una factura o a una OV permitida por el circuito, disminuye el disponible y se registra la imputación en el comprobante sin duplicar el saldo. Si se quita la aplicación, el importe vuelve a quedar disponible.

## Saldo inicial

Desde la pantalla se puede registrar un **saldo inicial** por tercero, para migrar cuentas existentes.

## Retenciones en cuenta corriente

Desde **Acciones de cuenta → Registrar retención** podés cargar retenciones sugeridas por el motor fiscal o agregarlas manualmente. Está disponible para clientes, proveedores y entidades habilitadas. Se registra la retención en el módulo fiscal y se descuenta de la cuenta corriente; no crea un pago o cobro ni genera movimientos de caja o banco.

La moneda y el tipo de cambio se informan igual que en pagos y cobros. Si la retención se aplica al **saldo inicial**, el sistema también aumenta el importe pagado de ese documento y reduce su pendiente convertido a la moneda del saldo inicial. Si no seleccionás el saldo inicial, el movimiento afecta solo la cuenta corriente y el registro fiscal.

Las retenciones practicadas aparecen entre las retenciones pendientes de asociar a un VEP. Las retenciones sufridas se muestran en la vista **Sufridas** del módulo fiscal.

## Detalle por tercero

Al abrir un tercero (`/erp/treasury/current-accounts/[partyId]`), el **resumen del saldo** queda visible y podés alternar entre dos pestañas:

- **Detalle de la cuenta**: historial de movimientos, seleccionado por defecto al entrar.
- **Análisis de la cuenta**: evolución y composición de los movimientos.

Al abrir un movimiento y volver al detalle, se conserva la pestaña activa y la posición de scroll.

OWNER y ADMIN pueden eliminar un **ajuste manual de corrección de saldo** desde su fila. Se envía a la papelera y el saldo corrido de la cuenta se recalcula. Esta opción no aparece para facturas ni pagos: esos movimientos deben anularse desde el módulo que los originó para conservar su trazabilidad.

Una **NC/ND confirmada sin factura de origen** también puede anularse y enviarse a la papelera desde Compras o Ventas si no tiene pagos, documentos relacionados ni otros movimientos. Se retira su movimiento activo y se recalcula la cuenta corriente en la misma operación; el comprobante se conserva en la papelera para auditoría y restauración.

## Reglas y consideraciones

- Los saldos se expresan en la **moneda base**.
- Los movimientos se generan desde documentos, pagos, cobros y cheques.
- Para incorporar anticipos confirmados anteriores a este comportamiento, ejecutar una vez `prisma/repairs/20261111_backfill_advance_current_accounts.sql` en cada base tenant. El script solo agrega el saldo aún disponible y recalcula la cuenta corriente; no modifica documentos, aplicaciones, caja ni bancos.
- Un saldo positivo/negativo indica a favor o contra el tercero según el tipo.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| El saldo no coincide | Falta registrar un cobro/pago o el saldo inicial. | Revisá los movimientos del tercero. |
| No aparece el tercero | No tiene movimientos. | Registrá un movimiento o saldo inicial. |

## Ver también

- [Cobros](/procesos/ventas/cobros/) y [Pagos](/procesos/compras/pagos/).
- [Cheques](/procesos/tesoreria/cheques/).
