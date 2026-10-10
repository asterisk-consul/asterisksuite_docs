---
title: Flota
description: Choferes, vehículos y combinaciones.
sidebar:
  order: 5
---

## Para qué sirve

La **flota** reúne los **choferes**, los **vehículos** y las **combinaciones** (tractor + acoplado) que se usan en los viajes. Se administra en **Logística → Viajes** (`/logistica/viajes`).

## Permisos necesarios

:::note[Permisos necesarios]
- Choferes: Ver/Crear/Editar/Eliminar choferes
- Vehículos: Ver/Crear/Editar/Eliminar vehículos
- Combinaciones: Ver/Crear/Editar/Eliminar combinaciones de vehículo
:::

## Choferes

- **Nombre** y **apellido**.
- **Documento** y **teléfono**.
- **Activo**.
- **Documentos** (licencias, etc.).

## Vehículos

- **Tipo** y **patente**.
- **Marca**, **modelo** y **año**.
- **Peso máximo** y **volumen máximo**.
- **Refrigeración**.
- **Documentos**.

## Combinaciones

Agrupan un **vehículo tractor** y su **acoplado** para operar como una unidad en los viajes.

## Reglas y consideraciones

- Un vehículo/chofer **inactivo** no se ofrece al planificar viajes.
- Los **documentos** (licencias, seguros, VTV) se controlan con vencimiento.
- Un vehículo en **mantenimiento** queda indisponible.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No aparece el vehículo/chofer | Está inactivo. | Activalo. |
| No puedo planificar | El activo está en mantenimiento. | Verificá su estado. |

## Ver también

- [Viajes](/procesos/logistica/viajes/).
- [Mantenimiento](/procesos/logistica/mantenimiento/).
