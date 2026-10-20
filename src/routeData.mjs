import { buildBanner, getDocsState } from '../scripts/status-lib.mjs'

/**
 * Middleware de rutas de Starlight: inyecta en **todas** las páginas el banner de
 * estado de la documentación (hasta qué versión de la app están los docs y cuántas
 * versiones quedaron pendientes de revisar).
 *
 * - Se configura en astro.config.mjs con `routeMiddleware: './src/routeData.mjs'`.
 * - El contexto de Astro entrega los datos de la ruta en `context.locals.starlightRoute`;
 *   Banner.astro los lee desde `Astro.locals.starlightRoute.entry.data.banner`.
 * - Los datos salen de docs-status.json (+ versions.json del frontend si está disponible),
 *   así el build del contenedor (que solo copia este paquete) también muestra el banner.
 */
const banner = buildBanner(getDocsState())
const STATUS_PAGE = 'estado-de-la-documentacion'

export function onRequest(context, next) {
  const route = context.locals?.starlightRoute
  const alreadyHasBanner = Boolean(route?.entry?.data?.banner)
  const isStatusPage = String(route?.id ?? route?.entry?.id ?? '').includes(STATUS_PAGE)

  if (banner && route?.entry?.data && !alreadyHasBanner && !isStatusPage) {
    route.entry.data.banner = banner
  }

  return next()
}
