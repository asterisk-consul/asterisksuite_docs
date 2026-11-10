# Estado de la documentación

> Archivo **generado** por `pnpm docs:report` — no editar a mano. Fuente de verdad: `docs-status.json`.

## Resumen

| | |
| --- | --- |
| Última versión de la app | **v0.142.0-alpha** (2026-11-10) |
| Documentación al día hasta | **v0.135.0-alpha** |
| Última revisión de docs | 2026-11-05 |
| Versiones pendientes de revisar | **11** (0.142.0-alpha, 0.141.0-alpha, 0.140.2-alpha, 0.140.1-alpha, 0.140.0-alpha, 0.139.0-alpha, 0.138.2-alpha, 0.138.1-alpha, 0.138.0-alpha, 0.137.1-alpha, 0.136.0-alpha) |

## Pendientes

Cada entrada es una versión de la app que todavía no se revisó contra los contenidos de `src/content/docs/`.

### v0.142.0-alpha (2026-11-10) — pendiente

- Notificar asignaciones, comentarios y menciones de tareas
- Agregar avisos opcionales de tareas con consentimiento y cola agrupada
- Agregar CRM y Tareas al catálogo y proteger rutas por empresa
- Documentar notificaciones y activación del módulo CRM

### v0.141.0-alpha (2026-11-10) — pendiente

- Ampliar la barra de formato de las descripciones con menús de inserción
- Indicar los formatos activos y alinear el control de completado con el título
- Documentar el editor de descripción y aclarar que las menciones no notifican

### v0.140.2-alpha (2026-11-10) — pendiente

- Organizar las acciones de tarea en ventanas y mostrar el cliente como acción
- Habilitar completar o reabrir desde el detalle y mostrar la descripción
- Documentar las acciones, el cliente y el control de completado

### v0.140.1-alpha (2026-11-10) — pendiente

- Evitar el bloqueo al cargar la factura de referencia en NC y ND
- Importar el composable de permisos en el detalle de venta

### v0.140.0-alpha (2026-11-10) — pendiente

- Agregar bonificaciones globales porcentuales o fijas a órdenes y presupuestos
- Elegir actualizar precios generales al confirmar facturas de venta
- Documentar bonificaciones por ítem y globales en ventas
- Documentar la actualización opcional de precios desde facturas

### v0.139.0-alpha (2026-11-10) — pendiente

- Anular NC/ND confirmadas vinculadas a facturas
- Proteger la factura relacionada y purgar solo notas manuales seguras

### v0.138.2-alpha (2026-11-06) — pendiente

- Corregir permisos y categorías en las bandejas de comprobantes
- Mostrar el estado de pago o cobro junto al estado documental

### v0.138.1-alpha (2026-11-06) — pendiente

- Abrir los pagos asociados desde el detalle de la operación

### v0.138.0-alpha (2026-11-06) — pendiente

- Convertir a pesos los importes de facturas en dólares al aplicar pagos
- Consultar y abrir pagos o cobros desde el detalle de la factura

### v0.137.1-alpha (2026-11-06) — pendiente

- Hacer que Recordarme controle la duración de la sesión

### v0.136.0-alpha (2026-11-05) — pendiente

- Importar y conciliar extractos bancarios por cuenta con su asiento contable
- Seleccionar socios como vendedores de OV sin exponer porcentajes de participación
- Conservar los datos y el perfil de socios en el formulario unificado de partes interesadas

## Versiones resueltas sin actualizar docs

### v0.138.3-alpha (2026-11-06) — sin cambios

> Cambios internos de dependencias, documentación y cliente HTTP de prueba; no modifican funciones ni flujos para usuarios.

- Actualizar dependencias de frontend y backend
- Retirar documentación interna de corredores y versionado
- Ajustar el endpoint del cliente HTTP de vehículos

### v0.135.2-alpha (2026-11-05) — sin cambios

> Ajuste visual del login y rótulo del subdominio activo; no modifica los pasos ni permisos de inicio de sesión.

- Simplificar el login y mostrar la empresa del espacio

### v0.135.1-alpha (2026-11-05) — sin cambios

> Ajuste exclusivamente visual y responsive del inicio de sesión; no cambia el flujo ni los requisitos de acceso.

- Rediseñar el inicio de sesión con una presentación adaptable

## Cómo actualizar este estado

```bash
pnpm docs:status                       # ver el estado y los pendientes
pnpm docs:report                       # regenerar DOCS_STATUS.md y la página del portal
pnpm docs:status -- mark 0.83.0-alpha  # marcar hasta qué versión quedó documentado
pnpm docs:status -- skip 0.84.0-alpha --note "solo rendimiento"
pnpm docs:status -- partial 0.85.0-alpha --note "falta X página"
pnpm docs:check                        # sale con error si hay pendientes
```

Después de cada versión nueva de la app: revisar los cambios, actualizar los contenidos,
ejecutar `pnpm docs:report` y commitear `docs-status.json` junto con los `.md`.
