---
title: Tesorería
description: Cajas, bancos, cheques, tarjetas y cuentas corrientes.
sidebar:
  order: 3
---

## Para qué sirve

**Tesorería** administra el dinero de la empresa: cajas (efectivo), cuentas bancarias, cheques, tarjetas, inversiones y cuentas corrientes. Incluye el registro de **pagos y cobros**.

Los movimientos de caja o banco originados al confirmar vales de socios también aparecen en **Pagos y Cobros**. Los vales anulados se consultan activando **Mostrar anulados**; su fila conserva el registro original y permite ver el medio y la cuenta afectados, sin repetir el movimiento de reversión.

## Pendientes del dashboard

En **Tesorería → Tablero** (`/erp/treasury/dashboard`), **Pendientes de tesorería** reemplaza el listado repetido de próximos cheques. Muestra hasta cinco registros por grupo, ordenados por fecha desde el más antiguo:

| Grupo | Qué incluye | Acción |
|---|---|---|
| **Anticipos y créditos por aplicar** | Pagos/cobros a cuenta confirmados o pagados con saldo todavía disponible, incluidos créditos internos de saldos iniciales habilitados. Se descuenta lo ya aplicado. | **Aplicar** abre el anticipo y su selector de documentos, si tenés permiso para actualizar pagos; en caso contrario permite consultar el registro. |
| **Pagos y cobros en borrador** | Registros activos que todavía no fueron confirmados. | **Continuar carga** abre el borrador. |
| **Obligaciones próximas o vencidas** | Obligaciones sin pago asociado, vencidas o con vencimiento dentro de los próximos siete días, que siguen planificadas, en revisión o listas para pagar. | **Revisar** abre la obligación o su documento relacionado para continuar el circuito. |
| **Transferencias pendientes** | Transferencias de origen registradas y todavía pendientes de confirmar. | **Revisar** abre su detalle. |

Las cantidades y los totales abarcan todo el grupo, aunque se vean solo cinco registros. Los importes se separan por moneda y las obligaciones con importe estimado se identifican expresamente. Cada grupo representa un estado distinto de trabajo; sus totales no forman un total de pagos realizados. **Ver todos** abre el listado correspondiente con el mismo grupo filtrado, y **Quitar filtro** permite volver al listado completo.

Los grupos sin pendientes se ocultan. Si no hay pendientes visibles, se indica expresamente. **Actualizar** vuelve a consultar el panel; si falla la carga, se muestra un aviso para reintentar.

Se requiere `payments.read` para anticipos, borradores y obligaciones, y `cash_box_transfers.read` para transferencias. Los usuarios de empresa con rol `USER` ven sus propios pagos/cobros y transferencias, como en sus listados; las obligaciones siguen el alcance de Servicios e impuestos. `ADMIN` conserva las restricciones de los permisos RBAC y `OWNER` puede consultar todos los grupos. Abrir una acción no confirma ni aplica importes automáticamente: se conservan las validaciones y permisos del formulario de destino.

## Componentes

| Componente | Para qué |
|---|---|
| **Cajas** | Movimientos de efectivo por caja y sesión, con ingresos y egresos manuales auditables. |
| **Bancos** | Cuentas bancarias propias, movimientos y gastos bancarios. |
| **Transferencias** | Envíos entre cajas y bancos, con seguimiento del origen y destino. |
| **Cheques** | Cheques emitidos y recibidos; al depositar o cobrar se elige banco o caja y todo queda con movimientos vinculados. |
| **Tarjetas** | Tarjetas corporativas, cobros y liquidaciones. |
| **Cuentas corrientes** | Saldos por cliente y proveedor. |
| **Inversiones** | Colocaciones financieras. |
| **Impuestos y servicios** | Obligaciones de tesorería. |
| **Reportes** | Libro IVA, movimientos, consolidados y más. |

## Páginas de esta sección

- [Cajas](/procesos/tesoreria/cajas/)
- [Bancos](/procesos/tesoreria/bancos/)
- [Transferencias entre cajas y bancos](/procesos/tesoreria/transferencias/)
- [Cheques](/procesos/tesoreria/cheques/)
- [Tarjetas](/procesos/tesoreria/tarjetas/)
- [Inversiones](/procesos/tesoreria/inversiones/)
- [Impuestos y servicios](/procesos/tesoreria/impuestos-y-servicios/)
- [Cuentas corrientes](/procesos/tesoreria/cuentas-corrientes/)
- [Reportes de tesorería](/procesos/tesoreria/reportes/)
- [Capturas](/procesos/tesoreria/capturas/)
- [Archivos adjuntos](/procesos/tesoreria/archivos-adjuntos/)

## Permisos necesarios

:::note[Permisos necesarios]
Cada submódulo tiene sus permisos. Por ejemplo:
- Cajas: Ver cajas · Crear cajas · Editar cajas · Eliminar cajas · Abrir sesión de caja · Cerrar sesión de caja · Registrar y anular movimientos manuales de caja.
- Bancos: Ver cuentas bancarias · Crear cuentas bancarias · Editar cuentas bancarias · Eliminar cuentas bancarias.
- Cheques: Ver/Crear/Editar/Eliminar cheques · Depositar cheques · Rechazar cheques.
- Pagos: Ver pagos · Crear pagos · Editar pagos · Confirmar pagos · Anular pagos.
:::

## Ver también

- [Cobros](/procesos/ventas/cobros/) y [Pagos](/procesos/compras/pagos/).
- [Monedas y cotizaciones](/configuracion/monedas/).
