import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeSix from '@six-tech/starlight-theme-six'

export default defineConfig({
  site: 'https://docs.asterisksuite.cloud',

  vite: {
    build: {
      cssMinify: 'esbuild'
    }
  },

  integrations: [
    starlight({
      title: 'Asterisk Suite',
      description: 'Documentación funcional y técnica de Asterisk Suite',

      plugins: [
        starlightThemeSix({
          navLinks: [
            {
              label: 'GitHub',
              link: 'https://github.com/asterisk-consul',
              attrs: { target: '_blank', rel: 'noopener' }
            }
          ],
          footerText: 'Asterisk Suite — Documentación'
        })
      ],

      defaultLocale: 'es',

      logo: {
        light: './public/logo.png',
        dark: './public/logo-white.png',
        alt: 'Asterisk Suite',
        replacesTitle: true
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
