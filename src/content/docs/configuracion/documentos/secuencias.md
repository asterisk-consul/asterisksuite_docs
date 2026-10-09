---
title: Secuencias de numeración
description: Cómo se numera cada comprobante dentro de un punto de venta.
sidebar:
  order: 2
---

## Para qué sirve

Las **secuencias de numeración** controlan el número de cada comprobante. Cada **tipo de documento** mantiene su propia numeración dentro de un **punto de venta**, para no mezclar contadores.

Se administran en **Secuencias de Numeración** (`/erp/settings/document-sequences`). El acceso requiere ser **OWNER** o **ADMIN**.

## Campos

- **Nombre** (ej. "Factura A - Punto 1").
- **Punto de venta** (ej. `0001`).
- **Prefijo** (ej. A, B, C).
- **Rango inicio** y **Rango fin**.
- **Numeración automática** (o manual).
- **Tipo de documento** asociado.

Cada tarjeta muestra además el número **inicio**, **actual** y **fin** de la serie.

## Cómo crear una secuencia

1. Ir a **Secuencias de Numeración** y presionar **Nueva secuencia**.
2. Completar **Nombre**, **Punto de venta**, **Prefijo** (opcional), **Rango inicio/fin** y, opcionalmente, desmarcar **Numeración automática**.
3. Elegir el **Tipo de documento** (una serie pertenece a un solo tipo).
4. Guardar.

## Búsqueda y filtros

Se puede **buscar** por nombre, punto de venta o documento asociado, y filtrar con las **pestañas por tipo de documento**.

## Cómo editar o eliminar

- **Editar**: presionar el ícono de edición en la tarjeta.
- **Eliminar**: presionar el ícono de papelera y confirmar.

## Reglas y validaciones

- **Nombre**, **Punto de venta** y **Tipo de documento** son obligatorios.
- Una serie pertenece a **un solo tipo** para no mezclar contadores.
- Se puede **repetir el punto de venta** en otra serie si corresponde a un tipo documental diferente.
- El número del documento se toma del **rango** de la secuencia.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| El número no corresponde al punto de venta | La secuencia elegida no es la correcta. | Verificá el tipo y punto de venta de la serie. |
| No puedo guardar | Falta nombre, PV o tipo de documento. | Completá los campos obligatorios. |
| Se agotó la numeración | Se alcanzó el rango fin. | Ampliá el rango de la secuencia. |

## Ver también

- [Tipos de documento](/configuracion/documentos/tipos-de-documento/).
