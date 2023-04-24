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
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>
