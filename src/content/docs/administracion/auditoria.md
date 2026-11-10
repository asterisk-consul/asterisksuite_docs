---
title: Auditoría de cambios
description: Consultar quién creó, editó o eliminó registros de una empresa.
sidebar:
  order: 6
---

## Para qué sirve

La auditoría permite consultar los cambios registrados para la empresa seleccionada: quién creó, editó, eliminó o restauró un registro, cuándo ocurrió y cuáles eran sus valores anteriores y nuevos.

## Quién puede consultar

La pantalla está disponible en **Configuración → Usuarios y seguridad → Auditoría de cambios** para:

- Usuarios `PLATFORM_ADMIN` que pertenezcan a la empresa y tengan esa empresa dentro de su alcance de plataforma.
- Usuarios `PLATFORM_OWNER` que pertenezcan a la empresa seleccionada.

La consulta queda limitada al tenant activo. Los roles de plataforma `SUPPORT` y `PLATFORM_USER` no obtienen acceso por el solo hecho de tener ese rol.

## Cómo consultar los cambios

1. Abrí **Centro de configuración** y elegí **Auditoría de cambios**.
2. Buscá por entidad, ID del registro, acción o usuario. También podés usar los filtros de columnas y acotar el período.
3. Seleccioná una fila o presioná **Ver cambios** para comparar el valor anterior con el nuevo.

La grilla pagina los resultados para permitir recorrer historiales extensos sin cargar todos los registros a la vez.

## Datos registrados

- **Entidad** y **ID del registro**.
- **Acción**: alta, edición, baja o restauración.
- **Usuario**, **fecha y hora** y, cuando está disponible, **dirección IP**.
- **Valores anteriores y nuevos** para la comparación.

Los datos que parecen credenciales —como contraseñas, tokens o claves privadas— se muestran enmascarados. La auditoría automática cubre las operaciones individuales de escritura que pasan por el cliente Prisma; algunas operaciones masivas pueden no generar una entrada individual.

## Consideraciones

- La baja lógica también queda registrada y el elemento puede recuperarse desde la [Papelera](/administracion/papelera/).
- El seguimiento de las Órdenes de Venta es distinto: su cronología de estados está disponible en el detalle del documento para el auditor asignado y el propietario de la empresa.

## Ver también

- [Papelera](/administracion/papelera/).
- [Seguridad](/administracion/seguridad/).
