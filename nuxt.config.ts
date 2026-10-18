export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  app: { head: { title: 'HanziPath · 汉字之路', meta: [{ name: 'theme-color', content: '#0e766e' }], link: [{ rel: 'manifest', href: '/manifest.webmanifest' }] } },
  nitro: { experimental: { database: true } }
})
