---
title: Guiones de demostración — versiones 0.83 a 0.93
description: Recorridos breves para presentar las novedades incorporadas entre las versiones 0.83.0-alpha y 0.93.1-alpha.
sidebar:
  order: 1
---

Estos guiones están pensados para demostraciones cortas. Cada uno dura entre uno y tres minutos y se concentra en el valor visible para el usuario.

## Preparación general

Antes de la presentación, usar una empresa de prueba con:

- al menos dos empresas asociadas al usuario;
- documentos de compra y venta con distintos estados;
- movimientos de caja y banco;
- productos con stock y órdenes de venta;
- vendedores con comisiones;
- permisos para reportes, tesorería y administración.

Conviene abrir previamente las pantallas que se mostrarán y usar un período con datos conocidos.

## 0.83.0 — Reportes gerenciales multiempresa

**Objetivo:** mostrar que la dirección puede consultar y exportar información de varias empresas desde un mismo lugar.

1. Abrir **Reportes gerenciales → Consolidado**.
2. Seleccionar dos empresas y un período con actividad.
3. Recorrer brevemente las vistas de tesorería, documentos e inventario y logística.
4. Señalar que estados, movimientos y unidades están expresados en español.
5. Exportar una vista a Excel, CSV o PDF.

**Frase de cierre:** “La información puede analizarse consolidada o por empresa y exportarse sin reconstruir el reporte manualmente”.

## 0.84.0 — Duplicación, numeración y comisiones

**Objetivo:** demostrar mejoras operativas del circuito administrativo.

1. En el listado de ventas o compras, duplicar una orden o factura existente.
2. Mostrar que la copia queda como borrador, recibe una numeración nueva y conserva los datos operativos sin arrastrar datos fiscales ni identificadores del original.
3. Abrir la configuración de una secuencia y mostrar el próximo número configurable y sus validaciones.
4. Ir a **RR. HH. → Comisiones**, abrir una venta con varios vendedores y revisar participación, devengado, liquidado y pendiente.
5. Abrir **Reportes → Inventario y logística** y señalar total facturado e importe cobrado por OV.

**Frase de cierre:** “Se reducen tareas repetitivas sin perder control sobre numeración, trazabilidad ni liquidaciones”.

## 0.85.0 — Acceso directo a ventas y compras

**Objetivo:** mostrar una corrección de estabilidad, no una función nueva.

1. Copiar la URL del listado de ventas y abrirla en una pestaña nueva con la sesión activa.
2. Repetir la prueba con el listado de compras.
3. Confirmar que ambas pantallas cargan directamente sin error 401 ni necesidad de volver a navegar desde el menú.

**Frase de cierre:** “Los listados autenticados ahora funcionan correctamente incluso al entrar por un enlace directo o recargar la página”.

## 0.86.0 — Mis pendientes

**Objetivo:** enseñar cómo cada usuario encuentra rápidamente lo que requiere su intervención.

1. En el inicio, localizar la tarjeta **Mis pendientes**.
2. Abrir la bandeja y aplicar búsqueda o filtros.
3. Entrar en un documento pendiente y regresar.
4. Abrir una captura pendiente y mostrar que el sistema lleva directamente a su ficha.
5. Si hay alertas de reposición, revisar que disponibilidad y faltantes se muestren correctamente.

**Frase de cierre:** “El usuario comienza su jornada desde una bandeja personal y llega al registro que debe resolver con un solo acceso”.

## 0.87.0 — Permisos por rol

**Objetivo:** mostrar una administración de permisos más clara.

1. Abrir **Administración → Roles y permisos** y seleccionar un rol de prueba.
2. Buscar un permiso por nombre.
3. Expandir y contraer la advertencia sobre permisos generales de documentos.
4. Recorrer los grupos y señalar la separación entre buscador, advertencias, permisos y barra de guardado.
5. Modificar un permiso de prueba y guardar.

**Frase de cierre:** “La configuración conserva el mismo nivel de control, pero resulta más fácil de revisar y enseñar”.

## 0.88.0 — Tablas de reportes

**Objetivo:** demostrar consistencia y flexibilidad en reportes extensos.

1. Abrir un reporte con varias columnas.
2. Usar búsqueda, filtros, ordenamiento y selector de columnas.
3. Cambiar la vista multiempresa entre tabla conjunta y tablas separadas.
4. En la tabla conjunta, señalar la identificación visual de cada empresa.
5. Reducir el ancho de la ventana y mostrar el desplazamiento horizontal dentro de la tarjeta.

**Frase de cierre:** “Todos los reportes se consultan con las mismas herramientas y las tablas anchas ya no rompen la pantalla”.

## 0.89.0 — Tipos de documento y diseñador de reportes

**Objetivo:** presentar la configuración corregida y anticipar el diseñador sin ofrecerlo todavía como función productiva.

1. Crear un tipo de documento de prueba e ingresar una letra AFIP válida.
2. Intentar explicar las validaciones de código duplicado y longitud máxima.
3. Preparar una o más secuencias en el mismo modal y guardar el tipo.
4. Confirmar que las secuencias quedaron vinculadas.
5. Si se dispone de un entorno interno habilitado, mostrar el diseñador de reportes como **vista preliminar**, combinando un indicador, una tabla y un gráfico. No incluirlo en la capacitación operativa todavía.

