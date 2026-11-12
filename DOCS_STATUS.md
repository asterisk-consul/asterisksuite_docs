# Estado de la documentación

> Archivo **generado** por `pnpm docs:report` — no editar a mano. Fuente de verdad: `docs-status.json`.

## Resumen

| | |
| --- | --- |
| Última versión de la app | **v0.153.3-alpha** (2026-11-11) |
| Documentación al día hasta | **v0.135.0-alpha** |
| Última revisión de docs | 2026-11-05 |
| Versiones pendientes de revisar | **31** (0.153.3-alpha, 0.153.2-alpha, 0.153.1-alpha, 0.153.0-alpha, 0.152.0-alpha, 0.151.3-alpha, 0.151.1-alpha, 0.151.0-alpha, 0.150.0-alpha, 0.149.0-alpha, 0.148.5-alpha, 0.148.4-alpha, 0.148.3-alpha, 0.148.0-alpha, 0.147.0-alpha, 0.146.0-alpha, 0.145.0-alpha, 0.144.1-alpha, 0.144.0-alpha, 0.143.0-alpha, 0.142.0-alpha, 0.141.0-alpha, 0.140.2-alpha, 0.140.1-alpha, 0.140.0-alpha, 0.139.0-alpha, 0.138.2-alpha, 0.138.1-alpha, 0.138.0-alpha, 0.137.1-alpha, 0.136.0-alpha) |

## Pendientes

Cada entrada es una versión de la app que todavía no se revisó contra los contenidos de `src/content/docs/`.

### v0.153.3-alpha (2026-11-11) — pendiente

- Abrir la ficha del producto desde los renglones de los comprobantes

### v0.153.2-alpha (2026-11-11) — pendiente

- Abrir la ficha del producto desde el nombre en la tabla
- Navegar desde cada renglón al comprobante de ventas o compras correspondiente
- Mantener el control del sidebar en el encabezado global del reporte

### v0.153.1-alpha (2026-11-11) — pendiente

- Calcular cada importe con el subtotal del renglón sin volver a multiplicarlo por la cantidad
- Agregar una pestaña de gráficos para cantidades y distribución por artículo
- Mostrar comprobantes expandidos debajo del producto correspondiente
- Incluir el control para plegar el sidebar en el encabezado global

### v0.153.0-alpha (2026-11-11) — parcial

> La guía de cuentas corrientes explica el registro sugerido o manual, el impacto fiscal y de saldo, y la imputación opcional al saldo inicial; versiones anteriores siguen pendientes de revisión.

- Registrar retenciones desde la cuenta corriente sin generar un pago o cobro
- Imputar retenciones al saldo inicial y descontar su pendiente en la moneda del documento
- Permitir incluir en un VEP las retenciones practicadas registradas desde la cuenta corriente
- Documentar el registro y la imputación de retenciones en cuentas corrientes

### v0.152.0-alpha (2026-11-11) — pendiente

- Agrupar productos vendidos por categoría y filtrar por comprobante
- Incorporar el reporte agrupado de productos comprados
- Abrir los renglones documentales de cada producto con paginación
- Separar importes por moneda y agrupar cantidades por unidad
- Documentar los reportes de productos de ventas y compras

### v0.151.3-alpha (2026-11-11) — parcial

> Documentada la visualización de secciones editadas y el guardado antes de confirmar pagos y cobros; el corte global sigue pendiente de versiones anteriores.

- Alternar Guardar borrador y Confirmar según los cambios pendientes
- Mostrar qué secciones del pago o cobro fueron editadas
- Evitar guardar un borrador limpio desde el atajo Ctrl + S
- Documentar el guardado previo a confirmar pagos y cobros

### v0.151.1-alpha (2026-11-11) — parcial

> La guía indica que el período y el estado quedan visibles, y que los filtros de agrupación y comerciales se despliegan bajo Más filtros. El corte global sigue pendiente de versiones anteriores.

- Compactar los filtros para dar prioridad a los datos del reporte
- Mostrar filtros adicionales solo cuando se despliegan e indicar los activos
- Documentar la organización de filtros del reporte

### v0.151.0-alpha (2026-11-11) — parcial

> La recuperación de pagos y cobros anulados y el cálculo bruto/neto están documentados; el corte global sigue pendiente de versiones anteriores.

- Recuperar pagos y cobros anulados como borrador
- Recalcular saldos de comprobantes con pagos vigentes al reabrir
- Mostrar las retenciones como descuento único del importe bruto aplicado
- Documentar la recuperación de pagos y cobros anulados

### v0.150.0-alpha (2026-11-11) — parcial

> La guía ya explica los filtros de estado propios de OV, presupuestos y facturas, además de la salida de los rankings de productos. El corte global sigue pendiente de versiones anteriores.

- Retirar los rankings de productos del reporte gerencial
- Reducir los datos de productos consultados por el reporte
- Filtrar OV, presupuestos y facturas por su estado documental
- Documentar estados disponibles por tipo de documento

### v0.149.0-alpha (2026-11-11) — parcial

> Documentadas las bases de OV, presupuesto y factura, la lectura de cobros y el enlace al reporte de productos; las versiones anteriores siguen pendientes.

- Agregar presupuestos como base y reflejar cobros en OV o facturas
- Ocultar temporalmente evolución y composición por moneda
- Abrir el reporte de productos conservando las fechas del período
- Documentar categorías y navegación del reporte gerencial

