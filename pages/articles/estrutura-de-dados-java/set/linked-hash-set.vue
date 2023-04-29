<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">LinkedHashSet.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Como funciona?</h3>

      <p>&nbsp;&nbsp;É uma estrutura de dados interessante, semelhante ao <code>HashSet</code>, em que não temos
        duplicação de elementos, mas com uma diferença importante: nela, a ordem pela inserção é mantida.
        Mas como isso é possível? Basicamente, o <code>LinkedHashSet</code> trabalha com outras <b>duas estruturas
        de dados:</b> a própria <b><code>HashSet</code></b>, pois ela herda dela, <b>e uma lista duplamente ligada</b>
        que é adicionada para manter a ordem de inserção.</p>
        <pre class="pt-2" style="border: 1px solid rgb(71 85 105);">
  - Onde HashSet é a tabela de hash com os hashes dos elementos
      que serve para não ter duplicata de elementos,
      e como valor um ponteiro para a lista vinculada;

  - A lista vinculada (que é uma lista duplamente ligada)
      é quem tem os elementos e serve para manter
      a ordem de inserção.</pre>

      <p>&nbsp;&nbsp;Em visualização fica um pouco mais simples, (observe que aqui já estamos mostrando junto com uma colisão):</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png"
        alt="LinkedHashSet com colisão Java" />

      <p><b>Em resumo é uma estrutura para quando não quer elementos duplicados e depende de ordenação pela inserção,
          em caso de colisões como visto, é feito igual da HashSet porém seu valor é um ponteiro para
          seu elemento na lista vinculada.</b></p>

    </article>
  </main>
  <article-NextContent content="TreeSet" linkcontent="/articles/estrutura-de-dados-java/set/tree-set"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>

<script setup>
useHead({
  title: 'LinkedHashSet',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { property: "og:title", content: 'LinkedHashSet' },

    { name: 'description', content: 'LinkedHashSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'LinkedHashSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'LinkedHashSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'application-name', content: 'LinkedHashSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'LinkedHashSet | Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, Set, LinkedHashSet'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png'},
    { name: 'og:image:width', content: '3244'},
    { name: 'og:image:height', content: '2424'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
