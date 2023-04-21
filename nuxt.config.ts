export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  css: [
    // css global
    '~/assets/_colors.scss',
    '~/assets/_fonts.scss',
    '~/assets/_base.scss',

    // primevue configs
    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primevue/resources/primevue.min.css"
  ],
  build: {
    transpile: ["primevue"]
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { 'http-equiv': 'content-language', content: 'pt-br' },
        //{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
      ],
      link: [
        //{ rel: 'stylesheet', href: '/static/styles/main.css' }
      ]
    },
  }
})
