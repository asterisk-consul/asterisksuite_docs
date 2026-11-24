# Estado de la documentación

> Archivo **generado** por `pnpm docs:report` — no editar a mano. Fuente de verdad: `docs-status.json`.

## Resumen

| | |
| --- | --- |
| Última versión de la app | **v0.182.0-alpha** (2026-11-24) |
| Documentación al día hasta | **v0.135.0-alpha** |
| Última revisión de docs | 2026-11-05 |
| Versiones pendientes de revisar | **77** (0.182.0-alpha, 0.181.1-alpha, 0.181.0-alpha, 0.180.4-alpha, 0.180.3-alpha, 0.180.2-alpha, 0.180.1-alpha, 0.180.0-alpha, 0.179.0-alpha, 0.178.3-alpha, 0.178.1-alpha, 0.178.0-alpha, 0.177.0-alpha, 0.176.1-alpha, 0.176.0-alpha, 0.175.0-alpha, 0.174.0-alpha, 0.173.3-alpha, 0.173.2-alpha, 0.173.1-alpha, 0.173.0-alpha, 0.172.0-alpha, 0.171.0-alpha, 0.170.0-alpha, 0.169.0-alpha, 0.168.2-alpha, 0.168.1-alpha, 0.168.0-alpha, 0.167.0-alpha, 0.166.0-alpha, 0.165.1-alpha, 0.165.0-alpha, 0.164.1-alpha, 0.164.0-alpha, 0.163.0-alpha, 0.162.0-alpha, 0.161.0-alpha, 0.160.0-alpha, 0.159.0-alpha, 0.158.1-alpha, 0.158.0-alpha, 0.157.0-alpha, 0.156.0-alpha, 0.155.1-alpha, 0.155.0-alpha, 0.154.0-alpha, 0.153.3-alpha, 0.153.2-alpha, 0.153.1-alpha, 0.153.0-alpha, 0.152.0-alpha, 0.151.3-alpha, 0.151.1-alpha, 0.151.0-alpha, 0.150.0-alpha, 0.149.0-alpha, 0.148.5-alpha, 0.148.4-alpha, 0.148.3-alpha, 0.148.0-alpha, 0.147.0-alpha, 0.146.0-alpha, 0.145.0-alpha, 0.144.1-alpha, 0.144.0-alpha, 0.143.0-alpha, 0.142.0-alpha, 0.141.0-alpha, 0.140.2-alpha, 0.140.1-alpha, 0.140.0-alpha, 0.139.0-alpha, 0.138.2-alpha, 0.138.1-alpha, 0.138.0-alpha, 0.137.1-alpha, 0.136.0-alpha) |

## Pendientes

Cada entrada es una versión de la app que todavía no se revisó contra los contenidos de `src/content/docs/`.

### v0.182.0-alpha (2026-11-24) — parcial

> Se documentan los avisos de acreditación automática y fallos; el registro de Asterisk no confirma el impacto bancario.

- Notificar en la campanita el registro o fallo de la acreditación automática de eCheq
- Aclarar que el aviso de acreditación no reemplaza la verificación del extracto bancario

### v0.181.1-alpha (2026-11-24) — pendiente

- Mostrar categoría, prioridad e inicio y vencimiento como chips editables independientes
- Documentar la edición individual de campos en el detalle de tareas

### v0.181.0-alpha (2026-11-24) — parcial

> Se documentó el formato físico/eCheq, la acreditación automática al vencimiento en cuentas locales o compartidas autorizadas para Cobros y el uso del concepto de crédito de la empresa titular; el corte global sigue pendiente por versiones anteriores.

- Distinguir cheques físicos y eCheq en altas y ediciones
- Acreditar automáticamente eCheq recibidos vencidos en una cuenta local o compartida
- Asociar al movimiento automático el concepto de crédito de la empresa titular
- Documentar formatos, cuenta, concepto y acreditación automática de eCheq

### v0.180.4-alpha (2026-11-24) — parcial

> Se documentó la etiqueta Retiro de socio para débitos asociados a vales; la revisión general sigue pendiente por versiones anteriores.

