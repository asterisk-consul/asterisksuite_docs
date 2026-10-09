---
title: Plantillas de costo
description: Definir plantillas de costos de fabricación con componentes reutilizables.
sidebar:
  order: 11
---

## Para qué sirve

Las **plantillas de costo** definen cómo se calcula el costo de fabricación de un producto. Agrupan **componentes de costo** (material, mano de obra, costos indirectos, otros) y se asignan a los productos para estimar su costo final.

Se administran en **Fabricación → Templates de Costos** (`/cost-templates`).

## Permisos necesarios

:::note[Permisos necesarios]
Estos son los permisos que aparecen en **Roles y permisos** para esta pantalla:

- Ver plantillas de costo
- Crear plantillas de costo
- Editar plantillas de costo
- Eliminar plantillas de costo
- Ver componentes de costo
- Crear componentes de costo
- Editar componentes de costo
- Eliminar componentes de costo
:::

## Componentes de costo

Un **componente** es un sumando del costo. Se define con:

- **Nombre**.
- **Tipo**:
  - **Material**
  - **Mano de obra**
  - **Costos indirectos**
  - **Otros**
- **Cálculo** (cómo obtiene su valor):
  - **Desde BOM** — toma el costo de los materiales de la estructura.
  - **% sobre material** — un porcentaje del costo de material (ej. `0.15` = 15%).
  - **% sobre total** — un porcentaje del total acumulado.
  - **Monto fijo por unidad**.
- **Valor**: solo cuando el cálculo **no** es "Desde BOM".

La pantalla tiene dos pestañas: **Templates** y **Componentes**.

## Cómo crear un componente

1. Ir a **Templates de Costos → Componentes** y presionar **Nuevo componente**.
2. Completar **Nombre**, **Tipo** y **Cálculo**; si corresponde, el **Valor**.
3. Guardar.

## Cómo crear una plantilla

1. Ir a **Templates de Costos → Templates** y presionar **Nuevo template**.
2. **Paso 1 – Información**: **Nombre**, **Descripción** (opcional) y marcar **Usar como template predeterminado** si corresponde.
3. **Paso 2 – Componentes**:
   - Agregar componentes existentes desde el selector.
   - Opcionalmente definir un **valor de override** por componente dentro del template.
   - Crear un **componente nuevo** sin salir de la pantalla.
4. Presionar **Crear template**.

Para crear la plantilla se requiere un **nombre** y **al menos un componente**.

## Cómo editar

Desde la lista de templates, presionar el ícono de edición (`/cost-templates/[id]/edit`) para modificar la información y los componentes.

## Cómo asignar una plantilla a un producto

La plantilla se asigna desde el **producto** (en su configuración de costos / ingeniería) mediante el selector de plantillas. Al calcular, el producto usa su plantilla para desglosar el costo.

## Reglas y validaciones

- El **nombre** del template y del componente son obligatorios.
- Un template debe tener **al menos un componente**.
- Puede existir un template **predeterminado** que se propone por defecto.
- Los porcentajes se ingresan en formato decimal (`0.15` = 15%).

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo crear el template | Falta el nombre o no tiene componentes. | Completá el nombre y agregá al menos un componente. |
| El componente no pide valor | El cálculo es "Desde BOM". | Es correcto: el valor proviene de la estructura. |
| El producto no toma la plantilla | No tiene plantilla asignada. | Asignala desde el producto. |

## Ver también

- [Componentes y BOM](/configuracion/productos/componentes-bom/).
- [Precios de producto](/configuracion/productos/precios/).
