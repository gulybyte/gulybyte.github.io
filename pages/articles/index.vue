<template>
  <main class="container-articles">
    <article class="articles">
      <NuxtLink href="/articles/estrutura-de-dados-java">Serie Estrutura de Dados Completa.</NuxtLink>
    </article>
  </main>
</template>

<style lang="scss">
@use 'assets/colors' as c;

.container-articles {
  padding: 0;
  margin: 30px auto;
  width: 80% !important;
}

.articles {
  position: relative;
  background-color: c.$dark-color;
  padding: 10px;
}
</style>

<script setup>
useHead({
  title: 'Artigos',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles' }
  ],
  meta: [
    { property: 'og:title', content: 'Artigos' },

    { name: 'description', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'excerpt', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'og:description', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'application-name', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'og:site_name', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Séries, Algoritmos e Estrutura de Dados Java, Banco de Dados'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/icon.png'},
    { name: 'og:image:width', content: '75'},
    { name: 'og:image:height', content: '75'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'og:url', content: 'https://gulybyte.github.io/articles'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
