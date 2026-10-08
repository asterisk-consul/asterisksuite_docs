---
title: Guía de implementación de Logística
description: Pruebas y capacitación de ventas, despachos, viajes, mantenimientos y cubiertas
sidebar:
  order: 2
---

## Objetivo

Esta guía ayuda al implementador a **probar** y **enseñar** los principales circuitos de logística:

1. Orden de Venta → Orden de Despacho → Remito → Factura.
2. Planificación independiente de la Orden de Despacho en un Viaje.
3. Órdenes y planes de mantenimiento.
4. Ciclo de vida de cubiertas.

La capacitación debe realizarse primero en una empresa de prueba, con datos identificables y sin mezclar operaciones reales.

## Preparación de la prueba

Antes de comenzar, verificar que existan:

- Un cliente y un proveedor/gomería.
- Un producto utilizado como tarifa, habilitado para ventas y con precio general.
- Un precio específico del producto para el cliente, si se desea probar esa condición.
- Un depósito y dos ubicaciones logísticas.
- Un vehículo activo, un chofer y posiciones de cubiertas configuradas.
- Un producto de compra que represente el modelo de cubierta.
- Tipos de documento y secuencias/puntos de venta habilitados para OV, remito y factura.

Usar nombres como `CLIENTE PRUEBA`, `TARIFA PRUEBA` y `CUB-TEST-001` facilita localizar y eliminar los datos después de la capacitación.

## Flujo comercial y logístico

### 1. Configurar la tarifa del cliente

1. Abrir **Productos** y editar el producto utilizado como tarifa.
2. En la pestaña de precios por contraparte, asociar el cliente e indicar un precio.
3. Guardar y comprobar que el valor figure en el listado y en el historial.

Resultado esperado: al seleccionar ese cliente en una venta, se propone su precio específico. Si no existe una relación vigente, se usa el precio general del producto.

### 2. Crear la Orden de Venta

1. Ir a **ERP → Ventas → Nueva Orden de Venta**.
2. Seleccionar el punto de venta/secuencia y el cliente de prueba.
3. Agregar el producto tarifa y verificar el precio sugerido.
4. Guardar y confirmar la orden.

Controles:

- El número debe pertenecer a la secuencia seleccionada.
- El punto de venta debe verse en el detalle y al volver a editar.
- Cliente, producto, cantidad y precio deben quedar guardados.
- Cambiar de secuencia al editar debe utilizar la numeración de la nueva secuencia sin dañar documentos anteriores.

### 3. Crear la Orden de Despacho

Desde el detalle de la OV confirmada, seleccionar **Crear Orden de Despacho**.

Resultado esperado:

- Se copian cliente, productos, cantidades y precios.
- La tarifa se muestra como producto y puede modificarse en el despacho.
- El total tarifario coincide con cantidad × precio.
- Volver a ejecutar la acción abre o reutiliza el vínculo correspondiente y no debe duplicar accidentalmente la operación.

Las órdenes antiguas que no tengan productos deben continuar mostrando sus tarifas históricas.

### 4. Probar las dos ramas independientes

Desde la Orden de Despacho se pueden ejecutar dos procesos distintos:

- **Planificación:** asignar la orden a un viaje desde el planificador de viajes.
- **Documentación comercial:** seleccionar **Crear / abrir remito**.

Una rama no debe bloquear a la otra. Esto permite emitir un remito aunque el cliente no utilice la planificación logística, o planificar el viaje antes de emitirlo.

### 5. Remito, entrega y facturación

1. Abrir el remito creado desde el despacho.
2. Verificar cliente, productos y cantidades.
3. Confirmar el remito y registrar su entrega según el circuito operativo.
4. Crear la factura desde el documento comercial correspondiente.

Resultado esperado:

- El remito conserva la trazabilidad con la OV y el despacho.
- Al quedar entregado, la Orden de Despacho se cierra o completa.
- Si todas las órdenes del viaje están completas, el viaje también queda completado.
- La factura conserva cliente, productos y valores comerciales.

### 6. Validar el panel y reportes

Abrir **Logística** y comprobar que los estados aparezcan en español. Revisar:

- Viajes por planificar.
- Despachos sin viaje.
- Despachos en viaje.
- Importe operativo abierto.
- Estado de las órdenes de despacho.