- Identificar los débitos de vales de socios como Retiro de socio
- Documentar la etiqueta de los retiros de socios en Bancos

### v0.180.3-alpha (2026-11-24) — parcial

> Se documentó la distinción entre retiros manuales y pagos en el historial bancario; la revisión general sigue pendiente por versiones anteriores.

- Mostrar como Retiro los débitos manuales históricos guardados como Pago
- Aclarar la diferencia entre retiros manuales y pagos en el historial bancario

### v0.180.2-alpha (2026-11-23) — parcial

> Se documentó la visualización de cheques asociados y la advertencia si falta el vínculo; la revisión general sigue pendiente por versiones anteriores.

- Mostrar cheques vinculados por aplicación y por relación directa con el pago
- Advertir cuando un pago indica cheque pero no tiene una asociación visible
- Documentar la trazabilidad de cheques desde el detalle del pago

### v0.180.1-alpha (2026-11-23) — parcial

> Se documentó la conservación de búsqueda, filtros, tipo de operación, anulados y ordenamiento al volver al listado; la revisión general sigue pendiente por versiones anteriores.

- Conservar filtros, búsquedas y orden del listado de pagos y cobros al volver
- Documentar la persistencia de filtros del listado de Tesorería

### v0.180.0-alpha (2026-11-23) — parcial

> Se documentó la aplicación múltiple de anticipos y la consulta de pagos vinculados a saldos iniciales, incluidos vínculos históricos anulados; el corte general sigue pendiente por versiones anteriores.

- Aplicar pagos y cobros anticipados a varios documentos en una sola operación
- Incluir saldos iniciales pendientes en la aplicación de anticipos
- Mostrar pagos y cobros vinculados desde el detalle de saldos iniciales
- Distinguir los vínculos históricos de pagos anulados del importe aplicado vigente
- Documentar la distribución de anticipos y la trazabilidad de pagos en saldos iniciales

### v0.179.0-alpha (2026-11-21) — parcial

> La configuración de cargos automáticos por cuenta y movimiento quedó documentada en Bancos; la revisión global sigue pendiente de versiones anteriores.

- Configurar cargos automáticos por cuenta y naturaleza del movimiento bancario
- Mostrar las cuentas configuradas en los conceptos automáticos
- Documentar la configuración y el efecto de los cargos bancarios automáticos

### v0.178.3-alpha (2026-11-21) — parcial

> Se documentaron los accesos filtrados a facturas y NC/ND en Ventas y Compras; el corte general sigue pendiente por versiones anteriores.

- Separar los accesos a facturas y notas de crédito/débito en los menús
- Documentar los accesos filtrados y el listado completo de comprobantes

### v0.178.1-alpha (2026-11-21) — parcial

> Se documentó el paso para adjuntar al crear y la liberación de presupuestos ya anulados sin quitar la OC activa; las versiones históricas previas siguen pendientes de revisión.

- Permitir liberar un presupuesto ya anulado aunque su OC siga activa
- Ofrecer adjuntar imágenes y PDF al terminar de crear un presupuesto
- Documentar adjuntos al crear y liberar presupuestos anulados

### v0.178.0-alpha (2026-11-21) — parcial

> La versión documenta los adjuntos en presupuestos internacionales; otras versiones anteriores del portal siguen pendientes de revisión.

- Consultar y adjuntar archivos en presupuestos desde la operación
- Documentar los adjuntos de presupuestos por operación

### v0.177.0-alpha (2026-11-20) — parcial

> Se documentaron la protección contra anular presupuestos vinculados y las acciones para liberarlos desde la operación internacional; las versiones anteriores siguen pendientes.

- Bloquear la anulación de presupuestos asociados a operaciones internacionales
- Anular y desasociar presupuestos cuando el comprobante generado ya está resuelto
- Mostrar el estado Anulado en el detalle de presupuestos de compra
- Documentar las reglas para anular y desasociar presupuestos

### v0.176.1-alpha (2026-11-20) — parcial

