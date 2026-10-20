---
title: Reportes gerenciales
description: Análisis multiempresa con vistas consolidadas y específicas, y exportación a PDF, Excel y CSV.
sidebar:
  order: 1
---

## Para qué sirve

El módulo de **Reportes gerenciales** permite analizar una o varias empresas del mismo grupo en un **período común**, con vistas específicas por área y exportación a PDF, Excel y CSV agrupada por empresa. Se accede desde **Reportes** en el menú del ERP.

A diferencia de los [reportes de tesorería](/procesos/tesoreria/reportes/), este módulo es **multiempresa**: reúne la información de todas las empresas asociadas a tu usuario sin tener que cambiar de empresa.

## Permisos necesarios

:::note[Permisos necesarios]
- Ver reportes de tesorería (`treasury.reports.read`) — el mismo permiso que habilita el menú **Reportes**.
- Además, el backend valida que cada empresa seleccionada esté asociada a tu usuario; no se requiere un permiso adicional por empresa ni para exportar.
:::

## Para quién es

- Dueños y gerentes con varias empresas del grupo que necesitan una visión unificada.
- Responsables de tesorería que quieren ver bancos, cajas y cheques de todas las empresas juntos.
- Responsables comerciales que siguen clientes, proveedores, documentos de compra y de venta.
- Equipos de operaciones que revisan órdenes de venta por artículo y movimientos de stock.

## Reportes disponibles

| Menú | Vista | URL | Qué muestra |
|---|---|---|---|
| **Consolidado de empresas** | `consolidado` | `/erp/reports/consolidated` | Indicadores globales, comparativo por empresa y detalle por área. |
| **Clientes** | `clientes` | `/erp/reports/consolidated?view=customers` | Cobros, cuentas de clientes con saldo y documentación comercial. |
| **Proveedores** | `proveedores` | `/erp/reports/consolidated?view=suppliers` | Pagos, deuda, obligaciones del período y documentos de compra. |
| **Empleados y socios** | `rrhh` | `/erp/reports/consolidated?view=hr` | Personas, vales, retiros y saldos pendientes. |
| **Bancos, cajas y cheques** | `tesorería` | `/erp/reports/consolidated?view=treasury` | Saldos, aperturas, variaciones y movimientos del período. |
| **Documentos** | `documentos` | `/erp/reports/consolidated?view=documents` | Documentos de compra y venta agrupados por tipo y estado. |
| **Inventario y logística** | `inventario` | `/erp/reports/consolidated?view=inventory` | Órdenes de venta por artículo y movimientos de stock. |

Todas las vistas comparten la misma pantalla: al elegir una opción del menú se cambia el parámetro `view` de la URL y el contenido del reporte.

## Cómo usarlo

1. **Elegí las empresas**: se muestran sólo las empresas asociadas a tu usuario, con su dominio y tu rol. Todas vienen seleccionadas; podés quitar las que no quieras. Cada reporte acepta entre 1 y 20 empresas.
2. **Definí el período**: las fechas *Desde* y *Hasta* se aplican a todas las empresas por igual (por defecto, el mes en curso).
3. **Seleccioná la vista** desde el menú **Reportes**.
4. **Generá el reporte** con el botón **Generar reporte**.
5. **Exportá** la vista seleccionada con **PDF**, **Excel** o **CSV**; el archivo incluye todas las empresas elegidas, agrupadas por empresa.

## Criterios de lectura

- **Los saldos son actuales**: cuentas corrientes, bancos, cajas y cheques reflejan el saldo vigente al momento de generar el reporte.
- **Los movimientos son del período**: ventas, compras, cobros, pagos y movimientos de tesorería se calculan por fecha de operación dentro del período elegido.
- Saldos actuales y movimientos del período son **magnitudes distintas**: no deben sumarse entre sí ni interpretarse automáticamente como resultado económico.
- **Los importes se presentan separados por moneda** para evitar conversiones incorrectas; cuando un documento tiene cotización registrada, se muestra convertido a ARS.
- Los documentos en borrador y los anulados **no integran los totales**: se informan por separado (p. ej. *Pagos y cobros por estado* y las alertas de seguimiento).
- Las tablas extensas se desplazan horizontal y verticalmente sin cortar columnas ni bloquear el contenido inferior.

## Exportación

- **PDF**: A4 horizontal con título, período, empresas, resumen ejecutivo y criterios de lectura, y luego una página por empresa. El PDF de *Inventario y logística* arranca directamente con la información operativa, sin portada.
- **Excel**: una hoja *Resumen* con los indicadores por empresa y moneda, una hoja por empresa con sus secciones y una hoja *Información* con el período y los criterios.
- **CSV**: una fila por registro con la columna *Empresa*, separador `;` y codificación UTF-8 (Excel lo abre directamente).
- El archivo se descarga como `reporte-{vista}-{desde}-{hasta}.{ext}`.

## Resumen gerencial (una sola empresa)

El mismo menú incluye **Resumen gerencial** (`/erp/reports/management`), un reporte de la empresa activa que analiza **una fuente por vez** —órdenes de venta, facturas o cobros— con agrupaciones (mes, día, cliente, vendedor o moneda), filtros comerciales, gráficos de evolución y rankings de productos y vendedores. A diferencia del consolidado, el resumen gerencial nunca mezcla empresas.

## Páginas de esta sección

- [Reporte consolidado](/procesos/reportes/consolidado/)
- [Clientes, proveedores, empleados y socios](/procesos/reportes/partes-interesadas/)
- [Bancos, cajas y cheques](/procesos/reportes/tesoreria/)
- [Documentos comerciales](/procesos/reportes/documentos/)
- [Inventario y logística](/procesos/reportes/inventario-y-logistica/)

## Problemas frecuentes

| Problema | Causa | Solución |
|---|---|---|
| Aparece *No hay empresas disponibles* | Tu usuario no tiene empresas asociadas. | Pedí a un administrador que te asocie a las empresas desde [Usuarios, roles y permisos](/administracion/usuarios-roles-permisos/). |
| El reporte tarda en generar | Muchas empresas seleccionadas; el backend las procesa una por una para no saturar las bases. | Elegí menos empresas o esperá a que termine. |
| No encuentro un importe en los totales | Los importes en moneda extranjera se informan separados y las notas de crédito restan. | Revisá la tarjeta de la moneda correspondiente y el detalle por empresa. |
| Los saldos cambiaron sin tocar nada | Los saldos se recalculan al generar: son actuales, no del período. | Volvé a generar el reporte cuando necesitás el valor actualizado. |
| Un importe no coincide con el de la pantalla de la empresa | Documentos, pagos y movimientos de tesorería pueden representar una misma operación. | No sumes secciones distintas entre sí; usá cada sección para su objetivo. |

## Ver también

- [Reportes de tesorería](/procesos/tesoreria/reportes/) — reportes de una sola empresa.
- [Bancos](/procesos/tesoreria/bancos/), [Cajas](/procesos/tesoreria/cajas/) y [Cheques](/procesos/tesoreria/cheques/).
- [Usuarios, roles y permisos](/administracion/usuarios-roles-permisos/) — gestión de asociaciones de usuarios a empresas.
