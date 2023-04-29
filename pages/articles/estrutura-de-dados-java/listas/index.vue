<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">List's.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png"
      alt="Linha Branca" />

    <section class="pt-20">
      <nuxt-img width="200" style="float: right;" src="/static/images//articles/estrutura-de-dados-java/lista.png"
        alt="Linha Branca" />
      <nav class="structs">
        <ul>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/listas/array-list">ArrayList <span>| ArrayList vs array</span></NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/listas/linked-list">LinkedList <span>| LinkedList vs ArrayList</span></NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/listas/vector">Vector <span>| Vector vs ArrayList</span></NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/listas/stack">Stack <span>| Alternativas????</span></NuxtLink>
          </li>
        </ul>
      </nav>
    </section>

    <div class="clear-both"></div>

    <article class="pt-10">
      <DataTable :value="listas" tableStyle="min-width: 50rem">
        <Column field="tipo" header="Tipo"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="detalhes" header="detalhes"></Column>
      </DataTable>
    </article>

  </main>
  <article-NextContent content="ArrayList" linkcontent="/articles/estrutura-de-dados-java/listas/array-list"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';

.structs{ ul { li { a {
  font-size: 20px;
  span {
    font-size: 16px;
    color: white;
  }
}}}}
</style>

<script>
export default {
  data() {
    return {
      listas: [
        { tipo: 'ArrayList', descricao: 'Array dinâmico', detalhes: 'Não é thread-safe' },
        { tipo: 'LinkedList', descricao: 'Node duplo', detalhes: 'Elemento aponta para o próximo e para elemento anterior.' },
        { tipo: 'Vector', descricao: 'Array dinâmico', detalhes: 'ArrayList só que thread-safe' },
        { tipo: 'Stack', descricao: 'Stack LIFO', detalhes: 'Ele já tá defasado, troque por Deque' },
      ]
    }
  }
}
</script>

<script setup>
useHead({
  title: 'Listas',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { property: 'og:title', content: 'Listas' },

    { name: 'description', content: 'Listas | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'Listas | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'Listas | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'application-name', content: 'Listas | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'Listas | Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, List, Listas, ArrayList, LinkedList, Vector, Stack'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/lista.png'},
    { name: 'og:image:width', content: '200'},
    { name: 'og:image:height', content: '200'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
