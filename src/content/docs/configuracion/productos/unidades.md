---
title: Unidades de medida
description: Crear y administrar las unidades que usan productos, compras, depósitos y fórmulas BOM.
sidebar:
  order: 2
---

## Para qué sirve

Las **unidades de medida** se usan en todo el sistema: definen cómo se cuantifican los productos, los movimientos de stock, las compras y las fórmulas de BOM. La pantalla está en **Configuración → Productos → Unidades** (`/productos/settings/unidades`).

## Permisos necesarios

:::note[Permisos necesarios]
Estos son los permisos que otorgan acceso a esta pantalla (tal como figuran en **Roles y permisos**):

- Ver unidades de medida
- Crear unidades de medida
- Editar unidades de medida
- Eliminar unidades de medida
:::

## Unidades por defecto

Cada empresa nueva se crea con un catálogo base de unidades, entre ellas: Unidad, Pieza, Barra, Rollo, Caja, Metro, Centímetro, Milímetro, Kilómetro, Kilogramo, Gramo, Tonelada, Litro, Mililitro, Metro cúbico, Metro cuadrado y Centímetro cuadrado.

## Cómo crear una unidad

1. Ir a **Unidades** y presionar **Nueva Unidad**.
2. Completar:
   - **Nombre**: ej. "Metro".
   - **Símbolo**: ej. "m".
   - **Tipo de unidad**: Peso, Longitud, Volumen, Unidad, Área o Tiempo.
3. Guardar.

## Cómo editar o desactivar

- **Editar**: presionar el ícono de edición en la fila de la unidad.
- **Activar/desactivar**: usar el interruptor de la fila. Las unidades inactivas **no aparecen** en los selectores de productos u otros módulos.

## Reglas y validaciones

- El **nombre** y el **símbolo** son obligatorios.
- No puede existir otra unidad con el mismo **nombre** o **símbolo**.
- Al crear una unidad desde la pantalla, se marca como **activa** por defecto.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "Ya existe una unidad con ese nombre o símbolo" | Duplicado de nombre o símbolo. | Usá otro nombre o símbolo. |
| No puedo guardar | Falta el nombre o el símbolo. | Completá ambos campos. |
| La unidad no aparece al cargar un producto | Está inactiva. | Activala desde esta pantalla. |

## Ver también

- [Productos](/configuracion/productos/) — módulo de catálogo.
- [Crear un producto](/configuracion/productos/crear-producto/) — usa el tipo de cálculo y la unidad.
