---
title: Corredores
description: Rutas predefinidas con sus paradas.
sidebar:
  order: 4
---

## Para qué sirve

Un **corredor** es una ruta predefinida entre un origen y un destino, con sus **paradas** intermedias. Se puede reutilizar como plantilla al planificar despachos. Se administra en **Logística → Corredores** (`/logistica/viajes/corridors`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver corredores · Crear corredores · Editar corredores · Eliminar corredores
:::

## Campos

- **Nombre** (opcional).
- **Origen** y **destino** (ubicaciones).
- **Es plantilla** (para reutilizar).
- **Paradas** (stops): ubicaciones intermedias de la ruta.

## Cómo crear un corredor

1. Ir a **Corredores** y presionar **Nuevo**.
2. Elegir **origen** y **destino**.
3. Agregar las **paradas**.
4. Indicar si es **plantilla** y guardar.

## Uso

Los corredores se seleccionan al crear **órdenes de despacho** para definir el recorrido.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo guardar | Faltan origen o destino. | Completalos. |
| La parada no aparece | Ubicación no cargada. | Creala en Locaciones. |

## Ver también

- [Órdenes de despacho](/procesos/logistica/ordenes-de-despacho/).
- [Depósitos y ubicaciones](/configuracion/depositos-ubicaciones/).
