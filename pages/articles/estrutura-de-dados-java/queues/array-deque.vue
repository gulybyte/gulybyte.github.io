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
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>