### v0.148.5-alpha (2026-11-11) — parcial

> Documentado el filtro de vendedor en la tabla de órdenes de venta; quedan versiones anteriores pendientes de revisión global.

- Integrar el filtro de vendedor en los filtros de la tabla de OV
- Documentar el filtro de vendedor de órdenes de venta

### v0.148.4-alpha (2026-11-11) — pendiente

- Mostrar solo el último movimiento de un cheque redepositado

### v0.148.3-alpha (2026-11-11) — parcial

> Actualizadas las guías de ventas y compras sobre los filtros por estado; quedan versiones anteriores pendientes de revisión global.

- Corregir selectores y unificar el filtro de estado en las tablas
- Documentar los filtros de estado en los listados de ventas y compras

### v0.148.0-alpha (2026-11-11) — parcial

> El reporte gerencial está documentado en 0.149.0; quedan pendientes las instrucciones de filtros y selección múltiple de productos en comprobantes.

- Filtrar productos por categorías y etiquetas al cargar comprobantes
- Seleccionar y agregar varios productos en ventas y compras
- Documentar filtros y selección múltiple en los circuitos de ventas y compras

### v0.147.0-alpha (2026-11-11) — parcial

> Documentada la precarga de la base en pagos y cobros; el corte general sigue pendiente de versiones anteriores.

- Precargar la base imponible de retenciones manuales con el total de los comprobantes seleccionados
- Documentar la precarga de la base y las opciones para calcular el importe retenido

### v0.146.0-alpha (2026-11-11) — parcial

> Anticipos disponibles y su aplicación están documentados en pagos y cobros; el corte general sigue pendiente de versiones anteriores.

- Mostrar anticipos confirmados en la cuenta corriente de clientes y proveedores
- Descontar aplicaciones del saldo disponible sin duplicar movimientos
- Restituir el saldo del anticipo al quitar una aplicación
- Incorporar anticipos existentes con un backfill idempotente por empresa
- Documentar el impacto de anticipos en cuentas corrientes

### v0.145.0-alpha (2026-11-11) — parcial

> Documentados precios, NC/ND, saldos y anticipos con tercero, documentos enlazados y cotización; versiones anteriores siguen pendientes de revisión.

- Configurar actualizaciones automáticas de precios por contraparte y globales
- Ingresar precios de NC con IVA incluido y recalcular la base
- Descontar NC aplicadas del saldo y marcar la factura saldada
- Evitar que las NC y ND actualicen precios o costos
- Mostrar el resultado en un toast con acceso directo a la configuración
- Aplicar anticipos entre ARS y USD con cotización y respetar el mismo tercero
- Mostrar cliente o proveedor en el detalle y enlazar comprobantes aplicados
- Documentar los cuatro controles y el aviso posterior a la confirmación
- Documentar cómo aplicar un anticipo a una factura pendiente

### v0.144.1-alpha (2026-11-10) — parcial

> Las notas de crédito de ventas y compras precargan el saldo pendiente; versiones anteriores siguen pendientes de revisión.

- Descontar notas de crédito del saldo pendiente y precargar ese saldo en nuevas NC
- Calcular el saldo pendiente de compras y precargarlo en nuevas NC
- Impedir cobros por encima del saldo después de notas de crédito
- Explicar la diferencia entre cobrada y saldada por NC
- Documentar la precarga de NC de compra según saldo pendiente

### v0.144.0-alpha (2026-11-10) — parcial

> La eliminación definitiva de empresas desde la plataforma está documentada; quedan versiones anteriores pendientes de revisar.

- Eliminar empresas y sus bases tenant desde la plataforma
- Documentar la eliminación definitiva de una empresa

### v0.143.0-alpha (2026-11-10) — pendiente

- Asociar varios miembros con roles a una tarea
- Avisar cuando agregan una persona a una tarea
- Documentar miembros, roles y migración tenant

### v0.142.0-alpha (2026-11-10) — pendiente

- Notificar asignaciones, comentarios y menciones de tareas
- Agregar avisos opcionales de tareas con consentimiento y cola agrupada
- Agregar CRM y Tareas al catálogo y proteger rutas por empresa
- Mantener visible el tablero y abrir la configuración de avisos desde el encabezado
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

### v0.151.2-alpha (2026-11-11) — sin cambios

> Corrección de la conversión del parámetro de estado en la API; el uso del filtro no cambia.

- Convertir el estado documental antes de validarlo en la consulta

### v0.148.2-alpha (2026-11-11) — sin cambios

> Ajuste visual de tarjetas y rótulos de filtros existentes; no modifica reglas ni pasos de los circuitos.

- Etiquetar filtros y compactar tarjetas en las listas de comprobantes

### v0.148.1-alpha (2026-11-11) — sin cambios

> Ajuste visual de tarjetas y ubicación de filtros existentes; no cambia las reglas ni los pasos del proceso.

- Compactar las tarjetas y unificar los filtros de comprobantes

### v0.147.1-alpha (2026-11-11) — sin cambios

> Ajuste visual del aviso de solo lectura; no cambia el proceso ni las reglas de edición.

- Compactar el aviso de edición limitada en el detalle de pagos y cobros

### v0.143.1-alpha (2026-11-10) — sin cambios

> Ajuste visual de la animación del título en las tarjetas; no cambia el flujo ni los pasos de uso.

- Mover solo el título al mostrar el control de completado

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
