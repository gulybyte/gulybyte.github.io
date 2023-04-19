export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/static/styles/colors.scss";',
        },
      },
    },
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [
        { rel: 'stylesheet', href: '/assets/static/styles/_colors.scss' },
        { rel: 'stylesheet', href: '/assets/static/styles/_fonts.scss' },
        { rel: 'stylesheet', href: '/assets/static/styles/main.scss' }
      ]
    },
  }
})
