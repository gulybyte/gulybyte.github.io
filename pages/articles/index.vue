<template>
  <main class="container-articles">
    <article class="articles">
      <NuxtLink href="/articles/estrutura-de-dados-java">Serie Estrutura de Dados Completa.</NuxtLink>
    </article>
  </main>
</template>

<style lang="scss">
@use 'assets/colors' as c;

.container-articles {
  padding: 0;
  margin: 30px auto;
  width: 80% !important;
}

.articles {
  position: relative;
  background-color: c.$dark-color;
  padding: 10px;
}
</style>