**Frase de cierre:** “La configuración documental queda resuelta en un único flujo; el diseñador continúa en validación antes de exponerse en el menú”.

## 0.90.0 — Estabilidad y memoria del backend

**Objetivo:** explicar una mejora técnica sin convertir la demostración en una prueba de interfaz.

1. Mostrar el panel de salud o los logs del entorno de prueba antes y después de varias ejecuciones programadas.
2. Señalar que cotizaciones, cheques y autorizaciones fiscales reutilizan los clientes Prisma en lugar de abrir pools repetidamente.
3. Consultar stock con una reserva manual vencida y comprobar que se revise bajo demanda.
4. Explicar que la actualización diaria de cotizaciones se ejecuta a las 15:00 de Argentina, salvo configuración diferente.
5. Si está disponible el diagnóstico, diferenciar heap de Node y memoria RSS nativa o mapeada.

**Frase de cierre:** “La versión mejora la estabilidad de procesos prolongados y permite diagnosticar la memoria real del contenedor con mayor precisión”.

## 0.91.0 — Tesorería multiempresa y retenciones

**Objetivo:** mostrar el nuevo circuito operativo entre empresas y la gestión fiscal asociada a pagos.

1. Desde una caja o banco, iniciar una transferencia hacia otra empresa.
2. Seleccionar fondo de origen, empresa destino y fondo receptor.
3. Guardar y mostrar el registro espejo en la empresa receptora.
4. Si la operación queda incompleta, enseñar la acción de reintento desde el listado o detalle.
5. Abrir **Retenciones** y diferenciar practicadas a depositar de sufridas, revisando período, totales y estado de VEP.
6. Crear o editar un pago y asociar retenciones y cargos bancarios.

**Frase de cierre:** “La transferencia conserva trazabilidad en ambas empresas y los pagos concentran retenciones y costos bancarios en una sola operación”.

## 0.92.0 — Nuevo formulario de transferencias

**Objetivo:** mostrar la mejora visual del flujo presentado en la versión anterior.

1. Abrir el modal de nueva transferencia.
2. Señalar los bloques claramente diferenciados de **Origen** y **Destino**.
3. Mostrar que el selector de empresa destino solo aparece cuando el usuario tiene más de una empresa disponible.
4. Completar los datos sin confirmar todavía.
5. Leer la aclaración: el registro queda pendiente y los saldos cambian recién al confirmar la transferencia.

**Frase de cierre:** “La pantalla deja claro de dónde salen los fondos, adónde llegan y en qué momento impactan los saldos”.

## 0.93.0 — VEP de retenciones e imputaciones fiscales

**Objetivo:** mostrar cómo Tesorería concentra el pago y seguimiento de obligaciones vinculadas a retenciones.

1. Abrir **Tesorería → Servicios e impuestos** y localizar un VEP de retenciones entre las obligaciones pendientes.
2. Abrir su detalle y revisar las retenciones incluidas, el período y el importe total.
3. Registrar el pago y comprobar que queda vinculado al VEP original.
4. Consultar el historial de pagos desde la misma sección.
5. Abrir una retención sufrida, registrar una imputación fiscal parcial y mostrar la acción de reversión.
6. Usar búsqueda, filtros, ordenamiento y paginación en las tablas de obligaciones y VEP.

**Frase de cierre:** “El circuito conecta la obligación fiscal, su composición y el pago sin perder el vínculo con las retenciones originales”.

## 0.93.1 — Operaciones protegidas contra envíos repetidos

**Objetivo:** demostrar mejoras de claridad y seguridad operativa en Tesorería, pagos, stock y documentos.

1. Abrir un formulario de pago y señalar la separación entre movimiento, documentos y medio de pago.
2. Seleccionar varios cheques y comprobar que conservan el orden elegido.
3. Guardar una operación y observar que los controles quedan bloqueados mientras se procesa, evitando un segundo envío accidental.
4. Repetir la observación en una operación sensible disponible, como una transferencia, un movimiento de stock o la confirmación de un documento.
5. En **Servicios e impuestos**, aplicar filtros y verificar que las tablas anchas se desplazan dentro de su tarjeta.
6. Aclarar que **Tarjetas** e **Inversiones** están temporalmente fuera del menú mientras se revisa su recorrido; no deben incluirse en la capacitación operativa.

**Frase de cierre:** “Las operaciones críticas comunican mejor su estructura y quedan protegidas frente a dobles clics o reenvíos simultáneos”.

## Cierre recomendado de la presentación

Terminar con tres ideas:

1. Los reportes multiempresa permiten mirar el negocio completo sin perder el detalle de cada sociedad.
2. Las bandejas, tablas y formularios reducen pasos y hacen más visibles las acciones pendientes.
3. Las mejoras técnicas de autenticación, memoria e idempotencia sostienen los nuevos circuitos operativos sin sacrificar trazabilidad.

