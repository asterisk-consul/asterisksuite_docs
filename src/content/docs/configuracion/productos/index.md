---
title: Productos
description: Alta y administración del catálogo de productos, servicios y tarifas.
sidebar:
  order: 1
---

El módulo de **Productos** es la base del catálogo de Asterisk Suite. Cada producto representa un artículo, material, servicio o tarifa que la empresa comercializa, fabrica o consume en sus operaciones.

## Contenido

### Alta de productos

- [Crear un producto](/configuracion/productos/crear-producto/) — alta paso a paso, tipos, cálculos, fuentes de costo, la **ficha del producto** (secciones General, Depósitos, Ingeniería y Costos) y errores frecuentes.

### Ficha y edición

La ficha (`/productos/{id}`) muestra un **resumen** del producto y **accesos operativos** (**Ver disponibilidad** y **Editar producto**), con **General** como sección por defecto; **Ingeniería** solo aparece en productos compuestos y **Costos** solo si hay plantilla o costos cargados. En los listados de **depósitos** y de **disponibilidad**, el nombre del producto abre directamente su edición (`/productos/{id}/edit`).

### Listado y filtros

En **Stock → Productos** (`/productos`), la tabla muestra las categorías y etiquetas asignadas. Desde **Filtros** se puede elegir una categoría o una etiqueta para acotar los resultados; la búsqueda se aplica antes de paginar.

El botón **Importar / Exportar** abre una ayuda con los requisitos de importación. La flecha contigua despliega las acciones disponibles según los permisos del usuario.

Las opciones de categoría muestran primero la categoría seleccionada y después su ruta superior, para distinguir subcategorías con nombres parecidos.

Los selectores de categoría y etiqueta permiten buscar escribiendo parte del nombre.

### Configuración del catálogo

- **Categorías** y **Etiquetas** tienen accesos directos en el menú **Stock** para consultar, crear y administrar sus catálogos.
- [Unidades de medida](/configuracion/productos/unidades/).
- [Categorías](/configuracion/productos/categorias/).
- [Tags](/configuracion/productos/tags/).
- [Atributos](/configuracion/productos/atributos/).
- [Variantes de producto](/configuracion/productos/variantes/).

### Estructura y costos

- [Componentes y BOM](/configuracion/productos/componentes-bom/).
- [Plantillas de costo](/configuracion/productos/plantillas-de-costo/).

### Precios

- [Precios de producto](/configuracion/productos/precios/).
- [Listas de precio](/configuracion/productos/listas-de-precio/).
- [Precios por cliente y proveedor](/configuracion/productos/precios-por-contraparte/).

## Páginas previstas

- Costos (cálculo, historial y Pareto).
