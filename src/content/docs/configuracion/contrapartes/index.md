---
title: Contrapartes
description: Personas y entidades del sistema, como clientes, proveedores, socios y empleados.
sidebar:
  order: 2
---

## Para qué sirve

Las **contrapartes** (o "terceros") son todas las personas y entidades con las que se opera: clientes, proveedores, socios, empleados, entes impositivos, servicios públicos, entidades financieras y proveedores de servicios. Se administran de forma unificada en **Terceros** (`/erp/stakeholders`).

## Tipos de contraparte

| Tipo | Descripción |
|---|---|
| **Cliente** | A quien se le vende. |
| **Proveedor** | A quien se le compra. |
| **Empleado** | Personal de la empresa (habilita datos laborales). |
| **Socio** | Participante de la empresa (habilita datos de participación). |
| **Ente Impositivo** | Organismos fiscales (ARCA, IIBB, etc.). |
| **Servicio Público** | Prestadoras de servicios (energía, gas, etc.). |
| **Entidad Financiera** | Bancos y tarjetas. |
| **Proveedor de Servicios** | Otros prestadores. |

## Tipo principal y roles adicionales

Una contraparte tiene un **tipo principal**, pero **puede cumplir varios roles a la vez**. Los roles se guardan aparte del tipo y se pueden activar/desactivar.

El caso típico es el **rol doble**: un **Empleado** puede habilitarse además como **Cliente interno**. En la ficha del empleado hay un interruptor **"Habilitar como cliente interno"**; al activarlo, la misma contraparte aparece también en las listas de **clientes** (para ventas internas, cuenta corriente, precios por cliente, etc.).

Consecuencias de tener varios roles:

- La contraparte **aparece en las listas de cada rol** que tenga activo (clientes, proveedores, empleados, socios…).
- Los módulos que filtran por tipo (ventas, compras, tesorería, RRHH) la muestran según el rol correspondiente.
- Se mantiene **una sola ficha** (un solo CUIT/identificación) compartiendo direcciones, contactos y cuentas.

## Datos generales

Cada contraparte tiene:

- **Tipo** (uno de los anteriores).
- **Nombre** (para personas: nombre y apellido).
- **Razón social** (opcional).
- **Email**.
- **Tipo de documento** y **número** (CUIT, DNI, CUIL, LE, LC, Pasaporte).
- **Condición frente al IVA**.
- **Exención (%)** (opcional).
- **Activo**.

En las pestañas se cargan además: **Impuestos**, **Direcciones**, **Contactos** y **Cuentas Bancarias**. Para **Empleado** aparece **Datos Laborales** y para **Socio**, **Participación**.

## Permisos necesarios

:::note[Permisos necesarios]
- Ver terceros · Crear terceros · Editar terceros · Eliminar terceros
- Ver contactos · Crear contactos · Editar contactos · Eliminar contactos
- Ver ubicaciones · Crear ubicaciones · Editar ubicaciones
:::

## Páginas de esta sección

- [Crear y editar una contraparte](/configuracion/contrapartes/crear-contraparte/)

## Ver también

- [Productos](/configuracion/productos/): precios por cliente y proveedor.
