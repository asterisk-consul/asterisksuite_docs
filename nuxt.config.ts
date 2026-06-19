export default defineNuxtConfig({
  extends: ['docus'],
  devServer: {
      host: '0.0.0.0', // <- debe estar así
      port: 3000
  },
  site: {
    name: 'AsteriskSuite Documentation',
  },

  mcp: {
  enabled: false,
},
  llms: {
    contentRawMarkdown: false,
  },
  
  modules: ['nuxt-studio'],
   studio: {
    repository: {
      provider: 'github',
      owner: 'asterisk-consul',
      repo: 'asterisksuite_docs',
      branch: 'main' // Optional, defaults to 'main'
    }
  }
})