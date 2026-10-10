---
title: Importadores
description: Importar comprobantes y datos desde Excel.
sidebar:
  order: 5
---

## Para qué sirve

Los **importadores** permiten cargar datos y comprobantes desde **Excel**: ventas, compras y notas de crédito/débito. Se accede desde **Importadores** (`/importadores`) y **Data Import**.

## Permisos necesarios

:::note[Permisos necesarios]
- Ejecutar importaciones
- Importar documentos de venta · Importar documentos de compra
- Importar/Exportar productos y clientes/proveedores
:::

## Importadores disponibles

- **Ventas** (`/data-import/import-ventas`).
- **Compras** (`/data-import/import-compras`).
- **Notas de crédito** (`/data-import/import-nc`).
- **Notas de débito** (`/data-import/import-nd`).

## Cómo importar

1. Ir al importador correspondiente.
2. Descargar/usar la **plantilla** con las columnas requeridas.
3. Subir el archivo **Excel**.
4. El sistema valida cada fila y registra los errores.
5. Confirmar la importación; los registros válidos se cargan.

## Reglas y consideraciones

- Cada importador tiene **columnas obligatorias** (por ejemplo, SKU, moneda, importes).
- Las filas con error se informan y no se importan.
- La importación puede asociarse a contrapartes y productos existentes.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| Filas rechazadas | Datos faltantes o formato incorrecto. | Revisá la plantilla y los mensajes de error. |
| No encuentra el producto/cliente | No existe con ese código. | Crealo o corregí el SKU/código. |

## Ver también

- [Órdenes de compra](/procesos/compras/ordenes-de-compra/).
- [Ventas](/procesos/ventas/).
