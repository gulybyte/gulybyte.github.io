<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Set's.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png"
      alt="Linha Branca" />


    <section class="pt-20">
      <nuxt-img width="200" style="float: right;" src="/static/images//articles/estrutura-de-dados-java/set.png"
        alt="Linha Branca" />
      <nav>
        <ul>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/set/hash-set">HashSet;</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/set/linked-hash-set">LinkedHashSet;</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/set/tree-set">TreeSet;</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>

    <div class="clear-both"></div>

    <article>
      <DataTable :value="types_set" tableStyle="min-width: 50rem">
        <Column field="tipo" header="Tipo"></Column>
        <Column field="descricao" header="Armazenamento"></Column>
        <Column field="detalhes" header="Ordenação"></Column>
      </DataTable>
    </article>

    <h3>Performance entre elas <small>(<a target="_blank"
      href="https://gist.github.com/gulybyte/9373c09e0b92d698945afc451527b853">Benchmark</a>)</small> </h3>
    <p>&nbsp;&nbsp;Obviamente <code>HashSet</code> sempre vai se sair na frente, afinal ela não tem ordem,
      logo depois sem muita diferença e ordenada por inserção temos <code>LinkedHashSet</code>,
      por fim no geral sendo dobro mais lenta porém com sistemas de ordenação completo <code>TreeSet</code>.</p>

    <article>
      <DataTable :value="benchmark_set" tableStyle="min-width: 50rem">
        <Column field="op" header="Operação"></Column>
        <Column field="hs" header="HashSet"></Column>
        <Column field="lhs" header="LinkedHashSet"></Column>
        <Column field="ts" header="TreeSet"></Column>
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
      types_set: [
        { tipo: 'HashSet', descricao: 'tabela hash', detalhes: 'Sem ordem' },
        { tipo: 'LinkedHashSet	', descricao: 'tabela hash', detalhes: 'Ordem por inserção' },
        { tipo: 'TreeSet	', descricao: 'árvore', detalhes: '	Ordem DESC ou ASC, fornecido na criação dela' }
      ],
      benchmark_set: [
        { op: 'add', hs: '35.076.868', lhs: '33.911.887', ts: '68.956.371' },
        { op: 'get', hs: '986.795', lhs: '1.171.634', ts: '	2.420.362' },
        { op: 'remove', hs: '1.298.586', lhs: '1.772.075', ts: '1.889.906' }
      ]
    }
  }
}
</script>
