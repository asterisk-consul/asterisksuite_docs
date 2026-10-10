import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeSix from '@six-tech/starlight-theme-six'
import { fileURLToPath } from 'node:url'

const customSiteTitle = fileURLToPath(new URL('./src/components/SiteTitle.astro', import.meta.url))

export default defineConfig({
  site: 'https://docs.asterisksuite.cloud',

  vite: {
    build: {
      cssMinify: 'esbuild'
    },
    plugins: [
      {
        name: 'override-six-site-title',
        enforce: 'pre',
        resolveId(source, importer) {
          const isPackageSpecifier =
            source === '@six-tech/starlight-theme-six/overrides/SiteTitle.astro'
          const isThemeHeaderImport =
            source === './SiteTitle.astro' &&
            !!importer &&
            /starlight-theme-six[\\/]+src[\\/]+overrides[\\/]Header\.astro/.test(importer)

          if (isPackageSpecifier || isThemeHeaderImport) return customSiteTitle

          return null
        }
      }
    ]
  },

  integrations: [
    starlight({
      title: 'Asterisk Suite',
      description: 'Documentación funcional y técnica de Asterisk Suite',

      plugins: [
        starlightThemeSix({
          navLinks: [
            { label: 'Docs', link: '/docs/' }
          ],
          footerText: 'Asterisk Suite — Documentación'
        })
      ],

      defaultLocale: 'es',

      locales: {
        root: { label: 'Español', lang: 'es' }
      },

      logo: {
        light: './public/logo-mark.png',
        dark: './public/logo-mark-white.png',
        alt: 'Asterisk Suite'
      },

      favicon: '/favicon.svg',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/asterisk-consul'
        }
      ],

      lastUpdated: true,

      customCss: ['./src/styles/custom.css'],

      components: {
        Sidebar: './src/components/Sidebar.astro'
      },

      head: [
        {
          tag: 'script',
          content: `
            window.addEventListener('load', function () {
              document.querySelectorAll('.container-sidebar-entry').forEach(function (entry) {
                var titleEl = entry.querySelector('.entry-title');
                if (!titleEl) return;
                var title = titleEl.textContent.trim();
                var hasCurrent = !!entry.querySelector('a[aria-current="page"]');
                var stored = localStorage.getItem('sidebar-' + title);
                if (hasCurrent) {
                  entry.classList.remove('collapsed');
                  entry.classList.add('is-expanded');
                } else if (stored === null) {
                  entry.classList.add('collapsed');
                  entry.classList.remove('is-expanded');
                }
              });
            });
          `
        }
      ],

      sidebar: [
        {
          label: 'Primeros pasos',
          items: [
            'primeros-pasos',
            'primeros-pasos/configuracion-inicial-empresa'
          ]
        },
        {
          label: 'Productos',
          items: [{ autogenerate: { directory: 'configuracion/productos' } }]
        },
        {
          label: 'Contrapartes',
          items: [{ autogenerate: { directory: 'configuracion/contrapartes' } }]
        },
        {
          label: 'Depósitos y ubicaciones',
          items: [{ autogenerate: { directory: 'configuracion/depositos-ubicaciones' } }]
        },
        {
          label: 'Monedas y cotizaciones',
          items: [{ autogenerate: { directory: 'configuracion/monedas' } }]
        },
        {
          label: 'Secuencias y tipos de documento',
          items: [{ autogenerate: { directory: 'configuracion/documentos' } }]
        },
        {
          label: 'Impuestos y configuración fiscal',
          items: [{ autogenerate: { directory: 'configuracion/impuestos' } }]
        },
        {
          label: 'Cuentas contables',
          items: ['configuracion/contabilidad']
        },
        {
          label: 'Ventas',
          items: [{ autogenerate: { directory: 'procesos/ventas' } }]
        },
        {
          label: 'Compras',
          items: [{ autogenerate: { directory: 'procesos/compras' } }]
        },
        {
          label: 'Tesorería',
          items: [{ autogenerate: { directory: 'procesos/tesoreria' } }]
        },
        {
          label: 'Stock y fabricación',
          items: [{ autogenerate: { directory: 'procesos/stock' } }]
        },
        {
          label: 'Logística',
          items: [{ autogenerate: { directory: 'procesos/logistica' } }]
        },
        {
          label: 'Operaciones internacionales',
          items: [{ autogenerate: { directory: 'procesos/operaciones-internacionales' } }]
        },
        {
          label: 'Administración',
          items: [
            'administracion',
            'administracion/usuarios-roles-permisos',
            'administracion/usuarios-roles-permisos/gestionar-usuarios',
            'administracion/usuarios-roles-permisos/gestionar-roles'
          ]
        },
        {
          label: 'Solución de problemas',
          items: [{ autogenerate: { directory: 'solucion-de-problemas' } }]
        }
      ]
    })
  ]
})
