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
- Cada entrada del menú tiene un permiso propio, agrupado en **Reportes** dentro de los permisos del rol.
- El permiso `management_reports.read` es el acceso general heredado y habilita todos los reportes. Para restringirlos individualmente, quitá ese permiso y asigná solo los reportes que correspondan.
- El menú se muestra cuando el usuario tiene al menos uno de esos permisos. El backend valida el permiso de la vista consultada y limita sus datos; también verifica que cada empresa elegida esté asociada al usuario.
- La membresía **OWNER** conserva acceso total. Los roles `admin` nuevos incluyen todos los permisos de reportes; se pueden ajustar desde la configuración de roles.
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
| **Resultado y composición** | `resultado` | `/erp/reports/financial-results` | Resumen por empresa y moneda, con navegación a cuentas contables y documentos. |
| **Productos vendidos por empresa** | `productos-vendidos` | `/erp/reports/sales-products` | Cantidades e importes de OV por empresa, categoría y punto de venta, con renglones y conciliación. |
| **Clientes** | `clientes` | `/erp/reports/consolidated?view=customers` | Cobros, cuentas de clientes con saldo y documentación comercial. |
| **Proveedores** | `proveedores` | `/erp/reports/consolidated?view=suppliers` | Pagos, deuda, obligaciones del período y documentos de compra. |
| **Empleados y socios** | `rrhh` | `/erp/reports/consolidated?view=hr` | Personas, vales, retiros y saldos pendientes. |
| **Bancos, cajas y cheques** | `tesorería` | `/erp/reports/consolidated?view=treasury` | Saldos, aperturas, variaciones y movimientos del período. |
| **Documentos** | `documentos` | `/erp/reports/consolidated?view=documents` | Documentos de compra y venta agrupados por tipo y estado. |
| **Inventario y logística** | `inventario` | `/erp/reports/consolidated?view=inventory` | Órdenes de venta por artículo y movimientos de stock. |

Todas las vistas comparten la misma pantalla: al elegir una opción del menú se cambia el parámetro `view` de la URL y el contenido del reporte.

## Habilitar reportes por separado

1. Ir a **Configuración → Usuarios y seguridad → Roles y permisos**.
2. Abrir **Permisos** en el rol que se quiera configurar.
3. En el grupo **Reportes**, activar únicamente las vistas que ese rol debe consultar.
4. Si está marcado **Ver todos los reportes (acceso general heredado)**, desmarcarlo para que se respeten los permisos individuales.
5. Guardar los cambios.

Los permisos individuales incluyen el resumen gerencial, el consolidado, resultado y composición, productos vendidos, clientes, proveedores, empleados y socios, tesorería, documentos e inventario y logística. Si una vista no está habilitada, no aparece en el menú y la API rechaza su consulta directa. El acceso a **Roles y permisos** se configura aparte, por lo que sigue disponible aunque el usuario no tenga reportes habilitados.

En bases tenant existentes, al abrir la pantalla de permisos se agregan automáticamente al catálogo los permisos individuales que falten. No hace falta una migración ni ejecutar un seed manual; las asignaciones actuales de cada rol se conservan hasta que las edites y guardes.

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

El mismo menú incluye **Resumen gerencial** (`/erp/reports/management`), un reporte de la empresa activa que permite elegir **una categoría por vez**: órdenes de venta (OV), presupuestos o facturas. Los cobros se reflejan en la OV o factura a la que fueron aplicados; no se presentan como una categoría separada. Las facturas y las OV muestran sus importes cobrados y pendientes. El detalle se puede agrupar por mes, día, cliente, vendedor o moneda y filtrar por cliente, producto, punto de venta y estado de cobro según la categoría. El filtro **Estado del documento** ofrece los estados propios de cada tipo y, por defecto, incluye todos: las OV incluyen borrador, aprobada, preparación, despacho, entrega parcial o completa, facturada, cerrada y cancelada; los presupuestos, borrador, enviado, aprobado, rechazado, vencido, convertido y cancelado; y las facturas, borrador, pendiente, confirmada y anulada. El estado también aparece en cada fila del detalle. El período y el estado documental quedan a mano; agrupación, moneda, cobro, cliente, vendedor, producto, punto de venta y avance de la OV se reúnen en **Más filtros**. El contador del botón indica cuántos filtros adicionales están activos.

