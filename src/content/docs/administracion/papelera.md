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
:::

## Cómo usar

1. Ir a **Papelera**.
2. Filtrar por **fecha** (últimos 7, 15, 30, 60 o 90 días; o todos) y por **entidad** (tipo de tabla: productos, documentos, etc.).
3. Buscar el elemento.
4. **Restaurar** (individual o masivo) o **Eliminar permanentemente**.

También se puede enviar una parte interesada a la papelera desde el listado de **Terceros**: usar el ícono de papelera de la fila o seleccionar varias fichas y elegir la acción masiva. La baja pide confirmación y es reversible; no borra físicamente la ficha ni sus movimientos.

## Reglas y consideraciones

- **Restaurar** devuelve el elemento a su estado operativo.
- **Eliminar permanentemente** es **irreversible**.
- Los documentos solo se pueden eliminar definitivamente cuando están anulados y son **presupuestos u órdenes internas no fiscales**, o facturas sin efectos fiscales, pagos/cobros, asientos de cuenta corriente ni otras relaciones operativas. Los asientos de cuenta corriente se conservan aunque hayan sido revertidos; las facturas que requieren trazabilidad fiscal siguen protegidas. La validación se repite en el servidor al eliminar.
- Un **saldo inicial de cuenta corriente** se puede eliminar definitivamente después de retirarlo desde la cuenta corriente, y solo si era el único movimiento activo de esa cuenta. Esto conserva el recálculo del saldo y limpia el asiento que ya fue dado de baja.
- Las facturas con efectos fiscales/contables, las notas, los remitos y los pagos/cobros conservan su trazabilidad y solo se pueden restaurar. Los números consumidos por una secuencia no se reutilizan al eliminar un presupuesto u orden que cumpla las condiciones.
- Una parte interesada con documentos, pagos u otros registros relacionados no se puede eliminar físicamente hasta reasignar esas relaciones a la ficha que se conservará. Mientras tanto, puede permanecer en la Papelera y sus movimientos históricos se mantienen intactos.
- La papelera agrupa elementos de muchas entidades (productos, documentos, tipos, etc.).

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No encuentro el elemento | Filtro de fecha/entidad. | Ampliá el rango o cambiá la entidad. |
| No puedo restaurar | Faltan permisos. | Pedí el permiso "Restaurar elementos". |
| Eliminé algo por error | Se eliminó permanentemente. | No es recuperable; revisá copias de seguridad. |

## Ver también

- [Auditoría](/administracion/) — historial de cambios.