En reportes de choferes, validar que las tarifas provengan de los productos del despacho y que los registros históricos sigan calculándose.

## Flujo de mantenimiento

### Crear y ejecutar una orden

1. Ir a **Logística → Mantenimiento → Órdenes** y seleccionar **Nuevo Mantenimiento**.
2. Elegir el activo: vehículo o cubierta.
3. Completar categoría, tipo, prioridad, título, fecha programada, odómetro y costo estimado.
4. Guardar la orden.
5. En el detalle, agregar tareas, repuestos, mano de obra y servicios externos.
6. Recorrer los estados necesarios hasta **Completada**.

Estados disponibles: Pendiente, Programada, En progreso, Esperando repuestos, Esperando proveedor, Completada y Cancelada.

Controles:

- Cada cambio debe aparecer en el historial.
- Repuestos, mano de obra y servicios deben actualizar sus subtotales y el costo real.
- Si el vehículo queda indisponible, comprobar que esa condición se refleje en la operación y el dashboard.
- Antes de completar, registrar diagnóstico, solución, odómetro y costos reales cuando correspondan.

### Crear un plan preventivo

1. Ir a **Logística → Mantenimiento → Planes → Nuevo Plan**.
2. Elegir activo, categoría y tipo de mantenimiento.
3. Definir el intervalo por kilómetros, días, meses o fecha fija.
4. Agregar tareas predeterminadas y valores estimados.
5. Guardar y asociar el plan al activo de prueba.

Resultado esperado: el vencimiento debe calcularse según el intervalo y aparecer entre los próximos mantenimientos del dashboard.

## Flujo de cubiertas

### Alta e instalación

1. Ir a **Logística → Mantenimiento → Cubiertas → Nueva Cubierta**.
2. Seleccionar el producto/modelo y registrar un número de serie único.
3. Opcionalmente indicar proveedor, fecha, costo y depósito.
4. Guardar. La cubierta debe quedar **En stock**.
5. Desde el detalle seleccionar **Instalar**, elegir vehículo, posición y odómetro.

Resultado esperado: la cubierta queda **Instalada**, vinculada al vehículo y posición, y se registra el movimiento y el inicio del historial de posición.

### Operaciones a demostrar

- **Rotar:** cambiar la posición dentro del vehículo indicando el odómetro.
- **Retirar:** enviar a depósito, gomería o baja, registrando motivo y odómetro.
- **Reparar/Recapar:** indicar proveedor, costo, descripción y si corresponde a recapado.
- **Dar de baja:** registrar un motivo; es una acción final y debe utilizarse con cuidado.
- **Vender:** seleccionar cliente, precio y fecha.

Después de cada acción revisar estado, ubicación actual, kilómetros acumulados, movimientos, historial de posiciones y costos de reparación/recapado.

Estados de cubierta: En stock, Instalada, En reparación, Dada de baja y Vendida.

## Guion breve para capacitar usuarios

1. Explicar primero el objetivo del circuito completo y la diferencia entre documento comercial y planificación de viaje.
2. Ejecutar un caso normal de punta a punta sin detenerse en campos opcionales.
3. Repetir el caso dejando que el usuario opere mientras el implementador observa.
4. Mostrar una excepción: precio general sin cliente asociado, espera de repuestos o retiro de una cubierta.
5. Finalizar revisando dashboard, trazabilidad, historial y reportes.

## Lista de aceptación

- [ ] La secuencia elegida determina el número del documento.
- [ ] El precio específico del cliente se aplica y el general funciona como respaldo.
- [ ] El despacho copia correctamente cliente, productos, cantidades y precios.
- [ ] Viaje y remito pueden gestionarse de forma independiente.
- [ ] La entrega completa el despacho y, cuando corresponde, el viaje.
- [ ] Los estados y totales se reflejan en dashboard y reportes.
- [ ] Una orden de mantenimiento registra tareas, costos e historial de estados.
- [ ] Un plan preventivo calcula el próximo vencimiento.
- [ ] Una cubierta conserva serie, ubicación, vehículo, posición, movimientos y costos durante todo su ciclo.

Ante una diferencia, registrar empresa, usuario, fecha, identificadores de los documentos, estado esperado, estado obtenido y una captura antes de repetir la prueba.

## Ver También

- [Crear Producto](/configuracion/productos/crear-producto/): alta del producto tarifa usado en los circuitos de venta y logística.
