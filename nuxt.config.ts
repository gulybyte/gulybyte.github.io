// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-10',
  devtools: { enabled: true },

  ssr: true,
  routeRules: {
    '/': { isr: 60 },
    '/posts/**': { isr: 60 },
    '/api/*': { cache: { maxAge: 20 } },
    '/create-post': { swr: true },
    '/about': { static: true }
  },

  modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],

  css: [
    'assets/_base.scss'
  ],
  googleFonts: {
    preload: true,
    display: 'swap',
    families: {
      'Playwrite+CU': {
        wght: '200..400'
      }
    }
  },

  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { 'http-equiv': 'content-language', content: 'pt-br' },
        { name: 'author', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'developer', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'creator', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'publisher', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'theme-color', content: '#0A192F' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'copyright', content: 'https://github.com/gulybyte/gulybyte.github.io/blob/master/Licence' }
      ]
    },
  }
})
