---
title: Variantes de producto
description: Definir medidas y presentaciones de un producto con SKU y datos técnicos propios.
sidebar:
  order: 6
---

## Para qué sirve

Las **variantes** representan distintas medidas o presentaciones de un mismo producto (por ejemplo, distintos espesores o formatos). Cada variante puede tener su propio **SKU**, datos técnicos y precios, y es la referencia que se usa en stock, compras y ventas.

Se administran **dentro del producto**, en la pestaña **Variables**.

## Permisos necesarios

`product_variants.read` para ver; `product_variants.create`, `product_variants.update` y `product_variants.delete` para gestionarlas.

## Dónde se administran

1. Ir a **Productos** y abrir la creación (`/productos/create`) o la edición de un producto existente.
2. Entrar a la pestaña **Variables**.

## Cómo crear una variante

1. En la pestaña **Variables**, presionar **Nueva variante**.
2. Completar:
   - **Nombre**.
   - **SKU** (opcional; si se ingresa, debe ser único).
   - **Espesor (mm)**.
   - **Densidad (kg/m³)**.
   - **Peso (kg)**.
   - **Peso por m² (kg)**.
   - **Peso por metro (kg)**.
   - **Activo**.
3. Guardar.

## Cálculos automáticos

El sistema relaciona **espesor**, **densidad** y **peso por m²**:

- Si cargás el peso por m² y el espesor, calcula la densidad.
- Si cargás la densidad y el espesor, calcula el peso por m².

Es decir, alcanza con dos de los tres valores para que se complete el restante.

## Cómo editar o eliminar

- **Editar**: abrir la variante desde la tabla y modificar sus datos.
- **Eliminar**: la variante se da de baja de forma **lógica** (se marca como inactiva y eliminada), no se borra físicamente.

## Reglas y validaciones

- La variante debe pertenecer a un **producto existente**.
- El **SKU**, si se ingresa, debe ser **único** entre todas las variantes.
- Los valores numéricos (espesor, densidades y pesos) no pueden ser negativos.

## Notas

- Los **precios por variante** se configuran en la pestaña **Precios** del producto.
- Al operar en compras, ventas o stock podés seleccionar la variante específica del producto.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "Ya existe una variante con ese SKU" | El SKU está en uso. | Usá otro SKU o dejalo vacío. |
| "Producto no encontrado" | La variante quedó asociada a un producto inexistente. | Recreá la variante desde el producto correcto. |
| El peso por m² no se completa | Faltan el espesor o la densidad. | Cargá al menos dos de los tres valores. |

## Ver también

- [Productos](/configuracion/productos/).
- [Crear un producto](/configuracion/productos/crear-producto/).
