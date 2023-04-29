<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Queue's.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png"
      alt="Linha Branca" />


    <section class="pt-20">
      <nuxt-img width="200" style="float: right;" src="/static/images//articles/estrutura-de-dados-java/fila.png"
        alt="Linha Branca" />
      <nav class="structs">
        <ul>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/queues/priority-queue">PriorityQueue;</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/queues/array-deque">ArrayDeque;</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>

    <div class="clear-both"></div>

    <article class="pt-10">
      <DataTable :value="queues" tableStyle="min-width: 50rem">
        <Column field="tipo" header="Tipo"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="detalhes" header="detalhes"></Column>
      </DataTable>
    </article>

    <h3>Outras "queues"</h3>

    <p>&nbsp;&nbsp;Vimos só ArrayDeque e PriorityQueue, mas tem outras mais principais de outras interfaces</p>
<pre class="pt-2">
  - <b>BlockingQueue - </b>abstrata um tipo de fila que espera que a fila
      não seja vazia ao recuperar um elemento e aguarda que o espaço fique
      disponível na fila ao armazenar um elemento;

  - <b>BlockingDeque - </b>é semelhante a BlockingQueue, mas para filas
      de extremidade dupla. É sub interface do BlockingQueue.</pre>


  </main>
  <article-NextContent content="PriorityQueue" linkcontent="/articles/estrutura-de-dados-java/queues/priority-queue"></article-NextContent>
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
      queues: [
        { tipo: 'PriorityQueue', descricao: 'Queue simples', detalhes: '	FIFO, primeiros elementos a entrar são os primeiros a sair.' },
        { tipo: 'ArrayDeque	', descricao: 'Deque -> queue dupla', detalhes: 'É possível inserir e remover dados da entrada e da saída.' }
      ]
    }
  }
}
</script>

<script setup>
useHead({
  title: "Queue's",
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { property: "og:title", content: "Queue's" },

    { name: 'description', content: 'Queue | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'Queue | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'Queue | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'application-name', content: 'Queue | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'Queue | Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, Queue, PriorityQueue, ArrayDeque'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/fila.png'},
    { name: 'og:image:width', content: '200'},
    { name: 'og:image:height', content: '200'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
