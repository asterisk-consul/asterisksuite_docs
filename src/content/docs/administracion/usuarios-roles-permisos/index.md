---
title: Usuarios, roles y permisos
description: Modelo de acceso con membresías de empresa, roles de negocio y permisos granulares.
sidebar:
  order: 1
---

Asterisk Suite controla el acceso con **dos capas complementarias**: la membresía a la empresa y los roles de negocio con permisos granulares.

## Las dos capas

### 1. Membresía de empresa

Define si el usuario pertenece a la empresa y su nivel de membresía. Se guarda en `company_users` y toma uno de estos valores:

| Membresía | Alcance |
|---|---|
| **OWNER** | Dueño de la empresa. Tiene acceso total y **omite** la verificación de permisos. |
| **ADMIN** | Administrador de la empresa. Puede gestionar usuarios, roles y configuración. |
| **USER** | Usuario operativo estándar. |
| **VIEWER** | Solo lectura. |

### 2. Roles de negocio (RBAC)

Los **roles de negocio** agrupan permisos y se asignan por usuario dentro de la empresa. Un usuario puede tener **uno o varios** roles, y sus permisos se suman.

## Roles de sistema

Cada empresa nueva se crea con estos roles predefinidos (no se pueden eliminar):

| Código | Nombre | Descripción |
|---|---|---|
| `admin` | Administrador | Acceso total al sistema (todos los permisos). |
| `manager` | Gerente | Acceso a los módulos de negocio, sin administración de roles/usuarios/permisos. |
| `user` | Usuario | Lectura y escritura básica en productos, documentos, ventas, compras, tesorería y maestros. |
| `viewer` | Observador | Solo lectura (todos los permisos `*.read`). |
| `capturist` | Capturista | Solo carga y envío de imágenes/PDF en Capturas, sin acceso al resto de Tesorería. |

Además podés **crear roles propios** y combinarlos como quieras.

## Cómo se resuelve un permiso

Al evaluar una acción, el sistema aplica este orden:

1. **Override DENY** (negación explícita por usuario) — gana siempre.
2. **Override ALLOW** (concesión explícita por usuario).
3. **Permiso del rol** de negocio asignado.
4. **Denegado por defecto**.

Los usuarios con membresía **OWNER** de la empresa omiten esta verificación y acceden a todo.

## Convención de permisos

Cada permiso combina un **módulo** y una **acción** (por ejemplo, crear productos o ejecutar picking). En la pantalla de permisos cada uno se muestra con su **descripción en español**, agrupado por módulo:

**Acceso** · **Documentos** (con subgrupos por tipo) · **Maestros** · **Ingeniería y Costos** · **Logística** · **Capturas y adjuntos** · **Tesorería** · **RRHH** · **Sistema**.

Acciones habituales: `read` (ver), `create` (crear), `update` (editar), `confirm` (confirmar), `cancel` (anular), `delete` (eliminar).

## Páginas de esta sección

- [Gestionar usuarios](/administracion/usuarios-roles-permisos/gestionar-usuarios/) — alta, edición, contraseña, vínculos y asignación de roles.
- [Gestionar roles y permisos](/administracion/usuarios-roles-permisos/gestionar-roles/) — crear roles y asignar permisos.

## Permisos necesarios

:::note[Permisos necesarios]
- Gestionar usuarios y roles requiere ser **OWNER** o **ADMIN** de la empresa.
- Permisos de roles: Ver roles · Crear roles · Editar roles · Eliminar roles · Asignar permisos a roles.
- Permisos de usuarios: Ver roles de un usuario · Asignar roles a usuarios · Ver permisos efectivos de un usuario.
:::

## Ver también

- [Configuración inicial de la empresa](/primeros-pasos/configuracion-inicial-empresa/): al crear la empresa se siembran estos roles.
