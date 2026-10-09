---
title: Cuentas contables
description: Plan de cuentas de la empresa y su importación.
sidebar:
  order: 7
---

## Para qué sirve

El **plan de cuentas** define las cuentas contables de la empresa. Se usa para la **contabilización automática** de documentos, productos y operaciones de tesorería. Se administra en **ERP → Contabilidad → Plan de Cuentas** (`/erp/contabilidad/accounts`).

## Tipos de cuenta

| Tipo | Descripción |
|---|---|
| **Activo** | Bienes y derechos. |
| **Pasivo** | Deudas y obligaciones. |
| **Patrimonio** | Capital y resultados acumulados. |
| **Ingresos** | Ventas y otros ingresos. |
| **Gastos** | Costos y gastos. |

## Campos

- **Código** (ej. `1.1.1`).
- **Nombre** (ej. "Caja General").
- **Tipo** (uno de los anteriores).
- **Cuenta padre** (para armar la jerarquía).
- **Activo**.

## Estructura jerárquica

Las cuentas se muestran en un **árbol**. Desde cada cuenta se puede agregar una **subcuenta** (con el botón **+**), editar o eliminar. El buscador filtra por código o nombre.

## Cómo crear una cuenta

1. Ir a **Plan de Cuentas** y presionar **Nueva cuenta** (o el **+** de una cuenta existente para una subcuenta).
2. Completar **Código**, **Nombre**, **Tipo** y, opcionalmente, **Cuenta padre**.
3. Guardar.

## Importar y exportar

- **Importar**: desde Excel, con las columnas **Código**, **Nombre**, **Tipo** y **Cuenta padre** (opcional).
- **Exportar**: a Excel (.xlsx) o CSV.

Estas acciones requieren los permisos de importación/exportación.

## Permisos necesarios

:::note[Permisos necesarios]
- Ver cuentas contables · Crear cuentas contables · Editar cuentas contables · Eliminar cuentas contables
- Importar plan de cuentas · Exportar plan de cuentas
:::

## Reglas y validaciones

- El **código** y el **nombre** son obligatorios.
- La **cuenta padre** debe existir (o dejarla vacía para una cuenta raíz).
- El código no se puede editar una vez creada la cuenta.
- Una cuenta con movimientos o subcuentas no debería eliminarse.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo cambiar el código | El código es inmutable al editar. | Creá la cuenta con el código correcto. |
| La importación falla | Faltan columnas Código/Nombre/Tipo. | Usá la plantilla con esas columnas. |
| No puedo eliminar la cuenta | Tiene subcuentas o está en uso. | Revisá la jerarquía y las referencias. |

## Ver también

- [Crear un producto](/configuracion/productos/crear-producto/): asocia cuentas de ingreso, gasto e inventario.
- [Contrapartes](/configuracion/contrapartes/).
