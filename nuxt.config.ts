export default defineNuxtConfig({
  css: [
    '~/assets/_colors.scss',
    '~/assets/_fonts.scss',
    '~/assets/_base.scss'
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [
        //{ rel: 'stylesheet', href: '/static/styles/main.css' }
      ]
    },
  }
})