> La tarjeta abre el presupuesto y el menú reúne ver detalle, edición con permiso y desasociación; el corte general sigue pendiente de versiones anteriores.

- Abrir el presupuesto desde su tarjeta y ordenar las acciones secundarias en un menú
- Documentar la apertura de propuestas y sus acciones secundarias

### v0.176.0-alpha (2026-11-20) — parcial

> Se documentaron los filtros y accesos a presupuestos de operaciones internacionales; el corte general sigue pendiente por versiones anteriores.

- Unificar los filtros jerárquicos de categorías y etiquetas en listados y selectores
- Filtrar productos del presupuesto por categoría y etiqueta
- Abrir y editar el presupuesto desde la propuesta asociada
- Documentar los filtros y accesos a presupuestos asociados

### v0.175.0-alpha (2026-11-20) — parcial

> Se documentó cómo configurar el prefijo y el próximo número de descripción de contenedores. Las versiones históricas anteriores aún tienen documentación pendiente.

- Configurar el prefijo y la secuencia numérica de contenedores
- Documentar la configuración de descripciones y numeración

### v0.174.0-alpha (2026-11-20) — parcial

> La creación conjunta de operación y primer contenedor y la descripción editable con numeración sugerida quedaron documentadas en las guías de operaciones internacionales y contenedores.

- Crear la operación y el primer contenedor en una sola acción
- Guardar una descripción editable y sugerir la numeración consecutiva de contenedores
- Organizar los datos principales del contenedor y plegar los campos adicionales
- Documentar la creación conjunta y la descripción de contenedores

### v0.173.3-alpha (2026-11-20) — parcial

> La guía de facturas de compra aclara que la cadena muestra los estados propios de cada documento, incluida la anulación; el corte general sigue pendiente de versiones anteriores.

- Mostrar el estado específico de cada documento relacionado, incluidas las anulaciones
- Aclarar que la cadena indica el estado propio de cada documento generado

### v0.173.2-alpha (2026-11-20) — parcial

> La guía de variantes usa el nombre actual de la pestaña; el rediseño visual de la ficha no cambia el flujo. El corte general continúa pendiente de versiones anteriores.

- Ajustar la distribución de la ficha al contenido y mejorar la lectura de sus datos
- Usar el nombre Variantes en la pestaña de edición del producto
- Actualizar el nombre de la pestaña en la guía de variantes

### v0.173.1-alpha (2026-11-20) — parcial

> La guía de Productos describe la foto principal y su ampliación; el corte general sigue pendiente de versiones anteriores.

- Cargar la foto principal del producto con alternativas de visualización si falla el enlace
- Ampliar la foto desde la ficha y compactar las secciones de información
- Documentar la vista y ampliación de la foto en la ficha del producto

### v0.173.0-alpha (2026-11-20) — parcial

> La ficha de producto y el submenú Productos están documentados; siguen pendientes versiones anteriores de revisar.

- Ampliar General con los datos comerciales, logísticos, fiscales y técnicos del producto
- Ocultar Costos cuando solo hay un template asignado y no existe costo registrado
- Organizar la ficha general en secciones compactas y adaptables
- Agrupar categorías, etiquetas y unidades de medida en el submenú Productos
- Documentar la información de la ficha general y la disponibilidad de Costos

### v0.172.0-alpha (2026-11-20) — parcial

> La guía de Productos cubre las miniaturas, el menú de acciones, la eliminación múltiple y los filtros de categoría y etiqueta; siguen pendientes versiones anteriores de revisar.

- Mostrar miniaturas y abrir la ficha o edición desde las acciones de cada producto
- Seleccionar productos para enviarlos a la papelera en lote
- Ordenar el selector de categorías y agregar búsqueda rápida por etiqueta
- Actualizar la guía del catálogo y sus filtros

### v0.171.0-alpha (2026-11-19) — parcial

> La agenda diaria y el permiso audit.read están documentados en las guías de auditoría y roles; el corte general sigue en 0.135.0-alpha por versiones anteriores pendientes de revisión.

