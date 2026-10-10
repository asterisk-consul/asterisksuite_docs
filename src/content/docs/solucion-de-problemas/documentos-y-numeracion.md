---
title: Documentos y numeración
description: Problemas frecuentes al emitir o confirmar documentos.
sidebar:
  order: 2
---

## No puedo confirmar un documento

- **Falta de stock**: en órdenes de venta y remitos, la política de disponibilidad puede **bloquear** la confirmación. Reponé stock o ajustá la política.
- **Control fiscal**: en remitos fiscales, el **CAI** faltante o vencido bloquea la confirmación. Registrá o renová la [autorización fiscal](/configuracion/impuestos/autorizaciones-fiscales/).
- **Ítems sin depósito**: los remitos requieren depósito de salida en cada ítem.

## El número no es el que esperaba

El número depende de la **secuencia** (tipo de documento + punto de venta). Verificá la [secuencia](/configuracion/documentos/secuencias/) y el punto de venta del documento.

## No puedo editar un documento

Los documentos **confirmados** no se editan. Se **avanzan de estado**, se **anulan** (según categoría) o se ajustan con **notas de crédito/débito**.

## El IVA no coincide

El IVA se calcula según la **condición del emisor y del receptor** y los **impuestos del producto**. Revisá la condición de IVA de la contraparte y la [configuración fiscal](/configuracion/impuestos/).

## La importación de un documento falla

Verificá las **columnas requeridas** del importador (por ejemplo, SKU/moneda/precio según el caso) y el formato de los datos.

## Ver también

- [Secuencias y tipos de documento](/configuracion/documentos/).
- [Remitos de venta](/procesos/ventas/remitos/).
