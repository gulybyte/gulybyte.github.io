export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [
        { rel: 'stylesheet', href: '/assets/static/styles/_colors.css' },
        { rel: 'stylesheet', href: '/assets/static/styles/_fonts.css' },
        { rel: 'stylesheet', href: '/assets/static/styles/main.css' }
      ]
    },
  }
})
