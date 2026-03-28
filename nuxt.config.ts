// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    'nuxt-mapbox'
  ],
  colorMode: {
    preference: 'light'
  },
  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  },
  css: ['~/assets/css/main.css'],
  ui: {
    safelistColors: ['black', 'primary', 'secondary']
  },
  image: {
    provider: 'netlify'
  },
  compatibilityDate: '2024-08-22'

})