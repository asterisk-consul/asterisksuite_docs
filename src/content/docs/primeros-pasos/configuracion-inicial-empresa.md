---
title: Configuración inicial de la empresa
description: Crear la empresa, elegir su subdomain y completar los datos fiscales y de contacto.
sidebar:
  order: 2
---

## Para qué sirve

La empresa es la unidad central de Asterisk Suite. El sistema es **multi-tenant**: cada empresa se aprovisiona en una **base de datos independiente**, con sus propios datos maestros, documentos, usuarios y permisos. Crear una empresa deja el sistema listo para operar desde cero, con los catálogos y roles básicos ya cargados.

Conviene crear la empresa **antes** de configurar productos, impuestos y secuencias, porque esos datos viven dentro de cada empresa.

## Permisos necesarios

- **Crear empresa**: cualquier usuario autenticado. Un usuario puede ser **OWNER de hasta 3 empresas**.
- **Editar los datos de la empresa**: solo usuarios con rol **OWNER** o **ADMIN** dentro de esa empresa.

## Antes de empezar

- Tener una cuenta de usuario creada y la sesión iniciada.
- Definir el **nombre** de la empresa.
- Elegir un **subdomain** (identificador de la URL):
  - Solo minúsculas, números y guiones (`a-z`, `0-9`, `-`).
  - Mínimo 3 caracteres.
  - Debe ser único en todo el sistema.
  - La empresa quedará accesible en `https://{subdomain}.asterisksuite.com`.
- Tener a mano el **CUIT / Nro. de identificación** y la **condición frente al IVA**.

## Cómo crear la empresa

1. Ingresá a **Crear empresa** (`/create-company`).
2. Completá el **nombre** de la empresa (obligatorio).
3. Elegí el **subdomain**. Mientras escribís, el sistema verifica la disponibilidad automáticamente:
   - ✓ verde: disponible → se muestra la URL `{subdomain}.asterisksuite.com`.
   - ✗ rojo: en uso o con formato inválido.
   - El campo se normaliza solo (pasa a minúsculas y quita caracteres no permitidos).
4. Completá los datos fiscales (opcionales, pero recomendados):
   - **CUIT / Identificación**: por ejemplo `20-12345678-9`.
   - **Condición IVA**: Responsable Inscripto, Monotributo o Exento.
5. Completá los datos de contacto (opcionales): **Dirección**, **Teléfono** y **Email**.
6. Presioná **Crear empresa**. Mientras se aprovisiona verás una pantalla de progreso.
7. Al finalizar se muestra una confirmación con la URL de la empresa y el botón **Ingresar a mi empresa**.

El botón **Crear empresa** permanece deshabilitado hasta que haya un nombre, un subdomain válido (mínimo 3, disponible) y no haya un guardado en curso.

## Qué ocurre al crearla (nota de implementación)

El alta de empresa no es solo un registro: el sistema aprovisiona todo lo necesario.

1. Crea la base de datos PostgreSQL `{subdomain}_db`.
2. Crea los esquemas `tenant` y `public`.
3. Aplica el esquema completo (todas las tablas).
4. Carga los **permisos** del sistema y los **roles por defecto**: `admin`, `manager`, `user` y `viewer`.
5. Carga los **catálogos base**: unidades, tipos de documento, secuencias y conceptos bancarios.
6. Asigna el rol `admin` y la membresía **OWNER** al usuario creador.

> Si algo falla durante el aprovisionamiento, la base de datos se elimina y la operación se cancela, para no dejar empresas a medio crear.

## Editar los datos de la empresa

1. Ir a **Configuración → Empresa** (`/settings/company`).
2. Modificar los campos: Nombre, CUIT / Nro. de identificación, Condición IVA, Dirección, Teléfono y Email.
3. Presionar **Guardar cambios**.

Validaciones:

- El **nombre** es obligatorio (mínimo 2 caracteres).
- El **email**, si se completa, debe tener un formato válido.

Solo los usuarios con rol **OWNER** o **ADMIN** pueden editar; el resto ve el formulario deshabilitado con un aviso.

## Seleccionar o cambiar de empresa

Si el usuario pertenece a más de una empresa, desde **Seleccionar empresa** (`/select-company`) puede elegir con qué empresa trabajar. La empresa activa define qué datos, documentos y permisos se muestran en todo el sistema.

## Estados y reglas de negocio

- El **subdomain** debe ser único; no puede repetirse entre empresas activas.
- La **base de datos** `{subdomain}_db` debe ser única.
- Un usuario puede ser **OWNER de hasta 3 empresas**.
- No se puede eliminar a otro usuario **OWNER** ni a uno mismo desde la gestión de miembros.
- El email de un usuario debe ser único en el sistema.

## Problemas frecuentes

| Mensaje / síntoma | Causa | Solución |
|---|---|---|
| "Este subdomain ya está en uso" | Otra empresa usa ese subdomain. | Elegí otro subdomain. |
| "La base de datos ... ya existe" | Quedó una base previa con ese nombre. | Elegí otro subdomain o pedí a soporte que libere la base. |
| "Máximo 3 empresas por usuario" | Alcanzaste el límite como OWNER. | Usá otra cuenta o solicitá una ampliación. |
| "Email inválido" al guardar | El email no tiene formato correcto. | Corregí el email o dejalo vacío. |
| No puedo editar la empresa | Tu rol no es OWNER ni ADMIN. | Pedí a un administrador que te asigne el rol. |

## Ver también

- [Primeros pasos](/primeros-pasos/) — resto del recorrido inicial.
- Usuarios, roles y permisos (próximamente).
- Secuencias y tipos de documento (próximamente).
- Impuestos y configuración fiscal (próximamente).
