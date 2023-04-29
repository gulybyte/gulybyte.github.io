<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Stack.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Como funciona?</h3>

      <p><b>&nbsp;&nbsp;<code>Stack</code> é o que o próprio nome diz, uma pilha</b>. Essa é uma estrutura clássica
        tipo LIFO (last-in first-out), o que significa que o ultimo a entrar é o primeira sair.</p>

      <p><b>&nbsp;&nbsp;Exemplo código:</b></p>
      <article-CodeArticles content="/ed/listas/stack"></article-CodeArticles>

      <p>Uma visualização isso é:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/stack.png" alt="Stack Java" />

      <p>&nbsp;&nbsp;No entanto, saiba que na atualidade é recomendado mais o uso de Class que derivem diretamente de Deque
        para quando precisar de um Stack. Isso porque tem as mesmas funcionalidades, são mais flexíveis e mais performáticas.</p>
    </article>
  </main>
  <article-NextContent content="Queue (próxima interface)" linkcontent="/articles/estrutura-de-dados-java/queues"></article-NextContent>

</template>

<style lang="scss">
@import 'assets/articles/base';
</style>

<script setup>
useHead({
  title: 'Stack',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { property: 'og:title', content: 'Stack' },

    { name: 'description', content: 'Stack Alternativas???? | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'Stack Alternativas???? | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'Stack Alternativas???? | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'application-name', content: 'Stack Alternativas???? | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'Stack Alternativas????| Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, List, Listas, Stack, Stack Alternativas????'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/stack.png'},
    { name: 'og:image:width', content: '2363'},
    { name: 'og:image:height', content: '1950'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
