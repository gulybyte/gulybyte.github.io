<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">ArrayDeque.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Como funciona?</h3>

      <p><b>&nbsp;&nbsp;É igual a estrutura anterior, mas você pode fazer ambas operações e ambas as cabeças.</b></p>
      <p>&nbsp;&nbsp;A visualização geral é essa:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/array-deque.png" alt="ArrayDeque Java" />

      <p>&nbsp;&nbsp;Embora seja difícil imaginar um cenário prático para o uso de uma estrutura de dados como
        ArrayDeque, há um caso em que ela pode ser muito útil. Suponha que você esteja lidando com uma aplicação
        que recebe eventos em uma ordem específica, como uma Stack, em que os últimos eventos a chegar são os
        primeiros a serem processados. No entanto, há um limite de tamanho para essa Stack e, eventualmente,
        muitos eventos começam a chegar ao mesmo tempo, tornando o processamento lento. Em uma estrutura de
        dados convencional, seria necessário pausar a chegada de eventos e processar todos os elementos até
        o final da Stack, para que os eventos mais antigos não fiquem defasados. Mas com a ArrayDeque, é
        possível processar a fila simultaneamente pelas duas extremidades, mantendo um equilíbrio perfeito
        e excelente performance. Além disso, caso o limitador seja acionado, é possível deixar os eventos
        chegarem enquanto o processamento é feito no final da fila, sem precisar pausar o recebimento de
        novos eventos. Com isso, é possível manter uma estrutura de dados leve e performática, sem
        sacrificar a velocidade de processamento.</p>

    </article>
  </main>
  <article-NextContent content="Set (próxima interface)" linkcontent="/articles/estrutura-de-dados-java/set"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>

<script setup>
useHead({
  title: 'ArrayDeque',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { property: "og:title", content: 'ArrayDeque' },

    { name: 'description', content: 'ArrayDeque | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'ArrayDeque | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'ArrayDeque | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'application-name', content: 'ArrayDeque | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'ArrayDeque | Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, Queue, ArrayDeque'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-deque.png'},
    { name: 'og:image:width', content: '3638'},
    { name: 'og:image:height', content: '1419'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
