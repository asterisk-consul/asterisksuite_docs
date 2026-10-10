---
title: Socios
description: Alta de socios, participación y cuenta corriente.
sidebar:
  order: 2
---

## Para qué sirve

Los **socios** son los participantes de la empresa. Se administran en **RRHH → Socios** (`/erp/rrhh/partners`).

## Permisos necesarios

:::note[Permisos necesarios]
- Ver socios · Crear socios · Editar socios · Eliminar socios
:::

## Campos

- **Nombre** y **apellido**.
- **Documento**.
- **Porcentaje de participación**.
- **Activo**.
- Datos de **contraparte** (direcciones, contactos, cuentas bancarias).

## Cómo crear un socio

1. Ir a **Socios** y presionar **Nuevo**.
2. Completar nombre, apellido, documento y porcentaje de participación.
3. Guardar.

Al crear un socio, el sistema crea su **contraparte** (tipo Socio) y puede vincularse a un **usuario**.

## Cuenta corriente y reportes

- Cada socio tiene **cuenta corriente** (`/erp/rrhh/current-accounts`).
- Hay reportes de **socios**, **movimientos** y **saldos**.

## Reglas y consideraciones

- El porcentaje de participación define la porción del socio.
- Un socio puede tener **usuario** de acceso vinculado.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| El socio ya tiene usuario | Ya fue vinculado. | Desvinculá o editá. |
| El saldo no coincide | Movimientos pendientes. | Revisá la cuenta corriente. |

## Ver también

- [Vales y comisiones](/procesos/rrhh/vales-y-comisiones/).
- [Cuentas corrientes (Tesorería)](/procesos/tesoreria/cuentas-corrientes/).
