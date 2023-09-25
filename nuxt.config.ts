export default defineNuxtConfig({
  css: [
    // css global
    'assets/_colors.scss',
    'assets/_fonts.scss',
    'assets/_base.scss',
    'assets/_document-driven-page.scss',


    // primevue configs
    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primevue/resources/primevue.min.css"
  ],
  build: {
    transpile: ["primevue"],
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '',
        Allow: '*',
        CrawlDelay: 1,
      }
    ]
  ],
  content: {
    contentHead: true,
    documentDriven: true,
    /* markdown: {
      mdc: true
    }, */
    highlight: {
      theme: 'monokai', // github-dark também é top TODO: TRETA DA COR MARROM AO ARRASTAR. COLOCAR LATEX MATH. COMPONENT PRÓXIMO MARKDOWN. TODOS INTERFACE DEVEM TER DIFERENCA TABELA, E BENCHMARK DE SUAS CLASSES. TODAS AS CLASSES DEVEM TER ALÉM DAS IMAGEM TAMBÉM EXEMPLO DE CÓDIGO CONDIZENTE COM AQUELA IMAGEM, REFAZER TODAS AS IMAGENS (FICAREM PADRÃO IGUAL)
      preload: [
        'java', 'js',
        'markdown', 'md',
        'c'
      ]
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
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'developer', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'creator', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'publisher', content: 'Guilherme Luis - gulybyte@gmail.com' },
        { name: 'theme-color', content: '#0A192F' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'copyright', content: 'https://github.com/gulybyte/gulybyte.github.io/blob/main/Licence' }
      ]
    },
  }
})
