---
title: Fabricación
description: Registrar una fabricación, descontar materiales e ingresar el producto terminado.
sidebar:
  order: 3
---

## Para qué sirve

Registra una **fabricación**: a partir de la **lista de materiales (BOM)** de un producto compuesto, **descuenta los insumos** y **ingresa el producto terminado** al depósito. Se ejecuta en **Fabricación → Fabricar** (`/fabricacion/fabricar`) y su historial está en **Fabricación → Historial** (`/fabricacion/historial`).

## Permisos necesarios

:::note[Permisos necesarios]
- Acceder a fabricación y consultar materiales
- Registrar fabricaciones y movimientos de materiales
- Ver el historial de fabricación
- Configurar BOM e ingeniería de productos · Ver costos de fabricación
:::

## Configuración previa

- El producto debe ser **compuesto** (tener **BOM** o ingeniería).
- Deben existir los **depósitos** de materiales y de producto terminado.

## Cómo fabricar

1. Ir a **Fabricación → Fabricar**.
2. Elegir el **producto a fabricar** (solo productos terminados e intermedios).
3. Si tiene **variantes**, elegir la variante (usa su estructura de fabricación).
4. Indicar la **cantidad** a fabricar.
5. Elegir el **depósito de materiales** (de dónde se descuentan las materias primas) y el **depósito de producto terminado** (dónde ingresa lo fabricado).
6. Presionar **Ver materiales necesarios** para la previsualización.
7. Confirmar para **registrar la fabricación**: se descuentan los insumos y se suma el producto terminado.

## Historial

En **Historial de fabricación** se listan las fabricaciones registradas, con producto, cantidad y referencias.

## Reglas y validaciones

- Solo se fabrican productos con **estructura (BOM/ingeniería)**.
- Se requiere **depósito de materiales** y **depósito de destino**.
- La fabricación **descuenta insumos** según el BOM y la cantidad.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No aparece el producto | No es compuesto o no tiene BOM. | Configurá su BOM en el producto. |
| Falta stock de insumos | Materiales insuficientes en el depósito. | Reponé insumos o elegí otro depósito. |
| No puedo confirmar | Falta depósito o cantidad. | Completá los campos requeridos. |

## Ver también

- [Componentes y BOM](/configuracion/productos/componentes-bom/).
- [Disponibilidad de stock](/procesos/stock/disponibilidad/).
