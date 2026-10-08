---
title: Crear Producto
description: Guia paso a paso para crear productos en Asterisk Suite ERP
navigation:
  title: Crear Producto
  position: 1
---

## Que es un Producto

Un **producto** es la unidad basica de catalogo en Asterisk Suite. Cada producto representa un articulo, material, servicio o tarifa que la empresa comercializa, fabrica o utiliza en sus operaciones.

Los productos se utilizan en multiples modulos del sistema:

- **Compras**: Seleccion de articulos al generar ordenes de compra
- **Ventas**: inclusion en facturas y presupuestos
- **Logistica**: Control de stock, picking y despacho
- **Inventario**: Seguimiento de movimientos y valuation
- **Contabilidad**: Asociacion a cuentas contables para asientos automaticos

---

## Requisitos Previos

Para crear un producto necesitas:

1. **Sesion activa**: Haber iniciado sesion en el sistema
2. **Permisos**: Contar con el permiso `products.create` (los roles **admin** y **manager** lo tienen por defecto)
3. **Datos minimos**: Un nombre para el producto

---

## Campos del Formulario

### Campos Obligatorios

| Campo | Descripcion |
|-------|-------------|
| **Nombre** | Nombre del producto. Es el campo unico obligatorio. |

### Campos Opcionales

| Campo | Tipo | Valor por defecto | Descripcion |
|-------|------|-------------------|-------------|
| SKU | Texto | vacio | Codigo unico de identificacion. Si se ingresa, debe ser unico entre todos los productos activos. |
| Tipo de producto | Enum | `PRODUCTO_TERMINADO` | Clasificacion del producto (ver seccion Tipos de Producto). |
| Tipo de calculo | Enum | `UNIDAD` | Como se mide el producto (ver seccion Tipos de Calculo). |
| Fuente de costo | Enum | `BOM` | De donde proviene el costo del producto (ver seccion Fuentes de Costo). |
| Activo | Checkbox | `true` | Indica si el producto esta disponible para uso en el sistema. |
| Controla stock | Checkbox | `true` | Si esta activo, el sistema controla el inventario de este producto. |
| Requiere refrigeracion | Checkbox | `false` | Marcar si el producto debe mantenerse en cadena de frio. |
| Habilitar precio | Checkbox | `false` | Permite asociar precios de venta al producto. |
| Calcular costo automaticamente | Checkbox | `false` | El sistema calcula el costo segun la fuente de costo configurada. |
| Producto compuesto | Checkbox | `false` | Indica que este producto se fabrica a partir de otros componentes. |
| Tiene ingenieria | Checkbox | `false` | Indica si el producto tiene estructura de ingenieria asociada. |
| Es tipo tarifa | Checkbox | `false` | Marcar si el producto representa una tarifa de transporte. |
| Cuenta contable de ingreso | Selector | vaco | Cuenta contable para registrar ingresos por venta de este producto. |
| Cuenta contable de gasto | Selector | vaco | Cuenta contable para registrar gastos asociados a este producto. |
| Cuenta contable de inventario | Selector | vaco | Cuenta contable para registrar el valor en inventario. |
| Impuesto | Selector | vaco | Impuesto principal asociado al producto. |
| Categoria fiscal | Selector | vaco | Categoria fiscal del producto para calculo de IVA. |

---

## Tipos de Producto

El sistema ofrece 5 tipos de producto para clasificar correctamente tu catalogo:

| Tipo | Codigo | Descripcion | Ejemplo |
|------|--------|-------------|---------|
| **Materia Prima** | `RAW_MATERIAL` | Material basico que se utiliza en la fabricacion. No se vende directamente al cliente final. | Chapa de acero, madera, tela |
| **Semi-terminado** | `SEMI_FINISHED` | Producto que ha sido procesado parcialmente y puede ser componente de otro producto o vendido como tal. | Tabla cepillada, perfil metalico |
| **Producto Terminado** | `FINISHED_PRODUCT` | Producto listo para la venta al cliente final. Es el tipo por defecto. | Mesa, puerta, mueble completo |
| **Servicio** | `SERVICE` | No es un producto fisico, sino una prestacion. No controla stock. | Instalacion, mantenimiento, asesoramiento |
| **Tarifa** | `RATES` | Representa una tarifa de transporte o logistica. | Tarifa por kilometro, tarifa fija de envio |

---

## Tipos de Calculo

Define como se mide o cuantifica el producto:

| Tipo | Codigo | Cuándo usar | Ejemplo |
|------|--------|-------------|---------|
| **Unidad** | `UNIT` | Productos que se cuenten en unidades enteras. Es el tipo por defecto. | 1 mesa, 10 sillas, 50 tornillos |
| **Superficie** | `SURFACE` | Productos que se miden en metros cuadrados. | Laminas, paneles, pisos |
| **Volumen** | `VOLUME` | Productos que se miden en metros cubicos. | Bloques de hormigon, tanques |
| **Lineal** | `LINEAR` | Productos que se miden en metros lineales. | Perfiles, tubos, cables |

---

## Fuentes de Costo

Indica como se obtiene el costo del producto:

| Fuente | Codigo | Cuándo usar | Descripcion |
|--------|--------|-------------|-------------|
| **Manual** | `MANUAL` | Cuando el costo se ingresa manualmente. | Util para productos con costos variables o que no se fabrican internamente. |
| **BOM (Lista de Materiales)** | `BOM` | Cuando el costo se calcula sumando el costo de los componentes. | Productos compuestos que se fabrican a partir de materias primas. |
| **Ingenieria** | `ENGINEERING` | Cuando el costo proviene de calculos de ingenieria. | Productos con estructura tecnica compleja. |
| **Compra** | `PURCHASE` | Cuando el costo es el precio de compra al proveedor. | Materia prima o articulos que se adquieren externamente. |
| **Tarifa** | `RATE` | Cuando el costo proviene de una tarifa de transporte. | Productos logisticos con costo por km o por flete. |

