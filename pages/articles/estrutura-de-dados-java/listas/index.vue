<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Listas.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png"
      alt="Linha Branca" />


    <section class="pt-20">
      <nav>
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

    <article class="pt-10">
      <DataTable :value="listas" tableStyle="min-width: 50rem">
        <Column field="tipo" header="Tipo"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="detalhes" header="detalhes"></Column>
      </DataTable>
    </article>

  </main>
</template>

<style lang="scss">
@import 'assets/articles/base';

a {
  font-size: 20px;
  span {
    font-size: 16px;
    color: white;
  }
}
</style>

<script>
export default {
  data() {
    return {
      listas: [
        { tipo: 'ArrayList', descricao: 'Array dinâmico', detalhes: 'Não é thread-safe' },
        { tipo: 'LinkedList', descricao: 'Node duplo', detalhes: 'Elemento aponta para o próximo e para elemento anterior.' },
        { tipo: 'Vector', descricao: 'Array dinâmico', detalhes: 'ArrayList só que thread-safe' },
        { tipo: 'Stack', descricao: 'Stack LIFO', detalhes: 'ele já tá defasado, troque por Deque' },
      ]
    }
  }
}
</script>
