---
title: Gestionar roles y permisos
description: Crear roles de negocio, editar sus datos y asignarles permisos granulares.
sidebar:
  order: 3
---

## Para qué sirve

La pantalla **Roles y permisos** (`/settings/roles`) permite crear roles de negocio propios, editarlos y configurar exactamente qué permisos otorga cada uno. Luego esos roles se asignan a los usuarios desde la pantalla **Usuarios**.

## Permisos necesarios

:::note[Permisos necesarios]
Solo los usuarios con membresía **OWNER** o **ADMIN** de la empresa pueden gestionar roles y permisos.
:::

## Cómo crear un rol

1. Ir a **Roles y permisos** y presionar **Nuevo rol**.
2. Completar:
   - **Nombre**: visible para los usuarios (ej. "Vendedor").
   - **Código**: identificador único interno (ej. `vendedor`).
   - **Descripción** (opcional).
3. Guardar.

El nombre y el código no pueden coincidir con otro rol existente.

## Cómo editar un rol

1. Presionar el ícono de lápiz en la fila del rol.
2. Modificar **Nombre** y/o **Descripción**.
3. Guardar.

En los roles de sistema el **código no se puede editar**.

## Cómo asignar permisos a un rol

1. Presionar el ícono de llave (Permisos) en la fila del rol.
2. Se abre la lista de permisos **agrupada por módulo** (Acceso, Documentos, Maestros, Ingeniería y Costos, Logística, Capturas, Tesorería, RRHH, Sistema).
3. Marcar/desmarcar permisos:
   - El checkbox de cada módulo selecciona/desmarca todos sus permisos.
   - Botones **Todos** y **Ninguno** para el conjunto completo.
   - El buscador filtra por nombre o código (ej. "pagos", "vehiculos").
4. Presionar **Guardar cambios** (o **Guardar** arriba).

La barra inferior indica si hay cambios sin guardar y cuántos permisos están seleccionados.

### Permisos generales de documentos

Los permisos del módulo **Documentos** tienen dos niveles:

- **Permisos generales** (por ejemplo, "Ver ventas" o "Confirmar compras"): habilitan la acción para **todos los tipos** de documento.
- **Permisos por tipo** (por ejemplo, "Confirmar facturas de ventas" o "Crear órdenes de compra"): habilitan la acción solo para ese tipo.

Si un rol tiene permisos generales, el sistema muestra un **aviso** y ofrece el botón **"Usar configuración por tipo de documento"**, que los quita para que el permiso dependa únicamente de los tipos seleccionados. Conviene preferir el permiso por tipo para un control más fino.

### Permisos especiales de ventas y comisiones

Dos familias de permisos merecen atención al armar los roles:

- **`sales.orders.view_amounts`** — *"Ver precios, totales y comisiones de órdenes de venta restringidas"*. Aparece en **Documentos → Ventas · Órdenes de venta**. Quienes no lo tengan ven las OV de los estados marcados como restringidos en el tipo de documento, pero **sin importes** (ver [Importes restringidos](/procesos/ventas/crear-orden-de-venta/#importes-restringidos)). Los roles **`admin`** y **`manager`** lo incluyen por defecto; OWNER y administradores de la empresa siempre ven los importes, aunque el rol no lo tenga.
- **`commissions.view` / `commissions.manage` / `commissions.settle`** — *"Ver documentos, vendedores e importes de comisiones"*, *"Asignar vendedores, participación y reglas de comisión"* y *"Generar vales para liquidar comisiones"*. Controlan la bandeja de [comisiones](/procesos/rrhh/vales-y-comisiones/#comisiones) de RRHH. Los roles `admin` y `manager` los incluyen por defecto.

## Cómo eliminar un rol

1. Presionar el ícono de papelera (solo aparece en roles **no** de sistema).
2. Confirmar.

Los roles de sistema (`admin`, `manager`, `user`, `viewer`, `capturist`) **no se pueden eliminar**. La eliminación es lógica (el rol se marca como eliminado).

## Cómo asignar roles a un usuario

La asignación se hace desde **Usuarios → Asignar roles**. Ver [Gestionar usuarios](/administracion/usuarios-roles-permisos/gestionar-usuarios/#cómo-asignar-roles-de-negocio).

## Reglas y validaciones

- El **nombre** y el **código** de un rol deben ser únicos.
- Los roles de sistema no se pueden eliminar y su código no se puede editar.
- Al guardar permisos, la selección **reemplaza** por completo los permisos anteriores del rol.
- Los permisos no se pueden editar desde roles de sistema sin afectar a todos los usuarios que los tengan.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "Ya existe un rol con ese nombre o código" | Nombre o código duplicado. | Elegí otro nombre/código. |
| No puedo eliminar un rol | Es un rol de sistema. | Los roles de sistema no se eliminan; editá sus permisos. |
| Hay cambios sin guardar | Se modificaron permisos y no se guardó. | Presionar **Guardar cambios** antes de salir. |
| Un usuario puede acceder a algo que no debería | Permiso general de documentos activo. | Quitá los permisos generales y usá permisos por tipo. |

## Ver también

- [Roles y permisos](/administracion/usuarios-roles-permisos/) — modelo de acceso y roles de sistema.
- [Gestionar usuarios](/administracion/usuarios-roles-permisos/gestionar-usuarios/).
