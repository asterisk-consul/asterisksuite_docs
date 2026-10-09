---
title: Pagos
description: Registrar el pago al proveedor y aplicarlo a las facturas pendientes.
sidebar:
  order: 4
---

## Para qué sirve

El **pago** registra la cancelación de las facturas de compra. Se gestiona desde **Tesorería → Pagos** (`/erp/treasury/payments`) y se inicia con **Pagar** o en **Nuevo pago** (`/erp/treasury/payments/create?type=PAYMENT`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver pagos · Crear pagos · Editar pagos · Confirmar pagos · Anular pagos
- Según la forma de pago pueden intervenir permisos de cajas, bancos, cheques y tarjetas.
:::

## Configuración previa

- **Caja abierta** (efectivo), **cuenta bancaria** (transferencia), **cheques** o **tarjetas** según el medio.
- Las **facturas de compra** deben estar **confirmadas**.

## Cómo registrar un pago

1. Desde la factura/OC usar **Pagar**, o ir a **Nuevo pago** con tipo **Pago (PAYMENT)**.
2. **Proveedor** y **moneda**.
3. **Forma de pago**: efectivo, transferencia bancaria, cheque o tarjeta.
4. **Documentos a aplicar**: seleccionar las facturas de compra pendientes y el **importe aplicado**.
5. **Retenciones**: el sistema puede **sugerir retenciones** practicadas según el motor fiscal (se pueden ajustar).
6. Guardar y **Confirmar** el pago.

## Confirmar el pago

Al confirmar, se actualiza la **cuenta corriente del proveedor** y el **saldo** de las facturas aplicadas.

## Reglas y validaciones

- El **importe aplicado** no puede superar el **saldo pendiente** del documento.
- Se requiere **caja abierta** o **cuenta** según el medio.
- Las **retenciones practicadas** dependen del motor fiscal y del medio.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| La factura no aparece para pagar | No está confirmada o ya está saldada. | Verificá su estado y saldo. |
| No puedo pagar en efectivo | No hay caja abierta. | Abrí una sesión de caja. |
| No se sugieren retenciones | Falta configuración o el medio no las genera. | Revisá [Reglas y alícuotas](/configuracion/impuestos/reglas-y-alicuotas/). |

## Ver también

- [Facturas de compra](/procesos/compras/facturas-de-compra/).
- [Compras](/procesos/compras/).
