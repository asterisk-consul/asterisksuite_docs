---
title: Empleados
description: Alta y administración de empleados, con sus datos laborales y comisiones.
sidebar:
  order: 1
---

## Para qué sirve

Los **empleados** son el personal de la empresa. Se administran en **RRHH → Empleados** (`/erp/rrhh/employees`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver empleados · Crear empleados · Editar empleados · Eliminar empleados
:::

## Campos

- **Nombre** y **apellido**.
- **Tipo** y **número de documento**.
- **Puesto** y **sector**.
- **Fecha de ingreso**.
- **Sueldo** y **moneda**.
- **Activo**.
- **Es vendedor** y **comisión (%)** con su **base de comisión**.
- Datos de **contraparte** (razón social, email, CUIT, condición IVA, direcciones, contactos, cuentas bancarias).

## Cómo crear un empleado

1. Ir a **Empleados** y presionar **Nuevo**.
2. Completar nombre, apellido, documento, puesto, sector, fecha de ingreso, sueldo y moneda.
3. Si es vendedor, marcar **Es vendedor** y definir **comisión** y **base**.
4. Opcionalmente, crear/loguear el **usuario** vinculado.
5. Guardar.

Al crear un empleado, el sistema crea su **contraparte** (tipo Empleado) y puede vincular un **usuario** de acceso.

## Cliente interno (rol doble)

Un **empleado puede ser también cliente interno**. Desde su ficha se activa **"Habilitar como cliente interno"**; a partir de ahí, la misma contraparte aparece en las listas de **clientes** (para venderle, facturar y llevar su cuenta corriente). Ver [Crear y editar una contraparte](/configuracion/contrapartes/crear-contraparte/#roles-y-rol-doble).

## Reglas y consideraciones

- Nombre y apellido son obligatorios.
- Un empleado puede vincularse a un **usuario** (ver [Gestionar usuarios](/administracion/usuarios-roles-permisos/gestionar-usuarios/)).
- Las **comisiones** se usan en las órdenes de venta y en los reportes.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo guardar | Faltan nombre/apellido. | Completalos. |
| No aparece para asignar como vendedor | No tiene "Es vendedor" o está inactivo. | Editalo y activá la opción. |

## Ver también

- [Vales y comisiones](/procesos/rrhh/vales-y-comisiones/).
- [Contrapartes](/configuracion/contrapartes/).
