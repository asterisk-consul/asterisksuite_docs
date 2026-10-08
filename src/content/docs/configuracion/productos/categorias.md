---
title: Categorías
description: Organizar el catálogo con categorías y subcategorías jerárquicas.
sidebar:
  order: 3
---

## Para qué sirve

Las **categorías** permiten organizar el catálogo de productos en una estructura **jerárquica** (categorías y subcategorías). La pantalla está en **Configuración → Productos → Categorías** (`/productos/settings/categorias`).

## Permisos necesarios

:::note[Permisos necesarios]
Estos son los permisos que aparecen en **Roles y permisos** para esta pantalla:

- Ver categorías
- Crear categorías
- Editar categorías
- Eliminar categorías
:::

## Cómo crear una categoría

1. Ir a **Categorías** y presionar **Nueva categoría** para una categoría raíz.
2. Ingresar el **Nombre** y guardar.

Para crear una **subcategoría**, usar el botón **+** sobre la categoría padre en el árbol. El modal indica "Nueva subcategoría" y muestra "Se creará como subcategoría".

## Cómo editar o mover

- **Editar**: presionar el ícono de edición de la categoría para cambiar su nombre.
- **Mover / reordenar**: arrastrar y soltar la categoría dentro del árbol para cambiar su **categoría padre** o su posición entre hermanas. El cambio se guarda automáticamente.

## Reglas y validaciones

- El **nombre** es obligatorio.
- La categoría padre debe existir.
- Una categoría **no puede ser su propia categoría padre**.
- Cada categoría se identifica internamente por un **slug** que debe ser único.

## Notas

- Las categorías se asignan al producto **después** de crearlo (desde la pantalla del producto).
- Un producto puede pertenecer a una categoría; usá la jerarquía para agrupar de forma general y específica.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No se puede mover una categoría dentro de sí misma | Se intentó mover a un descendiente propio. | Elegí otra categoría padre. |
| "Slug already exists" | Ya existe una categoría con el mismo identificador. | Cambiá el nombre. |
| El botón crear está deshabilitado | El nombre está vacío. | Ingresá un nombre. |

## Ver también

- [Productos](/configuracion/productos/).
- [Crear un producto](/configuracion/productos/crear-producto/) — asignación de categoría.
