---
title: Notificaciones
description: Avisos de asignaciones y alertas operativas de la empresa.
sidebar:
  order: 4
---

## Campana de notificaciones

La campana de la barra superior reúne avisos dirigidos al usuario y alertas de la empresa. Al abrir u ocultar un aviso, desaparece hasta la próxima medianoche de Argentina. Si sigue pendiente, vuelve a aparecer al día siguiente; si se resolvió, deja de mostrarse. El descarte se conserva por usuario y empresa, incluso si cerrás la sesión o cambiás de dispositivo. El botón **Eliminar** quita definitivamente un aviso dirigido a vos.

El descarte persistente requiere aplicar la migración `20261030_notification_dismissals` a cada base de datos de empresa.

Las asignaciones generan un aviso con el nombre de quien asignó, el registro relacionado y un acceso directo. Actualmente se notifican las asignaciones de capturas, órdenes y tareas de mantenimiento, y pedidos de venta. Podés abrirlo, ocultarlo hasta mañana o eliminarlo definitivamente. **Ocultar avisos nuevos hasta mañana** aplica el mismo plazo a todas las notificaciones nuevas.

## Alertas de la empresa

La campana también puede mostrar autorizaciones fiscales próximas a vencer o agotar su numeración, obligaciones de impuestos y servicios que están por vencer o vencidas, cuotas de tarjetas corporativas próximas a vencer y liquidaciones de cobros con tarjeta pendientes. Estas alertas se consultan al abrir la campana; no dependen de una tarea periódica del servidor. Al abrir una alerta operativa se oculta hasta el día siguiente. Las obligaciones y los vencimientos de tarjeta vuelven a aparecer si siguen pendientes; dejan de mostrarse cuando cambia su estado.

También se muestran productos que llegaron o bajaron del punto de reposición configurado, y cuentas corrientes de clientes o proveedores con saldo pendiente sin movimientos durante 30 días o más. El aviso de stock usa el disponible de cada depósito físico y solo considera políticas activas con punto de reposición mayor a cero. El aviso de cuenta corriente usa la fecha del último movimiento; no equivale a la fecha de vencimiento de una factura. Los saldos se expresan en la moneda base de la empresa.

Estas alertas se consultan al abrir la campana y llevan al módulo correspondiente. Requieren `stock.read` para reposición y `treasury.current_accounts.read` para saldos. Se actualizan al corregir el stock o registrar un movimiento en la cuenta corriente. Los cheques pendientes o confirmados también generan un aviso preventivo en la campana durante los dos días previos al vencimiento; al llegar la fecha, el aviso pasa al grupo de cheques que requiere una acción. Ambos abren la cartera filtrada. Los recordatorios desaparecen cuando el cheque se resuelve o sale del período de aviso.

Cada alerta respeta los permisos del módulo de origen. Si no tenés acceso a Tesorería, tarjetas o autorizaciones fiscales, la campana no muestra las alertas de esa área.

## Canales disponibles

Los avisos se muestran dentro de Asterisk Suite. WhatsApp puede enviar las asignaciones de órdenes de venta al usuario asignado y resúmenes operativos a destinatarios configurados por la empresa.

### Activar WhatsApp

1. El administrador puede precargar el teléfono internacional (por ejemplo, `+54911XXXXXXXX`) al crear o editar el usuario. El número queda pendiente: el titular debe entrar a **Configuración → Notificaciones** y aceptar los avisos para habilitarlo. También puede cargar o cambiar su propio número desde allí.
2. Un **OWNER** o **ADMIN** entra a **Configuración → Reportes por WhatsApp → Avisos operativos**. Desde ahí activa el canal y elige usuarios habilitados para saldos de clientes, saldos de proveedores y cheques.
3. El backend debe tener configurados `OPENWA_BASE_URL`, `OPENWA_API_KEY`, `OPENWA_SESSION_ID` y `WHATSAPP_NOTIFICATIONS_ENABLED=true`.

Las OV asignadas se envían directamente a la persona responsable con un enlace absoluto que usa el subdominio de la empresa. El mensaje separa en líneas el número de OV, el cliente y la referencia para facilitar su lectura; también indica que se puede buscar por referencia o número si hace falta. Cuando la orden alcanza las condiciones configuradas para quedar **lista para entrega** (por ejemplo, el porcentaje de pago requerido y, si corresponde, una factura emitida), también se avisa a su responsable con el mismo formato. El aviso de disponibilidad se genera al pasar de pendiente a lista; no se repite en cada actualización de la orden. Ambos avisos usan la categoría **Asignaciones** y llegan al número habilitado del responsable.

Los saldos de clientes y proveedores se resumen cada día a las 09:00 cuando tienen saldo positivo y llevan 30 días o más sin movimientos; esto mide antigüedad de cuenta y no representa una fecha de vencimiento de factura. Los cheques próximos a vencer se avisan dentro de los dos días previos y los vencidos pendientes se recuerdan diariamente. Estos resúmenes solo se envían a las personas configuradas para cada categoría.

Los avisos se agrupan por destinatario durante la ventana configurada. La cola envía un mensaje por vez y respeta una pausa mínima de 15 segundos entre mensajes para no disparar muchos avisos juntos. Si un usuario no tiene número válido o no aceptó WhatsApp, no recibe mensajes aunque esté seleccionado en una lista.

La configuración y la cola operativa requieren las tablas de WhatsApp Notifications del esquema público. Aplicá la migración del backend antes de activar esta función.

## Problemas frecuentes

| Síntoma | Causa posible | Qué revisar |
|---|---|---|
| No aparece una asignación | La asignación no se completó o fue dirigida a otro usuario. | Revisá el responsable del registro y volvé a abrir la campana. |
| No llega el WhatsApp de una OV | Puede estar desactivado `WHATSAPP_NOTIFICATIONS_ENABLED`, faltar la migración de la cola, o no estar habilitados el canal, **Asignaciones** o el consentimiento del usuario. | Revisá el estado de avisos operativos en **Configuración → WhatsApp**, el teléfono y consentimiento del responsable, y los logs del backend para ver si el aviso fue omitido o quedó en reintento. |
| No veo avisos fiscales o de Tesorería | El usuario no tiene acceso al módulo o no hay alertas vigentes. | Revisá los permisos de la empresa y el registro asociado. |
| La campana no se actualiza | Los avisos se consultan al abrirla. | Cerrá y volvé a abrir la campana. |

## Ver también

- [Impuestos y servicios](/procesos/tesoreria/impuestos-y-servicios/).
- [Tarjetas](/procesos/tesoreria/tarjetas/).
- [Autorizaciones fiscales](/configuracion/impuestos/autorizaciones-fiscales/).
