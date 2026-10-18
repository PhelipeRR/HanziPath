export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  app: { head: { title: 'HanziPath · 汉字之路', meta: [{ name: 'theme-color', content: '#0e766e' }] } },
  nitro: { experimental: { database: true } }
})
