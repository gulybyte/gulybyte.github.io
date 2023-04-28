<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Map's.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <section class="pt-20">
      <nav class="structs">
        <ul>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/map/hash-map">HashMap;</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/map/array-deque">LinkedHashMap;</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/map/array-deque">TreeMap;</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>

    <article class="pt-10">
      <DataTable :value="maps" tableStyle="min-width: 50rem">
        <Column field="tipo" header="Tipo"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="detalhes" header="detalhes"></Column>
      </DataTable>
    </article>

  </main>
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
      maps: [
        { tipo: 'HashMap', descricao: 'key-value (tabela hash)', detalhes: 'sem ordem' },
        { tipo: 'LinkedHashMap', descricao: 'key-value (tabela hash)', detalhes: 'ordem inserção' },
        { tipo: 'TreeMap', descricao: 'key-value (RB-Tree)', detalhes: 'ordem das chaves ou comparador' }
      ]
    }
  }
}
</script>
