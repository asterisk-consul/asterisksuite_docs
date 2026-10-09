---
title: Secuencias y tipos de documento
description: Comprobantes del sistema y su numeración por punto de venta.
sidebar:
  order: 5
---

## Para qué sirve

- Los **tipos de documento** definen los comprobantes que maneja el sistema: facturas, notas de crédito/débito, órdenes, presupuestos, recibos y remitos, con su comportamiento contable, fiscal y de stock.
- Las **secuencias de numeración** definen cómo se numera cada comprobante dentro de un **punto de venta**.

## Tipos de documento

Se administran en **ERP → Configuración → Tipos de Documento** (`/erp/settings/document-types`).

## Secuencias de numeración

Se administran en **ERP → Configuración → Secuencias de Numeración** (`/erp/settings/document-sequences`). Cada tipo de comprobante mantiene su propia numeración dentro de un punto de venta.

## Permisos necesarios

:::note[Permisos necesarios]
- Tipos de documento: Ver tipos de documento · Crear tipos de documento · Editar tipos de documento · Eliminar tipos de documento
- Secuencias: Ver secuencias de documento · Crear secuencias de documento
- La pantalla de Secuencias requiere ser **OWNER** o **ADMIN** de la empresa.
:::

## Páginas de esta sección

- [Tipos de documento](/configuracion/documentos/tipos-de-documento/)
- [Secuencias de numeración](/configuracion/documentos/secuencias/)

## Ver también

- [Configuración inicial de la empresa](/primeros-pasos/configuracion-inicial-empresa/): al crear la empresa se cargan tipos y secuencias base.
