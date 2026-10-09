---
title: Autorizaciones fiscales
description: Registrar CAI/CAE por tipo de documento y punto de venta, con control de vencimiento.
sidebar:
  order: 4
---

## Para qué sirve

Las **autorizaciones fiscales** registran el **CAI/CAE** de los comprobantes, por **tipo de documento** y **punto de venta**, con su **vigencia** y **rango de numeración**. Se administran en **Ajustes → Autorizaciones fiscales** (`/settings/fiscal-authorizations`).

> Es necesario registrar el CAI antes de confirmar remitos fiscales.

## Datos de una autorización

- **Tipo**: CAI, CAE o CAEA.
- **Código**.
- **Tipo de documento** y **secuencia** (punto de venta).
- **Vigencia**.
- **Rango de numeración**.

## Estados

| Estado | Significado |
|---|---|
| **Vigente** | En uso y dentro de vigencia. |
| **Próxima a vencer** | Cerca de su vencimiento. |
| **Futura** | Vigencia todavía no iniciada. |
| **Vencida** | Pasó su vencimiento. |
| **Reemplazada** | Fue reemplazada por otra. |
| **Anulada** | Anulada. |

## Alertas y política de control

La política de control ante autorizaciones vencidas o por vencer puede ser:

- **Bloquear confirmación**.
- **Advertir y permitir**.
- **Sin control**.

Desde **Configurar alertas** se ajustan las notificaciones y la política.

## Cómo registrar una autorización

1. Ir a **Autorizaciones fiscales** y presionar **Nueva autorización**.
2. Elegir el **tipo**, completar el **código**, el **tipo de documento** y la **secuencia** (punto de venta).
3. Definir **vigencia** y **rango**.
4. Guardar.

El listado se puede **buscar** por CAI, remito, punto de venta, serie o estado, y filtrar por pestañas de tipo de documento.

## Reglas y validaciones

- La autorización se asocia a un **tipo de documento** y una **secuencia**.
- El estado se deriva de la **vigencia**.
- La **política de control** determina si se puede confirmar un comprobante sin autorización válida.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| No se puede confirmar un remito fiscal | Falta CAI o está vencido. | Registrá o renová la autorización. |
| La autorización aparece "Vencida" | Pasó su fecha de vigencia. | Cargá una nueva autorización vigente. |
| No se puede eliminar | La autorización está en uso. | Reemplazala o anulala según corresponda. |

## Ver también

- [Tipos de documento](/configuracion/documentos/tipos-de-documento/).
- [Reglas y alícuotas](/configuracion/impuestos/reglas-y-alicuotas/).
