<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Vector.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Como funciona? | ArrayList vs Vector</h3>

      <p><b>&nbsp;&nbsp;<code>Vector</code> é basicamente um ArrayList sincronizado</b>, o que significa que é seguro
        para uso em ambientes com várias threads (multi-thread), e é claro que isso diminui sua performance em
        comparação com <code>ArrayList</code>. O <code>ArrayList</code> costuma manter 50% do seu tamanho,
        já o <code>Vector</code> aumenta 100% por tamanho, ou seja, em memória ele tem o
        dobro de capacidade que seu tamanho real.</p>

      <p>Uma visualização disso é:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/vector-x-array-list.png" alt="Vector vs ArrayList Java" />

      <p><b>Em resumo, use Vector quando precisa de um ArrayList que é thread-safe.</b></p>
    </article>
  </main>
  <article-NextContent content="Stack" linkcontent="/articles/estrutura-de-dados-java/listas/stack"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>

<script setup>
useHead({
  title: 'Vector',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { property: 'og:title', content: 'Vector' },

    { name: 'description', content: 'Vector vs ArrayList | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'Vector vs ArrayList | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'Vector vs ArrayList | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'application-name', content: 'Vector vs ArrayList | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'Vector vs ArrayList| Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, List, Listas, Vector, Vector vs ArrayList'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/vector-x-array-list.png'},
    { name: 'og:image:width', content: '1969'},
    { name: 'og:image:height', content: '1303'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
