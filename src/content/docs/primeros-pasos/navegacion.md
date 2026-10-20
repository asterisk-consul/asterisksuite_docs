---
title: Navegación general
description: Cómo moverse por el sistema.
sidebar:
  order: 3
---

## Para qué sirve

Reúne los conceptos básicos de navegación por Asterisk Suite.

## Empresa activa

El sistema es **multi-empresa**: siempre trabajás dentro de una **empresa activa**. Si pertenecés a más de una, la cambiás desde **Seleccionar empresa** (`/select-company`).

## Menú y accesos

- El **menú lateral** agrupa los módulos por área (ERP, Stock, Logística, etc.).
- Las secciones se pueden **colapsar/expandir**.
- El **Centro de configuración** (`/settings`) reúne todos los parámetros.

## Perfil y cuenta

- **Mi perfil** (`/settings/profile`).
- **Seguridad** (`/settings/security`) para cambiar la contraseña.

## Módulos principales

- **ERP**: ventas, compras, tesorería, contabilidad, RRHH.
- **Stock**: existencias, reposición, fabricación.
- **Logística**: viajes, despachos, flota y mantenimiento.
- **Operaciones internacionales**.
- **Configuración** y **Administración**.

## Listados y tablas

Los listados principales (**Ventas**, **Órdenes de venta**, **Remitos**, **Comprobantes de compra**, **Productos**, etc.) trabajan contra el servidor y no descargan el catálogo completo:

- **Paginación de 25 registros por página.** El pie de la tabla muestra el total de coincidencias (p. ej. *0 seleccionadas • 1.234 totales*) junto a los controles de página.
- **Búsqueda y ordenamiento en el servidor.** Escribí en el campo de búsqueda (por N°, tercero o descripción; en productos, por **nombre o SKU**) o hacé clic en un encabezado para ordenar. Cada cambio de búsqueda o filtro hace que la tabla vuelva a la **primera página** y recalcule el **total de coincidencias**.
- **Filtros avanzados aplicados antes de paginar**, de modo que el total y la cantidad de páginas corresponden a lo que realmente coincide. El contador de filtros activos aparece **superpuesto** en la barra (sin desplazar los controles) y hay una espera breve mientras escribís para no repetir consultas.
- **Columnas visibles.** El botón **Columnas** de la barra abre el panel *Columnas visibles* para elegir qué información mostrar. La preferencia se guarda **por usuario, empresa y pantalla**, y el ícono **Restablecer** vuelve a la vista por defecto.
- Las **columnas calculadas o técnicas** (totales, fechas de sistema, identificadores) ya no ofrecen filtros inválidos.

Este mismo comportamiento (25 registros, búsqueda y total en el pie) se repite en pantallas como [Disponibilidad](/procesos/stock/disponibilidad/) y [Reposición](/procesos/stock/reposicion/) de stock.

## Permisos

Lo que ves y podés hacer depende de tu **rol** y **permisos**. Si falta algo, revisá [Permisos y acceso](/solucion-de-problemas/permisos-y-acceso/).

## Ver también

- [Configuración inicial de la empresa](/primeros-pasos/configuracion-inicial-empresa/).
- [Centro de configuración](/administracion/centro-de-configuracion/).
