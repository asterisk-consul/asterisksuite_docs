---
title: Gestionar usuarios
description: Crear, editar y vincular usuarios de la empresa, cambiar contraseñas y asignar roles.
sidebar:
  order: 2
---

## Para qué sirve

La pantalla **Usuarios** (`/settings/users`) lista los usuarios que pertenecen a la empresa y permite administrarlos: crear cuentas nuevas, editar sus datos, cambiar contraseñas, vincularlos a un empleado o socio y asignarles roles de negocio.

## Permisos necesarios

:::note[Permisos necesarios]
Solo los usuarios con membresía **OWNER** o **ADMIN** de la empresa pueden gestionar usuarios y asignar roles. El resto ve el listado con las acciones deshabilitadas.
:::

## Configuración previa

- La empresa debe existir (ver [Configuración inicial de la empresa](/primeros-pasos/configuracion-inicial-empresa/)).
- Para asignar roles, los roles deben estar creados (ver [Gestionar roles y permisos](/administracion/usuarios-roles-permisos/gestionar-roles/)).
- Para vincular, opcionalmente tener empleados o socios cargados.

## Cómo crear un usuario

1. Ir a **Usuarios** y presionar **Crear usuario**.
2. Completar **Nombre**, **Email** y **Contraseña** (mínimo 6 caracteres).
3. Elegir el **Rol** de empresa: **Usuario** o **Administrador**.
4. Definir el **vínculo** del usuario:
   - **No vincular** — usuario independiente.
   - **Empleado existente** — elegir un empleado sin usuario asignado.
   - **Socio existente** — elegir un socio sin usuario asignado.
   - **Crear nuevo empleado / Crear nuevo socio** — redirige al formulario correspondiente con los datos precargados.
5. Presionar **Crear**.

El email debe ser único en todo el sistema. Un usuario solo puede quedar vinculado a **un empleado o un socio**, no a ambos.

## Cómo editar un usuario

1. En la fila del usuario, presionar el ícono de lápiz.
2. Modificar **Nombre** y/o **Email**.
3. Guardar. Si cambiás el email, debe seguir siendo único.

## Cómo cambiar la contraseña

1. Presionar el ícono de llave en la fila del usuario.
2. Ingresar la **nueva contraseña** (mínimo 6 caracteres).
3. Confirmar con **Cambiar contraseña**.

## Cómo vincular o desvincular un empleado o socio

- **Vincular**: presionar el ícono de vínculo, elegir **Empleado** o **Socio** y seleccionar el registro sin usuario. Si no hay disponibles, primero creá el empleado/socio.
- **Desvincular**: dentro del mismo modal, usar el botón de desvincular junto al vínculo existente.

El listado muestra una etiqueta con el empleado o socio vinculado, o "Sin empleado o socio vinculado".

## Cómo asignar roles de negocio

1. En la fila del usuario, presionar **Asignar roles**.
2. Marcar los roles deseados (se pueden combinar varios).
3. Guardar.

Los roles de negocio otorgan los permisos granulares. Se suman entre sí y son distintos del **Rol** de empresa elegido al crear el usuario (membresía).

## Reglas y validaciones

- El **email** debe ser único en el sistema.
- La **contraseña** debe tener al menos 6 caracteres.
- No se puede vincular a un empleado **y** a un socio al mismo tiempo.
- Un empleado o socio solo puede tener un usuario vinculado.
- Al asignar roles, la lista reemplaza los roles anteriores del usuario.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "El email ya está registrado" | Otra cuenta usa ese email. | Usá otro email. |
| "La contraseña debe tener al menos 6 caracteres" | Contraseña corta. | Usá una contraseña más larga. |
| "El empleado ya tiene un usuario vinculado" | El empleado/socio ya está asociado. | Desvinculá el registro actual o elegí otro. |
| No aparecen empleados/socios para vincular | Ya tienen usuario o no hay cargados. | Desvinculá el existente o creá el registro nuevo. |
| No veo las acciones | Tu membresía no es OWNER ni ADMIN. | Pedí a un administrador que te asigne el rol. |

## Ver también

- [Roles y permisos](/administracion/usuarios-roles-permisos/) — modelo de acceso.
- [Gestionar roles y permisos](/administracion/usuarios-roles-permisos/gestionar-roles/).
