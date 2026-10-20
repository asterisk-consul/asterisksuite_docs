# Estado de la documentación

> Archivo **generado** por `pnpm docs:report` — no editar a mano. Fuente de verdad: `docs-status.json`.

## Resumen

| | |
| --- | --- |
| Última versión de la app | **v0.83.0-alpha** (2026-10-20) |
| Documentación al día hasta | **v0.83.0-alpha** |
| Última revisión de docs | 2026-10-20 |
| Versiones pendientes de revisar | **0** |

## Pendientes

✅ La documentación cubre todas las versiones publicadas de la app.

## Cómo actualizar este estado

```bash
pnpm docs:status                       # ver el estado y los pendientes
pnpm docs:report                       # regenerar DOCS_STATUS.md y la página del portal
pnpm docs:status -- mark 0.83.0-alpha  # marcar hasta qué versión quedó documentado
pnpm docs:status -- skip 0.84.0-alpha --note "solo rendimiento"
pnpm docs:status -- partial 0.85.0-alpha --note "falta X página"
pnpm docs:check                        # sale con error si hay pendientes
```

Después de cada versión nueva de la app: revisar los cambios, actualizar los contenidos,
ejecutar `pnpm docs:report` y commitear `docs-status.json` junto con los `.md`.
