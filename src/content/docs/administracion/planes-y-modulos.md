---
title: Planes y módulos por empresa
description: Cómo asignar planes, habilitar módulos y aplicar excepciones por empresa.
---

La administración de planes permite definir qué áreas de Asterisk Suite usa cada empresa. La configuración pertenece a la plataforma y distingue dos alcances: **PLATFORM_OWNER** puede gestionar todas las empresas y la configuración global; **PLATFORM_ADMIN** solo puede gestionar las empresas asociadas a su usuario en la plataforma.

## Abrir la administración

Ingresá a **Configuración → Planes y módulos** (`/settings/platform-plans`). El contenido depende de tu rol:

- **PLATFORM_OWNER:** ve todas las empresas, puede crear planes, elegir los módulos incluidos y dar de alta empresas.
- **PLATFORM_ADMIN:** ve y administra solo las empresas que le asignó un `PLATFORM_OWNER`. Puede cambiar su plan, estado y excepciones de módulos; no ve las secciones de configuración global, alta de empresas ni administración de otros usuarios.

El alcance se valida en el backend además de ocultarse en la pantalla. Una solicitud de un `PLATFORM_ADMIN` para una empresa no asociada se rechaza.

Los cambios se aplican al resolver los módulos efectivos de la empresa. La respuesta se puede consultar desde `GET /api/platform-modules/effective` con la empresa activa.

## Crear y configurar un plan

Esta acción está reservada a **PLATFORM_OWNER** porque modifica una configuración compartida por varias empresas.

1. Creá el plan con un código único, un nombre y una descripción opcional.
2. Seleccionalo en la pestaña **Planes**.
3. Activá las áreas que deben estar incluidas y guardá los cambios.
4. En **Empresas y módulos**, asigná ese plan y un estado a cada empresa.

## Dar de alta una empresa manualmente

El alta manual está reservada a **PLATFORM_OWNER**.

1. La persona que quedará como titular debe tener una cuenta registrada en Asterisk Suite. Si todavía no la tiene, debe registrarse primero; el alta manual no solicita ni guarda su contraseña.
2. Abrí **Alta de empresa**, completá el nombre y verificá que el subdominio esté disponible.
3. Ingresá el email registrado y validalo. Esa cuenta quedará como **OWNER** de la empresa; la cuenta de plataforma que realiza el alta no se agrega automáticamente como usuario tenant.
4. Elegí un plan activo y el estado inicial. Si seleccionás **Prueba**, indicá también la fecha de finalización.
5. Completá los datos fiscales y de contacto que tengas disponibles y creá la empresa.

El proceso crea la base tenant con el esquema y los catálogos iniciales, asigna el rol administrador del tenant a la persona titular y registra la suscripción seleccionada. Al terminar, la pantalla abre **Empresas y módulos** con la nueva empresa seleccionada para ajustar accesos individuales.

## Administrar usuarios de plataforma

Solo **PLATFORM_OWNER** puede asignar o revocar administradores de plataforma. En **Configuración → Planes y módulos → Administradores**:

1. Buscá por email una cuenta activa ya registrada en Asterisk Suite.
2. Seleccioná una o más empresas que podrá administrar y guardá el alcance.
3. Para cambiar las empresas, editá el alcance. Para quitar el rol, usá **Revocar**.

La asignación solo habilita la gestión de planes, estados y módulos de esas empresas. No agrega al usuario como integrante tenant ni le permite consultar el ERP. Si también necesita operar dentro de una empresa, agregalo por separado desde la gestión de usuarios de esa empresa. Si todavía no tiene cuenta, primero debe registrarse; la pantalla no crea contraseñas.

Al asignar el rol, la persona debe volver a iniciar sesión para que la interfaz cargue el nuevo rol. Los cambios de alcance de un administrador existente se aplican inmediatamente en el backend. Al revocar, se restaura su rol de plataforma anterior y se conservan sus membresías y roles tenant.

## Eliminar una empresa

La eliminación definitiva está reservada a **PLATFORM_OWNER**. En **Configuración → Planes y módulos → Empresas y módulos**, elegí **Eliminar** junto a la empresa y escribí su subdominio para confirmar.

Esta acción elimina la base de datos tenant, la suscripción y las relaciones de esa empresa con sus usuarios y administradores. Las cuentas globales de usuario se conservan, por lo que las personas pueden seguir accediendo a otras empresas a las que pertenezcan. La eliminación es permanente y no se puede deshacer.

El alta pública de `/register` y `/create-company` continúa disponible y conserva la asignación histórica `LEGACY_FULL` cuando existe. El alta manual desde plataforma permite elegir un plan desde el inicio.

Los módulos esenciales se mantienen habilitados. Las dependencias también se aplican automáticamente: si falta una dependencia, el módulo dependiente queda deshabilitado; si la dependencia está en solo lectura, el módulo dependiente también pasa a solo lectura.

