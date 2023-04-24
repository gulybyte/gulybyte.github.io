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
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>
