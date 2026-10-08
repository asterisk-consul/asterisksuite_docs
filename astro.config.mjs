import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://docs.asterisksuite.cloud',

  integrations: [
    starlight({
      title: 'Asterisk Suite',
      description: 'Documentación funcional y técnica de Asterisk Suite',

      defaultLocale: 'es',

      logo: {
        src: './src/assets/logo.svg',
        alt: 'Asterisk Suite'
      },

      favicon: '/favicon.ico',

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