La sección de evolución y composición por moneda está oculta por el momento. El resumen gerencial conserva el desempeño por vendedor; ya no calcula rankings ni carga datos detallados de productos para esas tarjetas. El filtro por producto sigue disponible. Para analizar artículos, **Ver reporte de productos** abre `/erp/sales/sales-reports/salesProducts` con las mismas fechas *Desde* y *Hasta*. A diferencia del consolidado, el resumen gerencial nunca mezcla empresas.

## Resultado y composición por empresa

El reporte **Resultado y composición** (`/erp/reports/financial-results`) compara las empresas asociadas al usuario en un período. Todas las monedas se mantienen separadas, sin conversión ni suma entre monedas. Se pueden seleccionar hasta 20 empresas por consulta; el período inicial va desde el primer día del mes actual hasta hoy.

La tabla presenta una fila por empresa y moneda, más el total de las empresas seleccionadas en esa misma moneda. Los importes subrayados abren el subreporte de esa empresa: primero la composición por cuenta contable y tipo; después, los documentos que forman cada importe. Desde el documento se abre su pantalla del ERP y, en las órdenes y comprobantes comerciales, se pueden desplegar las partidas. La búsqueda del detalle admite número, UUID, tercero y concepto.

| Indicador | Criterio |
|---|---|
| Ventas · OV aprobadas | Órdenes de venta en estados 1 a 7, desde Aprobada hasta Cerrada, por fecha de la OV. Cada total se separa según el cobro acumulado actual y el pendiente; se indica cuántas están cobradas, parciales o sin cobro. |
| Compras / gastos facturados | Facturas de compra confirmadas (estado 2), por fecha del comprobante. |
| Facturas de venta | Facturas de venta confirmadas (estado 2); se comparan con las OV aprobadas. |
| Pagos realizados | Pagos y gastos en estado pagado, agrupados por cuenta contable y tipo. |
| Cobros realizados | Cobros en estado pagado, presentados por separado de los pagos. |
| Saldo de OV por cobrar | Saldo positivo de las OV en estados 1 a 7; no se distribuye entre cuentas de ingreso. |
| Ventas − facturas / Cobros − pagos | Diferencias comparativas. No son utilidad contable ni saldo de caja o banco. |

Las facturas y los pagos pueden describir partes del mismo circuito; no sumes indicadores diferentes como si fueran ingresos independientes. El reporte no es un estado contable oficial: no incorpora devengamientos, costo de ventas ni notas de crédito o débito. Para la composición de facturas usa la cuenta de ingreso o gasto actualmente asignada al producto; la diferencia entre el total del comprobante y sus partidas queda visible como impuestos, ajustes o importes sin ítems activos. Si el producto no tiene cuenta asignada, sus renglones aparecen en **Sin cuenta contable asignada**.

## Reportes de productos de ventas y compras

Los reportes **Productos vendidos** (`/erp/sales/sales-reports/salesProducts`) y **Productos comprados** (`/erp/purchases/purchases-reports/purchasesProducts`) analizan la empresa activa. Elegí un período y un tipo de documento —facturas, notas de crédito o débito, órdenes, presupuestos o remitos según el circuito— y aplicá los filtros. Por defecto se muestran las órdenes (OV en ventas y órdenes de compra en compras). La ruta anterior `/productdash` sigue disponible para productos comprados.