- Navegar la auditoría por fecha y resumir movimientos por usuario y acción
- Asignar la consulta de auditoría mediante el permiso audit.read
- Documentar la agenda diaria y la asignación de acceso a auditoría

### v0.170.0-alpha (2026-11-19) — parcial

> Los cambios de visibilidad de estados están documentados en las guías de ventas y compras; el corte general sigue en 0.135.0-alpha por versiones anteriores pendientes de revisión.

- Configurar la visibilidad de estados en comprobantes, presupuestos, OV, OC y remitos
- Ocultar estados terminales por defecto y guardar la selección por empresa, usuario y listado
- Mostrar Cancelada entre los estados disponibles de las órdenes de venta
- Iniciar apagados los filtros Mostrar cobrados y Mostrar pagados
- Documentar los filtros de estados y su preferencia guardada

### v0.169.0-alpha (2026-11-19) — parcial

> Documentada la agenda personal en el inicio y su navegación diaria; el corte general del portal sigue pendiente de versiones anteriores.

- Resumir actividad diaria, tareas resueltas y pendientes personales en el inicio
- Convertir Mis pendientes en una agenda diaria con navegación por fecha y enlaces a los registros
- Evitar desbordes en los filtros y limitar el alto de las listas de actividad y pendientes con scroll interno
- Documentar el widget Mi actividad y la agenda diaria personal

### v0.168.2-alpha (2026-11-19) — pendiente

- Acceder desde las tablas a edición, cobros o pagos, facturas, remitos, NC/ND y anulación según el estado
- Ubicar el menú de acciones al inicio de las tablas y priorizar Duplicar cuando está disponible
- Documentar las acciones contextuales en las tablas de comprobantes, órdenes y remitos

### v0.168.1-alpha (2026-11-17) — parcial

> Las guías de Bancos y Cajas explican que al anular pagos o cobros se retira el movimiento original y se recalcula el saldo; Transferencias describe la eliminación coordinada de ambos movimientos. El corte global sigue en 0.135.0-alpha por versiones anteriores pendientes.

- Retirar los movimientos de bancos y cajas al anular pagos o cobros y recalcular sus saldos
- Anular ambos lados de una transferencia interna entre fondos dentro de una única transacción
- Documentar la anulación de pagos, cobros y transferencias sin movimientos compensatorios

### v0.168.0-alpha (2026-11-17) — pendiente

- Filtrar un tablero por uno o varios clientes
- Documentar el filtro por varios clientes en el tablero

### v0.167.0-alpha (2026-11-17) — parcial

> La guía de Bancos documenta la página separada, la fecha y el saldo final desde el extracto y la comparación de totales; el corte global sigue en 0.135.0-alpha porque hay versiones anteriores pendientes.

- Abrir la conciliación de extractos en una página dedicada por cuenta bancaria
- Completar fecha y saldo final desde el extracto y comparar créditos, débitos y neto con el sistema
- Documentar la pantalla de conciliación, la carga automática del saldo y los totales comparados

### v0.166.0-alpha (2026-11-17) — pendiente

- Ocultar listas finalizadas con una preferencia activada por defecto y filtrarlas por prioridad
- Mantener accesibles todas las opciones del filtro en pantallas de menor altura
- Recuperar tamaño y contenido de adjuntos desde el almacenamiento de la empresa cuando la ruta registrada no está disponible
- Documentar la preferencia para ocultar listas finalizadas y el filtro de prioridad

### v0.165.1-alpha (2026-11-17) — parcial

> La guía de Bancos aclara que se pueden asignar conceptos antes de configurar la cuenta contable y que el registro requiere una cuenta activa de tipo Activo; el corte global permanece en 0.135.0-alpha por versiones anteriores pendientes.

- Permitir asignar conceptos a filas sin coincidencia aunque la cuenta contable del banco todavía no esté configurada
- Explicar el requisito contable y abrir la configuración de bancos conservando la selección
- Aclarar la selección de conceptos y el requisito para registrar asientos

### v0.165.0-alpha (2026-11-17) — parcial

