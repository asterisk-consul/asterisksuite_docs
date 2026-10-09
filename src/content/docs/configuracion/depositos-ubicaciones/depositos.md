---
title: Depósitos
description: Crear y administrar los depósitos (almacenes) donde se controla el stock.
sidebar:
  order: 2
---

## Para qué sirve

Los **depósitos** (almacenes) son los lugares físicos donde se guarda y controla el stock. Todas las operaciones de inventario (ingresos, egresos, transferencias, picking y reposición) se registran contra un depósito.

Se administran en **Productos → Depósitos** (`/productos/warehouses`) y se consultan en **Logística → Almacenes** (`/logistica/warehouse`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver almacenes
- Crear almacenes
- Editar almacenes
- Eliminar almacenes
:::

## Campos

- **Nombre** (obligatorio).
- **Código** (opcional).
- **Ubicación**: dirección asociada (desde Locaciones).
- **Unidad**: unidad de medida por defecto del depósito.
- **Activo**.

## Cómo crear un depósito

1. Ir a **Depósitos** y presionar **Nuevo Depósito**.
2. Completar **Nombre** y, opcionalmente, **Código**, **Ubicación** y **Unidad**.
3. Guardar (queda activo por defecto).

## Cómo editar, activar o eliminar

- **Editar**: presionar el ícono de edición. Nombre, código y ubicación se pueden editar en línea.
- **Activar/desactivar**: usar el interruptor de la fila. Los depósitos inactivos no se ofrecen en las operaciones.
- **Eliminar**: acción de borrado individual o masivo.

## Reglas

- El **nombre** es obligatorio.
- Para asignar **ubicación** o **unidad**, deben existir previamente.
- Solo los depósitos **activos** aparecen en los selectores de stock, compras y ventas.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo seleccionar ubicación/unidad | No hay ubicaciones o unidades cargadas. | Cargalas en Locaciones o Unidades. |
| El depósito no aparece al operar | Está inactivo. | Activalo desde el listado. |
| No se puede eliminar | Tiene stock o movimientos asociados. | Desactivalo en lugar de eliminarlo. |

## Ver también

- [Ubicaciones](/configuracion/depositos-ubicaciones/ubicaciones/).
- [Unidades de medida](/configuracion/productos/unidades/).
- Stock y picking (próximamente).
