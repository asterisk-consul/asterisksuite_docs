---
title: Atributos
description: Definir características reutilizables para los productos, con su tipo de dato.
sidebar:
  order: 5
---

## Para qué sirve

Los **atributos** definen características reutilizables que se aplican a los productos, como color, tamaño o material. La pantalla está en **Configuración → Productos → Atributos** (`/productos/settings/attributes`).

## Permisos necesarios

`attributes.read` para ver; `attributes.create` y `attributes.update` para crear, editar y activar/desactivar.

## Cómo crear un atributo

1. Ir a **Atributos** y presionar **Nuevo atributo**.
2. Completar:
   - **Nombre**: ej. "Color".
   - **Código**: identificador corto único, ej. "CL".
   - **Tipo**: Texto, Número o Booleano.
3. Dejar **Activo** marcado y guardar.

## Cómo editar o desactivar

- **Editar**: presionar el ícono de edición en la fila.
- **Activar/desactivar**: usar el interruptor. Los atributos inactivos no se ofrecen al cargar valores en los productos.

## Reglas y validaciones

- El **nombre** y el **código** son obligatorios.
- El **código** debe ser único entre los atributos.
- El **tipo** define el dato que acepta el atributo: texto libre, valor numérico o verdadero/falso.

## Notas

- Los valores del atributo se cargan por producto, después de crear el atributo.
- Usá un código estable (ej. `CL`, `TAM`) para identificarlo en integraciones o reportes.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "Ya existe un atributo con código [X]" | El código está en uso. | Usá otro código. |
| No puedo guardar | Falta el nombre o el código. | Completá ambos campos. |
| El atributo no aparece en el producto | Está inactivo. | Activalo desde esta pantalla. |

## Ver también

- [Productos](/configuracion/productos/).
- [Crear un producto](/configuracion/productos/crear-producto/).