---

## Paso a Paso: Crear un Producto

### 1. Acceder al modulo de Productos

Desde el menu principal, navega a **Master Data > Productos**.

### 2. Iniciar la creacion

Haz clic en el boton **"Crear Producto"** (o **"+"**) ubicado en la parte superior de la lista de productos.

### 3. Completar los campos

El formulario se abre con los valores por defecto pre-cargados:

- **Tipo de producto**: Producto Terminado
- **Tipo de calculo**: Unidad
- **Fuente de costo**: BOM
- **Activo**: Si
- **Controla stock**: Si

Completa al menos el campo **Nombre**. Los demas campos son opcionales.

### 4. Configuracion avanzada (opcional)

Segun las necesidades de tu producto, podes configurar:

- **SKU**: Si usas codificacion de articulos, ingresa el codigo unico
- **Precios**: Marca "Habilitar precio" para poder asignar precios de venta
- **Contable**: Asocia cuentas de ingreso, gasto e inventario para contabilizacion automatica
- **Fiscal**: Asocia impuestos y categoria fiscal para calculo automatico de IVA

### 5. Guardar

Haz clic en el boton **"Guardar"**. El sistema validara:

- Que el **nombre** no este vacio
- Que el **SKU** (si se ingreso) no este duplicado entre productos activos

Si la validacion es exitosa, el producto se crea y aparece en la lista.

---

## Ejemplos Practicos

### Ejemplo 1: Crear una Materia Prima Basica

**Scenario**: Queremos cargar una lamina de acero que compramos a un proveedor.

| Campo | Valor |
|-------|-------|
| Nombre | Lamina de Acero 3mm |
| SKU | MAT-001 |
| Tipo de producto | Materia Prima |
| Fuente de costo | Compra |
| Controla stock | Si |
| Habilitar precio | No (se vende como componente) |

### Ejemplo 2: Crear un Producto Terminado con Precio

**Scenario**: Queremos cargar una mesa que fabricamos y vendemos.

| Campo | Valor |
|-------|-------|
| Nombre | Mesa Comedor 6 Personas |
| SKU | PROD-001 |
| Tipo de producto | Producto Terminado |
| Tipo de calculo | Unidad |
| Fuente de costo | BOM |
| Controla stock | Si |
| Habilitar precio | Si |
| Producto compuesto | Si (tiene componentes: patas, tablones, tornillos) |
| Cuenta contable de ingreso | Seleccionar cuenta de ventas |
| Categoria fiscal | Seleccionar categoria gravada con IVA |

### Ejemplo 3: Crear un Servicio

**Scenario**: Queremos cargar el servicio de instalacion que ofrecemos.

| Campo | Valor |
|-------|-------|
| Nombre | Servicio de Instalacion |
| Tipo de producto | Servicio |
| Controla stock | No (un servicio no tiene inventario) |
| Habilitar precio | Si |
| Cuenta contable de ingreso | Seleccionar cuenta de prestacion de servicios |

---

## Errores Comunes

### SKU Duplicado

**Error**: `Ya existe un producto con SKU [codigo]`

**Causa**: Ya existe otro producto activo con el mismo codigo SKU.

**Solucion**:
1. Verifica en la lista de productos si ya existe uno con ese SKU
2. Si el producto anterior fue eliminado (baja logica), podes **restaurarlo** desde la papelera en lugar de crear uno nuevo
3. Si necesitas crear un nuevo producto, usa un SKU diferente

### Nombre Requerido

**Error**: El campo nombre no puede estar vacio.

**Causa**: No se ingreso un nombre para el producto.

**Solucion**: Ingresa un nombre descriptivo para el producto.

---

## Notas Importantes

1. **Categorias y Tags**: Las categorias y etiquetas (tags) se asocian al producto **despues** de crearlo. Desde la pantalla de edicion del producto podes asignarlas.

2. **Precios**: Si marcaste "Habilitar precio", los precios de venta se configuran desde la pestana de precios del producto, no en el formulario de creacion.

3. **Componentes (BOM)**: Si el producto es compuesto, los componentes se agregan desde la pestana de componentes despues de la creacion.

4. **Producto Inactivo**: Si desmarcas la casilla "Activo", el producto quedara inactivo y no aparecera en las listas de seleccion de otros modulos (compras, ventas, etc.), aunque seguira existiendo en el sistema.

5. **Eliminacion Logica**: Cuando eliminas un producto, este no se borra permanentemente sino que se marca como eliminado. Podes restaurarlo desde la papelera si lo necesitas.

6. **Auditoria**: El sistema registra automaticamente quien creo y modify cada producto, con fecha y hora.

7. **Moneda del Costo**: Si configuraste "Calcular costo automaticamente", el sistema utilizara la fuente de costo seleccionada para calcular el costo del producto. Para productos con BOM, el costo sera la suma del costo de todos los componentes.

---

## Ver Tambien

- [Gestion de Productos](/modulos/master-data/productos) - Administrar productos existentes
- [Variantes de Producto](/modulos/master-data/variantes) - Crear variantes de un producto
- [Precios de Producto](/modulos/master-data/precios) - Configurar precios de venta
- [Categorias y Tags](/modulos/master-data/categorias) - Organizar el catalogo de productos