> Guía de Bancos actualizada para la resolución de movimientos durante la conciliación; el corte global permanece en 0.135.0-alpha por versiones anteriores pendientes de revisión.

- Abrir el flujo de pago/cobro desde una fila sin coincidencia y precargar fecha, cuenta, moneda, importe y referencia
- Exigir comprobante en modo normal y ofrecer el anticipo como decisión explícita
- Vincular o crear cheques y registrar su impacto solo cuando el pago/cobro asociado está confirmado
- Documentar la resolución de pagos, anticipos, cheques y conceptos durante la conciliación

### v0.164.1-alpha (2026-11-16) — parcial

> Guía de Tareas actualizada para la previsualización de adjuntos y el formulario; versiones anteriores siguen pendientes de revisión.

- Abrir imágenes y PDF adjuntos en una previsualización autenticada y permitir descargar otros formatos
- Unificar el desplazamiento del detalle y mostrar categoría y fechas al inicio del formulario
- Actualizar la guía del CRM con la vista de adjuntos y el formulario de tareas

### v0.164.0-alpha (2026-11-13) — parcial

> Documentados el cambio de tipo de usuario, sus restricciones y el estado de WhatsApp; versiones anteriores siguen pendientes de revisión.

- Cambiar el tipo de usuario de una empresa desde la edición de usuarios
- Impedir cambios del propietario o del propio tipo de usuario
- Mostrar el estado del teléfono y del consentimiento de WhatsApp junto al campo
- Documentar la edición y las restricciones del tipo de usuario

### v0.163.0-alpha (2026-11-13) — pendiente

- Controlar cada reporte con un permiso propio y validar el acceso también en el backend
- Agregar al catálogo tenant los permisos de reportes faltantes al abrir la configuración de roles
- Expandir el grupo Reportes y explicar el permiso general heredado
- Documentar la activación individual de reportes desde los roles

### v0.162.0-alpha (2026-11-13) — parcial

> Guía de resultado y composición actualizada para el resumen agrupado, egresos unificados por defecto y opción de desglose; quedan versiones anteriores pendientes de revisión global.

- Agrupar el resumen por empresa y período en Ventas y Compras/Gastos
- Mostrar egresos realizados en una columna con opción para separar pagos, gastos, vales y obligaciones
- Evitar duplicar egresos cuando vales u obligaciones ya tienen un movimiento de pago asociado
- Actualizar la composición y los documentos al buscar en el detalle
- Documentar el resumen agrupado y la presentación unificada o separada de egresos

### v0.161.0-alpha (2026-11-13) — parcial

> El reporte financiero ya documenta pagos, gastos y cobros separados, así como la conciliación de facturas y OV; el corte general conserva versiones anteriores pendientes de revisión.

- Separar pagos PAYMENT, gastos EXPENSE y cobros COLLECTION en el resumen y sus detalles
- Mostrar total, importe pagado, saldo y estado de cada factura de compra
- Agregar filtros de facturas sin pagar, con pago parcial y pagadas
- Conciliar el total de las OVs con cobros aplicados y saldo por cobrar
- Calcular el neto como cobros menos pagos y gastos sin combinar sus columnas
- Documentar criterios, filtros y conciliaciones del reporte financiero

### v0.160.0-alpha (2026-11-13) — parcial

> Documentado el desglose en línea por categoría, artículo y OV paginada; el corte general conserva versiones anteriores pendientes.

- Agrupar los productos vendidos por categoría y artículo en el desglose multiempresa
- Abrir las OVs de cada artículo debajo de su fila, con paginación y enlaces directos
- Separar la vista jerárquica de productos de la vista por punto de venta
- Documentar la expansión de categorías, artículos y OVs en el reporte

### v0.159.0-alpha (2026-11-13) — parcial

> Documentado el reporte de productos vendidos por empresa, sus filtros, conciliación y Excel; el corte general conserva versiones anteriores pendientes.

- Agregar el reporte de productos vendidos por empresa, moneda, categoría y punto de venta
- Abrir los renglones paginados de cada grupo con enlaces a OV y productos
- Exportar resumen, desgloses, movimientos y conciliación en siete hojas de Excel
- Analizar solo órdenes de venta para no duplicar sus facturas y remitos
- Documentar filtros, estados, cálculo de importes y exportación del reporte

