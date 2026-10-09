---
title: Reglas y alícuotas
description: Reglas de percepción y retención por impuesto, sujeto y jurisdicción.
sidebar:
  order: 3
---

## Para qué sirve

Las **reglas y alícuotas** definen cómo se calculan las percepciones y retenciones. Se administran en **Ajustes → Reglas y alícuotas** (`/settings/fiscal-rules`).

## Tipos

- **Percepciones** — se aplican en el comprobante.
- **Retenciones** — se aplican en el pago o cobro.

## Datos de una regla

- **Nombre** e **impuesto**: Ganancias, IIBB, SUSS o IVA.
- **Sujeto**: Personas Jurídicas (30/33/34) o Personas Físicas (20/23/24/27).
- **Método de cálculo**:
  - **Alícuota × Base**.
  - **Escala por acumulado** (requiere tramos).
  - **Monto fijo**.
- **Ámbito**: Compras, Ventas o Ambas.
- **Jurisdicción** y **concepto**.
- **Vigencia**: desde y hasta.
- **Tipo**: percepción en comprobante o retención en pago/cobro.

## Estados de una regla

| Estado | Significado |
|---|---|
| **Vigente** | Activa y dentro de su vigencia. |
| **Próxima** | Su vigencia comienza en el futuro. |
| **Finalizada** | Su vigencia terminó. |
| **Desactivada** | Inactiva. |

## Cómo crear una regla

1. Ir a **Reglas y alícuotas** y elegir la pestaña **Percepciones** o **Retenciones**.
2. Presionar **Nueva regla** y completar nombre, impuesto, sujeto, método, ámbito, jurisdicción, concepto y vigencia.
3. Si el método es **Escala por acumulado**, cargar al menos un tramo.
4. Guardar.

## Reglas y validaciones

- **Nombre** e **impuesto** son obligatorios.
- La **escala por acumulado** requiere al menos un tramo.
- La regla vigente se determina por las fechas de **desde/hasta**.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "La escala necesita al menos un tramo" | Método escala sin tramos. | Agregá los tramos correspondientes. |
| "Nombre e impuesto son obligatorios" | Faltan datos. | Completá ambos campos. |
| No se aplica la retención | Regla no vigente o ámbito incorrecto. | Revisá vigencia y ámbito (Compras/Ventas). |

## Ver también

- [Configuración fiscal](/configuracion/impuestos/configuracion-fiscal/).
- [Impuestos](/configuracion/impuestos/impuestos/).
