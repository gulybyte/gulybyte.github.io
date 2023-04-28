<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">PriorityQueue.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Como funciona?</h3>

      <p>&nbsp;&nbsp;Essa deve ser a mais fácil. Como o nome diz, uma fila de prioridade, <b>é exatamente
        como uma fila de supermercado, o primeiro da fila é o primeiro a sair.</b></p>

      <p>&nbsp;&nbsp;Visualização é:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/priority-queue.png" alt="PriorityQueue Java" />

      <p>&nbsp;&nbsp;Eu sei que pode parecer difícil imaginar um cenário de uso real para filas,
        mas vou dar um bom exemplo. Imagine que na sua aplicação outras APIs se conectam a você e,
        de tempos em tempos, enviam dados em formato CSV via cron. Você precisa processar esses dados
        e salvá-los em um banco de dados, mas antes disso, precisa carregá-los na memória RAM para não
        ter problema de N+1. Nesse caso, você poderia usar um ArrayList para armazenar os dados,
        mas pense bem: é um processo em que você pega vários e vários dados, os processa em
        alguma estrutura de dados em sequência e, no final, os envia em sequência para a base de
        dados. Nesse cenário, uma estrutura de filas, ou melhor, uma estrutura de filas que já é
        feita especificamente para um cenário como esse e é performática seria melhor. É aí que entra
        a PriorityQueue, uma fila que oferece uma ordem específica para os elementos com base em sua
        prioridade. Ela é ideal para esse tipo de cenário, pois permite que você processe e envie os
        dados em ordem de prioridade, evitando gargalos e garantindo que tudo seja executado de forma
        eficiente.</p>

    </article>
  </main>
  <article-NextContent content="ArrayDeque" linkcontent="/articles/estrutura-de-dados-java/queues/array-deque"></article-NextContent>

</template>

<style lang="scss">
@import 'assets/articles/base';
</style>
