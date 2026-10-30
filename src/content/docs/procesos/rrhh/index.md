---
title: RRHH
description: Empleados, socios, vales y comisiones.
sidebar:
  order: 1
---

## Para qué sirve

**RRHH** gestiona el personal con relación a la operación: **empleados**, **socios**, **vales**, **comisiones** y sus **cuentas corrientes**. Se administra en **ERP → RRHH** (`/erp/rrhh`).

La portada resume empleados y socios activos, vales pendientes y actividad mensual. El gráfico compara la cantidad de retiros/débitos con aportes/créditos; el selector permite revisar los últimos 3, 6 o 12 meses. Los estados incluyen anulados para consulta, pero los vales anulados no se cuentan en la actividad del gráfico.

**Vales recientes** muestra cinco filas a la vez, con persona, fecha, concepto, importe y estado. Podés desplazarte dentro del bloque para consultar hasta veinte movimientos recientes o usar **Ver todos** para abrir el historial completo. La descripción del vale se muestra junto a la persona en pantallas amplias y también al mantener el cursor sobre su nombre.

## Componentes

- **Empleados** — datos, puesto, sueldo y comisiones.
- **Socios** — participación y cuenta corriente.
- **Vales** — sueldos, adelantos, extras, retiros, aportes y préstamos.
- **Comisiones** — bandeja mensual para asignar vendedores a un período, seguir lo devengado y generar vales de comisión (`/erp/rrhh/commissions`).
- **Cuentas corrientes** — saldos por empleado/socio.
- **Reportes** — comisiones, movimientos, saldos, vales por período.

## Páginas de esta sección

- [Empleados](/procesos/rrhh/empleados/)
- [Socios](/procesos/rrhh/socios/)
- [Vales y comisiones](/procesos/rrhh/vales-y-comisiones/)

## Permisos necesarios

:::note[Permisos necesarios]
- Empleados: Ver empleados · Crear empleados · Editar empleados · Eliminar empleados
- Socios: Ver socios · Crear socios · Editar socios · Eliminar socios
- Vales: Ver vales · Crear vales · Editar vales · Eliminar vales · Aprobar vales · Rechazar vales
- Comisiones: Ver comisiones · Gestionar comisiones · Liquidar comisiones
:::

## Ver también

- [Contrapartes](/configuracion/contrapartes/) — empleados y socios son tipos de contraparte.
- [Usuarios, roles y permisos](/administracion/usuarios-roles-permisos/) — vínculo usuario ↔ empleado/socio.