### v0.158.1-alpha (2026-11-13) — parcial

> Se actualizaron los resúmenes compactos y el comportamiento inicial de las categorías; el corte general conserva versiones anteriores pendientes.

- Compactar y diferenciar por color los resúmenes de productos vendidos y comprados
- Iniciar las categorías cerradas y reducir la altura de las filas de productos
- Documentar la apertura manual de categorías en el reporte de productos

### v0.158.0-alpha (2026-11-13) — parcial

> Se documentó el reporte por punto de venta; el corte general mantiene versiones anteriores pendientes.

- Filtrar el reporte por punto de venta por tipo documental y período
- Abrir documentos y artículos con cantidades desde cada punto de venta
- Separar importes por moneda y descontar notas de crédito
- Compactar el resumen y alinearlo con la estética del sistema
- Documentar el reporte de ventas por punto de venta

### v0.157.0-alpha (2026-11-12) — parcial

> Se documentaron el uso de datos de entrega en OV, la anulación de transferencias y la disponibilidad de conceptos bancarios; siguen pendientes versiones anteriores.

- Usar direcciones y contactos solo en la OV y conservar el texto ingresado al abrir la búsqueda
- Comprobar el saldo del destino antes de anular una transferencia y conservarla completada si no alcanza
- Mostrar solo conceptos bancarios habilitados en pagos y cobros y explicar cómo activarlos
- Habilitar o quitar conceptos bancarios para pagos y cobros desde sus tarjetas
- Actualizar las guías de entrega en OV, transferencias y conceptos bancarios

### v0.156.0-alpha (2026-11-12) — pendiente

- Buscar y reutilizar ubicaciones del catálogo desde una orden de venta
- Asociar ubicaciones existentes a la ficha del cliente con el permiso correspondiente
- Guardar direcciones y contactos reutilizables desde el modal de entrega
- Conservar los teléfonos agregados al sincronizar el formulario de entrega
- Excluir ubicaciones dadas de baja del buscador
- Documentar búsqueda, asociación y permisos de datos de entrega

### v0.155.1-alpha (2026-11-12) — parcial

> Se documentaron los estados de OV y la lectura de cobros; el corte general mantiene versiones anteriores pendientes.

- Incluir OV aprobadas y posteriores en ventas y saldo por cobrar
- Mostrar cobros completos, parciales y pendientes en el resumen y detalle
- Filtrar el resumen y los subreportes por uno o varios estados de OV
- Presentar los estados de OV en un selector múltiple junto a Moneda
- Desplazar la vista al subreporte al abrir un importe
- Actualizar los criterios de lectura de OV del reporte

### v0.155.0-alpha (2026-11-12) — pendiente

- Configurar qué empresas pueden usar cada caja o cuenta bancaria
- Usar fondos compartidos en pagos y cobros simples o mixtos
- Registrar vales de socios desde fondos compartidos
- Documentar configuración, uso y reversión de fondos compartidos

### v0.154.0-alpha (2026-11-12) — parcial

> Se documentó el nuevo reporte de resultado y composición; el corte general sigue pendiente de versiones anteriores.

- Agregar el reporte multiempresa de resultado y composición por cuenta contable
- Abrir la composición y los documentos desde cada importe del resumen
- Documentar los criterios y el alcance del reporte de resultado

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

### v0.178.2-alpha (2026-11-21) — sin cambios

> Se reemplazaron los diálogos nativos por modales y avisos del sistema; no cambiaron las reglas ni los pasos del circuito documentado.

- Unificar las confirmaciones de operaciones y contenedores en modales del sistema
- Mostrar la validación de cotización dentro del modal de asociación de documentos

### v0.174.1-alpha (2026-11-20) — sin cambios

> Solo se reorganiza visualmente el formulario; no cambian los campos, el proceso ni la configuración documentada.

- Compactar y adaptar la distribución del formulario de operación

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
