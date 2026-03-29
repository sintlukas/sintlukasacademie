// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    githubClientId: '',
    githubClientSecret: '',
    public: {
      siteUrl: ''
    }
  },
  build: {
    transpile: ['@egjs/vue-grid']
  },
  // content: {
  //   documentDriven: true
  // },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/css/main.css'],
  ui: {
    safelistColors: ['black', 'primary', 'secondary']
  },
  image: {
    provider: 'ipx'
  },
  compatibilityDate: '2024-08-22'

})