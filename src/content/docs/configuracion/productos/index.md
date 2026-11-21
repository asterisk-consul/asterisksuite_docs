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

La ficha (`/productos/{id}`) abre en **General** y organiza la información en secciones compactas: identificación y uso, inventario y operación, categorías y etiquetas, atributos, precios, impuestos, cuentas, variantes y fechas de registro. Si el producto tiene una foto, se muestra junto al nombre y se puede seleccionar para ampliarla. La cabecera permite **Ver disponibilidad** y **Editar producto**. **Ingeniería** aparece en productos compuestos. **Costos** aparece cuando el producto tiene costos registrados o un costo vigente; tener solo un template asignado no alcanza para mostrar esa sección. En los listados de **depósitos** y de **disponibilidad**, el nombre del producto abre directamente su edición (`/productos/{id}/edit`).

### Listado y filtros

En **Stock → Productos** (`/productos`), la tabla muestra una miniatura cuando el producto tiene una foto. El menú de tres puntos de cada fila permite abrir la ficha o editar el producto. Para eliminar productos, seleccioná una o varias filas y usá la acción de eliminación de la tabla; quedan en la Papelera y se pueden recuperar desde Ajustes.

Sobre la tabla podés filtrar por categoría o etiqueta. Ambos selectores permiten buscar escribiendo. El de categorías muestra el árbol con sangría y la categoría padre, para distinguir nombres repetidos; el de etiquetas ofrece una búsqueda directa. Estos filtros se pueden combinar con la búsqueda por nombre o SKU y con los filtros de la tabla.

El botón **Importar / Exportar** abre una ayuda con los requisitos de importación. La flecha contigua despliega las acciones disponibles según los permisos del usuario.

### Configuración del catálogo

- **Categorías**, **Etiquetas** y **Unidades de medida** están agrupadas dentro del submenú **Stock → Productos**; desde allí podés consultar y administrar cada catálogo según tus permisos.
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
