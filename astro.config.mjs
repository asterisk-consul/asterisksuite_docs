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
            { label: 'Docs', link: '/' }
          ],
          footerText: 'Asterisk Suite — Documentación'
        })
      ],

      defaultLocale: 'es',

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

      sidebar: [
        {
          label: 'Primeros pasos',
          items: [{ autogenerate: { directory: 'primeros-pasos' } }]
        },
        {
          label: 'Procesos',
          items: [{ autogenerate: { directory: 'procesos' } }]
        },
        {
          label: 'Configuración',
          items: [{ autogenerate: { directory: 'configuracion' } }]
        },
        {
          label: 'Administración',
          items: [{ autogenerate: { directory: 'administracion' } }]
        },
        {
          label: 'Solución de problemas',
          items: [{ autogenerate: { directory: 'solucion-de-problemas' } }]
        }
      ]
    })
  ]
})
