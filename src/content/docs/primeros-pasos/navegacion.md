---
title: Navegación general
description: Cómo moverse por el sistema.
sidebar:
  order: 3
---

## Para qué sirve

Reúne los conceptos básicos de navegación por Asterisk Suite.

## Empresa activa

El sistema es **multi-empresa**: siempre trabajás dentro de una **empresa activa**. Si pertenecés a más de una, la cambiás desde el selector del menú o **Seleccionar empresa** (`/select-company`). En la app, **Ctrl + Shift + E** abre el selector de empresas. Al ingresar por el subdominio propio de una empresa, se activa esa empresa; en una dirección compartida (por ejemplo, el host `dev`) se restaura la última empresa seleccionada. Escribir `dev` en la dirección no cambia por sí solo la empresa activa: para cambiarla, usá el selector. La selección se conserva al recargar, así que no hace falta borrar la caché del navegador. Si todavía no hay una selección válida para tu usuario, elegí una empresa una vez en `/select-company`.

## Menú y accesos

- El **menú lateral** agrupa los módulos por área (ERP, Stock, Logística, etc.).
- Al seleccionar una sección con subopciones, se abre su primera página disponible; por ejemplo, **Configuración** abre el **Centro de configuración**. Las páginas sin subopciones abren directamente su destino. Las opciones se filtran según los permisos del usuario.
- Las secciones se pueden **colapsar/expandir**.
- El **Centro de configuración** (`/settings`) reúne todos los parámetros.
- El buscador global se abre con **Ctrl+K** (o **⌘+K** en Mac). Busca las páginas de forma recursiva, agrupa los resultados por módulo y muestra la sección de origen para distinguir destinos con nombres iguales, como **Comprobantes**. También encuentra palabras aunque se escriban sin tilde y solo ofrece páginas permitidas para tu rol.

## Perfil y cuenta

- **Mi perfil** (`/settings/profile`).
- **Seguridad** (`/settings/security`) para cambiar la contraseña.

## Módulos principales

- **ERP**: ventas, compras, tesorería, contabilidad, RRHH.
- **Stock**: catálogo, existencias, reposición y fabricación.
- **Logística**: viajes, despachos, flota y mantenimiento.
- **Operaciones internacionales**.
- **Configuración** y **Administración**.

## Listados y tablas

En las tablas que cuentan con una ficha, detalle o edición, podés hacer clic en cualquier parte de la fila para abrir ese registro. Los botones, enlaces y controles de la fila conservan su acción propia y no disparan la apertura general.

Los listados principales (**Ventas**, **Órdenes de venta**, **Remitos**, **Comprobantes de compra**, **Productos**, etc.) trabajan contra el servidor y no descargan el catálogo completo:

- **Paginación de 25 registros por página.** El pie de la tabla muestra el total de coincidencias (p. ej. *0 seleccionadas • 1.234 totales*) junto a los controles de página.
- **Búsqueda y ordenamiento en el servidor.** Escribí en el campo de búsqueda (por N°, tercero o descripción; en productos, por **nombre o SKU**) o hacé clic en un encabezado para ordenar. Cada cambio de búsqueda o filtro hace que la tabla vuelva a la **primera página** y recalcule el **total de coincidencias**.
- **Filtros avanzados aplicados antes de paginar**, de modo que el total y la cantidad de páginas corresponden a lo que realmente coincide. El botón **Filtros** muestra cuántas condiciones están activas; también podés abrirlo con **Ctrl + Shift + F**. Dentro del panel podés quitar condiciones individuales desde su resumen o limpiar todos los filtros avanzados. La búsqueda rápida de la tabla se conserva al limpiar esos filtros.
- **Columnas visibles y orden.** El botón **Columnas** de la barra abre el panel *Columnas visibles* para elegir qué información mostrar y reordenar las columnas arrastrándolas o usando las flechas. La visibilidad y el orden se guardan por usuario, empresa y tabla en el servidor, por lo que se mantienen al ingresar desde otro navegador o equipo. También hay un respaldo local si no hay conexión. El ícono **Restablecer** vuelve a la vista por defecto y sincroniza ese cambio.
- Las **columnas calculadas o técnicas** (totales, fechas de sistema, identificadores) ya no ofrecen filtros inválidos.

Este mismo comportamiento (25 registros, búsqueda y total en el pie) se repite en pantallas como [Disponibilidad](/procesos/stock/disponibilidad/) y [Reposición](/procesos/stock/reposicion/) de stock.

## Permisos

Lo que ves y podés hacer depende de tu **rol** y **permisos**. Si falta algo, revisá [Permisos y acceso](/solucion-de-problemas/permisos-y-acceso/).

## Ver también

- [Configuración inicial de la empresa](/primeros-pasos/configuracion-inicial-empresa/).
- [Centro de configuración](/administracion/centro-de-configuracion/).
