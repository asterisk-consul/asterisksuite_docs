---
title: Permisos y acceso
description: Qué hacer cuando no ves acciones, pantallas o módulos.
sidebar:
  order: 1
---

## Síntoma

No veo botones de acción, pantallas o módulos; o el sistema me deniega una operación.

## Causas y soluciones

### 1. Mi membresía no es OWNER ni ADMIN

Muchas pantallas de administración (usuarios, roles, empresa) solo las opera **OWNER** o **ADMIN**. El resto las ve deshabilitadas o con un aviso de "Sin permisos".

**Solución**: pedí que te asignen el rol de empresa correspondiente.

### 2. Me falta el permiso específico

Aunque seas ADMIN, cada acción requiere su **permiso** (por ejemplo "Crear productos", "Confirmar ventas"). Un rol puede no incluirlos.

**Solución**: que un administrador agregue el permiso a tu rol en **Roles y permisos**, o te asigne un rol que lo tenga.

### 3. El permiso existe pero "denegado"

Los overrides **DENY** tienen prioridad sobre todo. Si tenés un permiso denegado explícitamente, no podrás usarlo aunque tu rol lo otorgue.

**Solución**: revisá los permisos efectivos del usuario y quitá el override DENY.

### 4. No veo un módulo en el menú

El módulo puede requerir un permiso de lectura (por ejemplo "Ver cajas") o puede estar **inactivo**.

**Solución**: verificá el permiso de lectura del módulo.

### 5. Después de una actualización no aparecen los permisos nuevos

Cada versión puede incorporar permisos nuevos (por ejemplo, los permisos para registrar y anular movimientos manuales de caja). El **seed de permisos es aditivo**: sincroniza el catálogo de permisos y roles por defecto **preservando** los roles, permisos, asignaciones y personalizaciones existentes, así que no borra tu configuración.

**Solución**: ejecutá el seed de RBAC del backend (`pnpm run seed:rbac`, indicando el tenant de la empresa si corresponde) para incorporar los permisos nuevos al catálogo, y luego agregá esos permisos a los roles que los necesiten en **Roles y permisos**. Aunque el permiso exista en el catálogo, cada rol debe incluirlo explícitamente.

## Ver también

- [Usuarios, roles y permisos](/administracion/usuarios-roles-permisos/).
- [Gestionar roles y permisos](/administracion/usuarios-roles-permisos/gestionar-roles/).
