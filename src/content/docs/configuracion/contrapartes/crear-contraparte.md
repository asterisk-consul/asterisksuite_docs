---
title: Crear y editar una contraparte
description: Alta de clientes, proveedores, socios y demás terceros, con sus contactos, direcciones y cuentas.
sidebar:
  order: 1
---

## Para qué sirve

Permite dar de alta y editar cualquier **contraparte** (tercero) del sistema, junto con sus impuestos, direcciones, contactos y cuentas bancarias.

## Permisos necesarios

:::note[Permisos necesarios]
- Ver terceros · Crear terceros · Editar terceros
- Ver contactos · Crear contactos · Editar contactos
- Ver ubicaciones · Crear ubicaciones · Editar ubicaciones
:::

## Cómo crear una contraparte

1. Ir a **Terceros** (`/erp/stakeholders`) y presionar **Nueva**.
2. Elegir el **Tipo** (Cliente, Proveedor, Empleado, Socio, etc.).
3. Completar los **datos generales**: nombre (y apellido si es persona), razón social, email, tipo y número de documento, condición de IVA, exención y estado activo.
4. Completar las pestañas:
   - **Impuestos** — perfil fiscal de la contraparte.
   - **Direcciones** — ubicaciones asociadas.
   - **Contactos** — personas de contacto (nombre, apellido, rol, teléfono, email).
   - **Cuentas Bancarias** — CBU, alias, banco, tipo de cuenta, moneda, titular y cuenta predeterminada.
   - **Datos Laborales** (si es Empleado): puesto, sector, fecha de ingreso, sueldo, si es vendedor y comisión.
   - **Participación** (si es Socio): porcentaje de participación.
5. Guardar.

## Validación del documento

El **número de documento** se valida según el tipo:

- **CUIT**: 11 dígitos.
- **DNI**, **CUIL**, **LE**, **LC**: según su longitud correspondiente.
- **Pasaporte**: formato libre.

Si el documento no respeta el formato, el sistema no permite guardar.

## Cómo editar

1. En el listado de **Terceros**, abrir la contraparte.
2. Presionar **Editar** (`/erp/stakeholders/[id]/edit`) y modificar lo necesario.
3. Guardar.

## Reglas y validaciones

- El **tipo** y el **nombre** son obligatorios.
- Para Empleado y Socio, el nombre se separa en **nombre** y **apellido**.
- El **documento** debe cumplir el formato del tipo seleccionado.
- Al crear un **Empleado**, el sistema crea automáticamente su registro de empleado.
- Al crear un **Socio**, se crea su registro de participación.
- Las **direcciones**, **contactos** y **cuentas** se reemplazan al guardar la edición.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "El CUIT debe tener 11 dígitos" | El número no coincide con el tipo. | Corregí el número o el tipo de documento. |
| No puedo guardar el contacto | El contacto no tiene nombre y apellido. | Completá los datos del contacto. |
| No aparece la pestaña de datos | El tipo elegido no la habilita. | Los datos laborales/participación dependen del tipo. |

## Ver también

- [Contrapartes](/configuracion/contrapartes/).
- [Precios por cliente y proveedor](/configuracion/productos/precios-por-contraparte/).
