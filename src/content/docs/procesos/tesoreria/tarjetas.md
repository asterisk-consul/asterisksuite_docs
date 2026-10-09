---
title: Tarjetas
description: Tarjetas corporativas y canales de cobro con tarjeta, y sus liquidaciones.
sidebar:
  order: 5
---

## Para qué sirve

El módulo de **Tarjetas** administra dos cosas:

- **Tarjetas corporativas** (de la empresa), con sus cuotas/resúmenes y pagos.
- **Canales de cobro** (adquirentes o procesadores) usados para cobrar ventas con tarjeta.

Se administran en **Tesorería → Tarjetas** (`/erp/treasury/cards`) y sus acreditaciones en **Tesorería → Liquidaciones de tarjeta** (`/erp/treasury/card-settlements`).

## Permisos necesarios

:::note[Permisos necesarios]
- Tarjetas corporativas: Ver tarjetas corporativas y sus consumos · Crear tarjetas corporativas · Editar tarjetas corporativas · Utilizar tarjetas corporativas en pagos · Anular consumos · Pagar cuotas y resúmenes.
- Canales y cobros: Ver/Registrar/Confirmar/Anular cobros con tarjeta.
- Liquidaciones: Ver liquidaciones · Registrar acreditaciones · Conciliar · Revertir.
- Configuración: Ver y administrar tarjetas, adquirentes y canales de cobro.
:::

## Campos de una configuración

- **Nombre** (tarjeta o canal).
- **Marca**: VISA, MASTERCARD, AMEX, NARANJA, CABAL u otra.
- **Banco emisor** (corporativas) o **Adquirente/procesador** (canales).
- **Moneda**.
- **Titular** y **últimos 4 dígitos** (solo corporativas).
- **Límite**.
- **Comisión (%)** y **días de acreditación**.
- **Día de cierre** y **día de vencimiento**.
- **Activa**.

## Cómo configurar

1. Ir a **Tarjetas** y elegir la pestaña **Corporativas** o **Canales de cobro**.
2. Presionar **Nueva configuración**.
3. Completar los datos según el tipo y guardar.

> En **Canales de cobro** no se guardan números completos ni códigos de seguridad de tarjetas de clientes.

## Tarjetas corporativas

En la pestaña **Corporativas** se ven las **próximas cuotas**. El banco se descuenta recién cuando se **registra el pago** de la cuota o del resumen.

## Liquidaciones de tarjeta

Cuando se cobra una venta con tarjeta, el dinero queda **pendiente de acreditación** hasta que el adquirente lo deposita. Desde **Liquidaciones de tarjeta**:

1. Se listan los cobros **Pendientes**, **Vencidos** o **Acreditados**.
2. Se presiona **Acreditar**, indicando:
   - **Cuenta bancaria** de destino.
   - **Fecha real**.
   - **Comisión**, **IVA/impuestos sobre comisión**, **retenciones** y **otros descuentos**.
   - **Neto acreditado** y **referencia bancaria**.
3. Se confirma la acreditación, que **afecta el banco**.

El **bruto** menos los descuentos da el **neto**; si hay diferencia, se registra un **motivo**.

## Reglas y validaciones

- El **nombre**, **marca**, **banco/adquirente** y **moneda** son obligatorios.
- La acreditación requiere una **cuenta bancaria**.
- La liquidación afecta el **saldo bancario** al confirmarse.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| El cobro queda pendiente | El adquirente aún no acreditó. | Registrá la acreditación cuando corresponda. |
| No puedo acreditar | Falta la cuenta bancaria. | Elegí una cuenta. |
| El neto no coincide | Comisión/retenciones distintas. | Ajustá los descuentos o cargá el motivo de diferencia. |

## Ver también

- [Bancos](/procesos/tesoreria/bancos/).
- [Cobros](/procesos/ventas/cobros/).
