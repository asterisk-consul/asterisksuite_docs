export default defineNuxtConfig({
  extends: ['docus'],
  modules: [ 'nuxt-studio'],
  devtools: { enabled: true },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  compatibilityDate: '2025-08-26',
  studio: {    // Esto define que entrarás al editor en localhost:3000/admin
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'asterisk-consul',
      repo: 'asterisksuite-docs',
      branch: 'main',
      // Si tus archivos están en la raíz, déjalo vacío
      rootDir: '',
      private: false,
    },
    editor: {
      commands: {
        exclude: ['blockquote'],
      },
    },
  },
})