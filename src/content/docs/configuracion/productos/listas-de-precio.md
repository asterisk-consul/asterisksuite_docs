---
title: Listas de precio
description: Agrupar productos con una moneda y un tipo (venta o compra).
sidebar:
  order: 9
---

## Para qué sirve

Las **listas de precio** agrupan productos bajo una **moneda** y un **tipo** (venta o compra). Sirven para organizar y aplicar precios de forma masiva. Se administran en **Productos → Listas de Precio** (`/productos/price-lists`).

## Permisos necesarios

`price_lists.read` para ver; `price_lists.create`, `price_lists.update` y `price_lists.delete` para gestionarlas.

## Cómo crear una lista

1. Ir a **Listas de Precio** y presionar **Nueva Lista**.
2. Completar:
   - **Nombre** (obligatorio), ej. "Lista Minorista".
   - **Tipo** (obligatorio): Venta o Compra.
   - **Moneda** (obligatorio).
   - **Descripción** (opcional).
3. Guardar.

## Listado y filtros

- Se puede **filtrar por tipo** (Venta / Compra).
- Cada fila muestra: nombre, tipo, moneda, cantidad de productos y estado (**Activa**/**Inactiva**).

## Cómo editar o eliminar

- **Editar**: presionar el ícono de edición en la fila.
- **Eliminar**: presionar el ícono de papelera y confirmar.

## Reglas y validaciones

- **Nombre**, **Tipo** y **Moneda** son obligatorios.
- Una lista se asocia a una única moneda.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo guardar | Falta nombre, tipo o moneda. | Completá los campos obligatorios. |
| No veo la lista en una operación | Está inactiva o es de otro tipo/moneda. | Verificá su estado y tipo. |

## Ver también

- [Precios de producto](/configuracion/productos/precios/).
- [Precios por cliente y proveedor](/configuracion/productos/precios-por-contraparte/).