| Código | Área | Dependencias principales |
| --- | --- | --- |
| `CORE` | Acceso, empresas y configuración esencial | — |
| `MASTER_DATA` | Productos, partes interesadas y catálogos | `CORE` |
| `SALES` | Ventas | `CORE`, `MASTER_DATA` |
| `PURCHASES` | Compras | `CORE`, `MASTER_DATA` |
| `INVENTORY` | Inventario | `MASTER_DATA` |
| `LOGISTICS` | Logística | `INVENTORY` |
| `TREASURY` | Tesorería | `CORE`, `MASTER_DATA` |
| `ACCOUNTING` | Contabilidad | `SALES`, `PURCHASES`, `TREASURY` |
| `HR` | Recursos humanos | `CORE` |
| `MAINTENANCE` | Mantenimiento | `CORE` |
| `INTERNATIONAL_OPERATIONS` | Operaciones internacionales | `PURCHASES` |
| `MANUFACTURING` | Fabricación | `INVENTORY` |
| `REPORTS` | Reportes | `CORE` |
| `WHATSAPP` | Avisos y reportes por WhatsApp | `CORE` |
| `MCP` | Conexiones autorizadas con asistentes mediante MCP | `CORE` |

## Estados y excepciones

Una suscripción puede estar **TRIAL**, **ACTIVE**, **PAST_DUE**, **SUSPENDED** o **CANCELLED**. Una prueba vencida deja los módulos del plan deshabilitados. Una suscripción vencida de pago (`PAST_DUE`) conserva los módulos en solo lectura. Los estados suspendido y cancelado no habilitan módulos del plan.

En **Empresas y módulos**, elegí una empresa dentro de tu alcance para revisar qué áreas incluye su plan y qué accesos tienen una excepción. Para `PLATFORM_ADMIN`, la lista contiene únicamente empresas asociadas a su usuario; `PLATFORM_OWNER` ve todas. Los cambios se guardan al seleccionar un estado; si falla la actualización, aparece un aviso para volver a intentarlo. Las opciones por módulo son:

- **Según el plan:** quitar la excepción y volver a la configuración del plan.
- **Habilitado:** permitir temporalmente el módulo aunque el plan no lo incluya.
- **Solo lectura:** permitir consultas y bloquear escrituras cuando el control del backend está en modo `enforce`.
- **Deshabilitado:** impedir el uso del módulo cuando el control del backend está en modo `enforce`.

Los módulos esenciales no admiten excepciones. Las dependencias pueden limitar el resultado de una excepción; por ejemplo, no se habilita un módulo si una dependencia necesaria sigue deshabilitada.

## WhatsApp y MCP

Habilitar `WHATSAPP` permite que la empresa use las funciones de avisos y reportes por ese canal. También deben estar configurados el proveedor de WhatsApp, los destinatarios y los eventos que se quieren comunicar. El plan no configura números ni credenciales.

Habilitar `MCP` permite autorizar conexiones de asistentes externos. La autorización sigue requiriendo identidad de usuario, empresa y permisos; el módulo no concede por sí solo acceso a datos. Las herramientas disponibles dependen también de los módulos funcionales y alcances OAuth autorizados.

## Empresas existentes y despliegue

La migración asigna a las empresas existentes el plan histórico `LEGACY_FULL`, que mantiene habilitadas sus áreas previas e incluye WhatsApp y MCP. Las altas públicas también reciben ese plan si está presente. En cambio, el alta manual desde plataforma permite elegir el plan inicial. Así, incorporar el control de módulos no recorta el acceso de las empresas actuales.

El backend admite `MODULE_ENFORCEMENT_MODE=disabled`, `audit` o `enforce`. El modo predeterminado es **audit**: registra accesos a módulos no habilitados, pero no los bloquea. En `enforce`, las rutas asociadas a módulos deshabilitados responden con acceso denegado y las rutas de módulos en solo lectura bloquean escrituras. Conviene revisar las métricas de auditoría y el mapeo de rutas antes de activar ese modo.

Si todavía no se aplicó la migración de módulos, el control del backend conserva temporalmente el acceso existente ante la falta de tablas. Si las tablas existen pero el catálogo aún no tiene filas, la interfaz y las rutas también mantienen el acceso mientras se completa la inicialización. Aplicá las migraciones en la base central de plataforma antes de asignar planes. Si las tablas están creadas pero faltan las filas iniciales, se puede ejecutar el script de recuperación `asterisksuite_backend/prisma/repairs/20261102_restore_legacy_platform_modules.sql` conectado a `asterisksuite`; el script agrega `LEGACY_FULL` a empresas activas sin suscripción y conserva los planes que ya estén asignados.

La administración de usuarios requiere las tablas `public.platform_admin_assignments` y `public.platform_admin_company_scopes` definidas en el esquema Prisma. Aplicá el cambio de esquema en la base central antes de habilitar esta versión. La migración debe conservar el acceso de los administradores actuales asignándoles como alcance inicial las empresas que ya tienen asociadas.

## Relacionado

- [Usuarios, roles y permisos](/administracion/usuarios-roles-permisos/)
- [Centro de configuración](/administracion/centro-de-configuracion/)
- [Notificaciones](/administracion/notificaciones/)
- [Conexiones de IA](/administracion/conexiones-de-ia/)
