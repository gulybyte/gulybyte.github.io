<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Map's.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <section class="pt-20">
      <nuxt-img width="200" style="float: right;" src="/static/images/articles/estrutura-de-dados-java/map.svg"
        alt="Linha Branca" />
      <nav class="structs">
        <ul>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/map/hash-map">HashMap;</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>

    <div class="clear-both"></div>

    <article class="pt-10">
      <DataTable :value="maps" tableStyle="min-width: 50rem">
        <Column field="tipo" header="Tipo"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="detalhes" header="detalhes"></Column>
      </DataTable>
    </article>

    <h3>Outros...</h3>
    <p>&nbsp;&nbsp;Se você leu a sessão <NuxtLink href="/articles/estrutura-de-dados-java/set">Set</NuxtLink>
      e leu o <NuxtLink href="/articles/estrutura-de-dados-java/map/hash-map">HashMap</NuxtLink> então
      você já sabe como funciona <code>LinkedHashMap</code> e <code>TreeMap</code>, a diferença
      é que o hash no <code>Map</code> diferente de <code>Set</code>, é a <b>key</b>.</p>

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
