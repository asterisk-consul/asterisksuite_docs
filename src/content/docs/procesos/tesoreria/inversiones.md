---
title: Inversiones
description: Plazos fijos y fondos, con su constitución, valuación y rescate.
sidebar:
  order: 6
---

## Para qué sirve

El módulo de **Inversiones** controla colocaciones financieras: **plazos fijos**, **fondos/FIMA** y otras. Registra su constitución, rendimiento, valuación y rescate. Se administra en **Tesorería → Inversiones** (`/erp/treasury/investments`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver inversiones financieras
- Constituir inversiones financieras
- Actualizar valuaciones de inversiones
- Rescatar, liquidar o renovar inversiones
:::

## Tipos

- **Plazo fijo** (`FIXED_TERM`).
- **Fondo / FIMA** (`INVESTMENT_FUND`).
- **Otra inversión** (`OTHER`).

## Campos

- **Tipo**, **Nombre** e **Institución**.
- **Moneda**.
- **Cuenta de origen** (de dónde sale el capital) y **cuenta de acreditación**.
- **Capital** y **fecha de constitución**.
- Para **plazo fijo**: **fecha de vencimiento**, **TNA** y **base de cálculo** (365 o 360).
- **Disponibilidad**: no precancelable o **precancellable** (con fecha desde y TNA de precancelación).
- **Renovación automática** (informativa).
- Para **fondos**: **valor de cuotaparte inicial** y **unidades**.
- **Referencia** y **notas**.

## Cómo constituir una inversión

1. Ir a **Inversiones** y presionar **Nueva inversión**.
2. Elegir el **tipo** y completar nombre, institución, moneda y cuenta de origen.
3. Indicar **capital**, **fecha de constitución** y, en plazos fijos, **vencimiento**, **TNA** y **base de cálculo**.
4. Si es precancelable, completar fecha y TNA de precancelación.
5. Guardar. La confirmación **debita el capital** de la cuenta bancaria.

El sistema calcula el **interés estimado** y el **valor al vencimiento** a partir de la TNA y la base.

## Estados

| Estado | Descripción |
|---|---|
| **Activa** | Constituida y en curso. |
| **Vencida por liquidar** | Llegó el vencimiento, pendiente de acreditación. |
| **Rescatada** | Rescatada/liquidada. |
| **Renovada** | Renovada. |
| **Cancelada** | Cancelada. |

## Acciones

- **Actualizar valuación** (fondos).
- **Rescatar / liquidar / renovar** según corresponda.
- El **rescate anticipado** de una inversión precancelable usa la **TNA de precancelación** para el interés acumulado hasta la fecha.

## Reglas y validaciones

- El **nombre**, **cuenta de origen** y **capital** son obligatorios.
- La **fecha de vencimiento** debe ser posterior a la de constitución.
- La constitución **debita** el capital de la cuenta de origen.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo constituir | Falta cuenta de origen o capital. | Completá esos campos. |
| El rendimiento no coincide | Tasa o base distintas a las del banco. | Ajustá la TNA/base y actualizá. |
| El rescate da un importe distinto | Se usó la tasa de precancelación. | Es lo esperado; corregí con lo informado por el banco. |

## Ver también

- [Bancos](/procesos/tesoreria/bancos/).
- [Monedas y cotizaciones](/configuracion/monedas/).
