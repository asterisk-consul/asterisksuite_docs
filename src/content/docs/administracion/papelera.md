---
title: Papelera
description: Restaurar o eliminar definitivamente elementos dados de baja.
sidebar:
  order: 5
---

## Para qué sirve

El sistema usa **baja lógica**: cuando se elimina un elemento, no se borra físicamente sino que se marca como eliminado. La **Papelera** permite **restaurarlo** o **eliminarlo definitivamente**. Se accede desde **Configuración → Papelera** (`/settings/trash`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver papelera · Restaurar elementos · Eliminar permanentemente
- Owner tiene acceso por su rol. Los demás usuarios, incluidos Admin, necesitan los permisos correspondientes asignados en su empresa.
:::

## Cómo usar

1. Ir a **Papelera**.
2. Filtrar por **fecha** (últimos 7, 15, 30, 60 o 90 días; o todos) y por **entidad** (tipo de tabla: productos, documentos, etc.).
3. Buscar el elemento.
4. **Restaurar** (individual o masivo) o **Eliminar permanentemente**.

La tabla muestra el tipo de entidad, el registro, su estado, cuándo llegó a la Papelera y quién lo envió. Para comprobantes también presenta número, referencia y descripción; para otros registros muestra datos identificativos cuando están disponibles. La búsqueda admite nombre, CUIT, SKU, referencia, descripción, estado e ID.

También se puede enviar una parte interesada a la papelera desde el listado de **Terceros**: usar el ícono de papelera de la fila o seleccionar varias fichas y elegir la acción masiva. La baja pide confirmación y es reversible; no borra físicamente la ficha ni sus movimientos.

## Reglas y consideraciones

- **Restaurar** devuelve el elemento a su estado operativo.
- **Eliminar permanentemente** es **irreversible**.
- Un comprobante que nunca se confirmó puede llegar a la Papelera en estado **Borrador**. Si ya se confirmó, debe anularse primero y llegar con el estado terminal de anulación de su tipo. Los pagos activos y demás efectos que impidan anularlo deben resolverse desde su flujo antes de enviarlo a la Papelera.
- Un **saldo inicial de cuenta corriente** se puede eliminar definitivamente después de retirarlo desde la cuenta corriente, y solo si era el único movimiento activo de esa cuenta. Esto conserva el recálculo del saldo y limpia el asiento que ya fue dado de baja.
- Una factura, nota, remito u otro comprobante manual en estado **Borrador** o **Anulado** puede purgarse si se cargó por error, no tiene autorización fiscal, pagos, cadena documental ni relaciones operativas, y todos sus asientos de cuenta corriente están dados de baja. Al confirmar la eliminación, se borran los asientos inactivos sin alterar el saldo ya recalculado. El sistema pide confirmar que el registro no representa un comprobante real emitido o recibido. Los comprobantes con autorización fiscal o efectos activos, y los pagos/cobros, conservan su trazabilidad. Los números consumidos por una secuencia no se reutilizan.
- Si un **comprobante VALE** de la Papelera está asociado a un vale RRHH ya anulado pero conserva efectos pendientes, la fila indica **Limpieza pendiente** y ofrece **Completar limpieza**. El detalle enumera la causa: comprobante interno sin anular, saldo pagado pendiente, asiento activo de cuenta corriente, reversión de Tesorería faltante o una combinación. Si el movimiento original ya tiene su opuesto, no se agrega otro; si nunca hubo movimiento, Tesorería no se modifica. Los movimientos originales se conservan en el historial. Si hay un pago activo asociado, primero hay que anularlo. Después se puede volver a intentar la purga.
- Una parte interesada con documentos, pagos, cuentas corrientes, movimientos, datos de proveedor/cliente u otros registros asociados no se puede eliminar físicamente. Reasigná la historia a la ficha que se conservará; mientras tanto, la ficha puede permanecer en la Papelera y sus movimientos históricos se mantienen intactos.
- La papelera agrupa elementos de muchas entidades (productos, documentos, tipos, etc.).

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No encuentro el elemento | Filtro de fecha/entidad. | Ampliá el rango o cambiá la entidad. |
| No puedo restaurar | Faltan permisos. | Pedí el permiso "Restaurar elementos". |
| Eliminé algo por error | Se eliminó permanentemente. | No es recuperable; revisá copias de seguridad. |

## Ver también

- [Auditoría](/administracion/) — historial de cambios.