La pestaña **Productos por categoría** agrupa los artículos y permite desplegar los comprobantes justo debajo de cada producto. Las categorías aparecen cerradas al abrir o actualizar el reporte; hacé clic en el encabezado para ver sus productos. Hacé clic en el nombre para abrir la ficha del artículo y en el número del comprobante para abrir su documento: OV, presupuestos y remitos usan su pantalla de detalle; facturas y notas abren el comprobante de ventas o compras correspondiente. El detalle muestra fecha, tipo y número, estado, cliente o proveedor, cantidad, neto y total; se pagina de a 25 renglones. La pestaña **Gráficos** muestra las cantidades por artículo y conserva el ranking de importes y la distribución por producto; los importes gráficos se visualizan de a una moneda. La búsqueda permite encontrar un producto por nombre, código o categoría y el CSV exporta el resultado filtrado.

Los importes quedan separados por moneda y las cantidades por unidad de medida. El neto suma una sola vez el subtotal guardado en cada renglón; no representa cobros. Se incluyen todos los estados documentales y el estado se muestra al abrir el detalle. **Todos los tipos** combina etapas del circuito; una OV, un remito y una factura pueden describir la misma operación, por eso es preferible elegir un tipo cuando se comparan importes.

## Productos vendidos por empresa

El reporte **Productos vendidos por empresa** (`/erp/reports/sales-products`) compara una o varias empresas asociadas al usuario en un mismo período. Requiere el permiso `management_reports.read` y admite hasta 20 empresas por consulta. Por defecto usa las OV en estado **Aprobada, Parcial entregada, Entregada y Cerrada** (códigos 1, 4, 5 y 7); podés cambiar los estados antes de generarlo. También permite buscar por producto, SKU, cliente, número o UUID de OV, punto de venta e importes.

El resumen presenta cada empresa y moneda por separado. En **Productos por categoría**, expandí una categoría para ver sus artículos y un artículo para consultar sus OVs directamente debajo, dentro de la misma tabla. Los comprobantes se muestran de a 25 por página; el artículo queda cerrado cuando abrís otro. El nombre del artículo abre su ficha y el número de OV abre el documento. La vista **Puntos de venta** conserva su desglose independiente y permite abrir las OVs de cada punto. La cantidad corresponde a la cantidad del renglón de la OV, no a la cantidad entregada.

Este reporte toma **solo órdenes de venta**. No suma facturas ni remitos del mismo circuito, para evitar contar dos veces una operación cuando la OV se convierte en otro documento. Las monedas no se convierten ni se mezclan.

Para leer los importes, el **neto** es el valor guardado en `document_items.price`; el **IVA** suma solo los impuestos de tipo IVA registrados en cada renglón. Si el renglón no tiene IVA guardado, el reporte muestra cero y no estima una alícuota. El total de renglones es neto más IVA registrado. Otros tributos o ajustes quedan reflejados en la comparación con la suma de los totales de cabecera de las OV; la diferencia también puede incluir renglones que no coincidan con la búsqueda.

El botón **Exportar Excel** genera siete hojas: Resumen, Consolidado, Categorías, Puntos de venta, Movimientos, Conciliación y Criterios. Para controlar el uso de memoria, el archivo limita el detalle a 25.000 renglones; si se supera, acotá el período o la búsqueda y volvé a exportar.

## Ventas por punto de venta

El reporte **Ventas por punto de venta** (`/erp/sales/sales-reports/by-point-of-sale`) permite filtrar período y tipo documental. Por defecto muestra **Órdenes de venta (OV)** y consulta un solo tipo por vez para evitar sumar la OV y la factura de una misma operación. Los puntos de venta y los totales se agrupan por moneda; no se mezclan importes de distintas monedas.

Expandí un punto de venta para consultar sus documentos paginados. Cada fila muestra fecha, cliente, unidades, importe y estado. Expandí el documento para ver los artículos y cantidades; el número enlaza con su documento de ventas. Las notas de crédito restan importes y unidades.

Para acceder se necesita lectura de ventas o compras, según el reporte. La información proviene únicamente de la empresa activa.

## Páginas de esta sección

- [Reporte consolidado](/procesos/reportes/consolidado/)
- [Resultado y composición por empresa](/procesos/reportes/resultado-y-composicion/)
- [Envíos automáticos por WhatsApp](/procesos/reportes/envios-automaticos-whatsapp/)
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
