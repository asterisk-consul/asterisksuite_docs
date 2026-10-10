---
title: Mantenimiento
description: Órdenes, planes preventivos y cubiertas.
sidebar:
  order: 7
---

## Para qué sirve

El módulo de **Mantenimiento** gestiona el mantenimiento de la flota y los activos: **órdenes**, **planes preventivos** y **cubiertas**. Se administra en **Logística → Mantenimiento** (`/logistica/mantenimiento`).

## Permisos necesarios

:::note[Permisos necesarios]
- Acceso al módulo de mantenimiento y sus operaciones (órdenes, planes, cubiertas).
:::

## Órdenes de mantenimiento

**Nueva orden** (`/logistica/mantenimiento/nueva`):

- **Activo**: Vehículo o Cubierta (y otros componentes: batería, motor, etc.).
- **Categoría**: Motor, Transmisión, Frenos, Suspensión, Dirección, Eléctrico, Refrigeración, Lubricación, Cubiertas, Carrocería, Iluminación, Acoplado u Otra.
- **Tipo**: Correctivo, Preventivo, Predictivo, Inspección o Programado.
- **Prioridad**: Crítica, Alta, Media, Baja.
- **Título**, **fecha programada**, **odómetro** y **costo estimado**.

En el detalle se agregan **tareas**, **repuestos**, **mano de obra** y **servicios externos**, y se recorre el ciclo de estados hasta **Completada** (Pendiente, Programada, En progreso, Esperando repuestos, Esperando proveedor, Completada, Cancelada).

## Planes preventivos

**Nuevo plan** (`/logistica/mantenimiento/planes/nuevo`):

- **Activo**, **categoría** y **tipo** de mantenimiento.
- **Intervalo**: por kilómetros, días, meses o fecha fija.
- **Tareas predeterminadas** y valores estimados.

El sistema calcula el **próximo vencimiento** y lo muestra entre los próximos mantenimientos.

## Cubiertas

**Nueva cubierta** (`/logistica/mantenimiento/cubiertas/nueva`):

- **Producto/modelo** y **número de serie** único.
- Proveedor, fecha, costo y depósito (opcional).

Operaciones: **Instalar** (vehículo, posición, odómetro), **Rotar**, **Retirar**, **Reparar/Recapar**, **Dar de baja** y **Vender**. Estados: En stock, Instalada, En reparación, Dada de baja y Vendida.

## Reglas y consideraciones

- Cada cambio queda en el **historial**.
- Si un vehículo queda **indisponible**, se refleja en la operación y el dashboard.
- Una cubierta conserva serie, ubicación, vehículo, posición, movimientos y costos durante su ciclo.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No puedo completar la orden | Faltan tareas/costos o está esperando repuestos. | Completá lo pendiente. |
| El plan no genera vencimiento | Falta intervalo. | Definí el intervalo. |
| Serie duplicada | Ya existe una cubierta con esa serie. | Usá otra serie. |

## Ver también

- [Flota](/procesos/logistica/flota/).
- [Implementación de Logística](/procesos/logistica/implementacion/).
