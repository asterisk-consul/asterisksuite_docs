---
title: Tarifas de transferencia
description: Definir tarifas usadas en el transporte.
sidebar:
  order: 6
---

## Para qué sirve

Las **tarifas de transferencia** definen los tipos de tarifa (por km, fija, por viaje, etc.) que se usan al despachar y facturar el transporte. Se administran en **Logística → Configuraciones → Tarifas** (`/logistica/configuraciones/tarifas`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver tarifas de transferencia · Crear tarifas de transferencia · Editar tarifas de transferencia · Eliminar tarifas de transferencia
:::

## Campos

- **Nombre**.
- **Tipo de tarifa** (`rate_type`).
- **Descripción** (opcional).
- **Activa**.

## Cómo crear una tarifa

1. Ir a **Tarifas** y presionar **Nueva**.
2. Completar nombre y tipo de tarifa.
3. Guardar.

## Uso

Las tarifas se aplican en las **órdenes de despacho** y en los **reportes de choferes**, y pueden reflejarse como producto (tipo tarifa) en el despacho.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No aparece la tarifa | Está inactiva. | Activala. |
| El importe no coincide | El tipo de tarifa es distinto. | Revisá el tipo configurado. |

## Ver también

- [Órdenes de despacho](/procesos/logistica/ordenes-de-despacho/).
- [Productos](/configuracion/productos/) — producto tipo tarifa.
