<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">LinkedList.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />


    <article class="pt-4">
      <h3>Como funciona?</h3>

      <p><b>&nbsp;&nbsp;Basicamente é uma estrutura chamada Node, ou seja, estrutura com seus valores
        que apontam para outros nós</b>. Fuçando o código fonte Java olha só o que eu encontrei:</p>
      <article-CodeArticles content="/ed/listas/node-structure"></article-CodeArticles>

      <p>&nbsp;&nbsp;Ou seja, de formas rudimentar concluímos que nessa estrutura temos:</p>
      <pre class="pt-2">
  - <b>prev -</b> endereço do registro anterior;
  - <b>element -</b> elementos em si, os valores nele;
  - <b>next -</b> endereço do próximo registro;</pre>

      <p>&nbsp;&nbsp;Isso significa que cada elemento possui um ponteiro para seu próximo e/ou anterior nessa lista.</p>

      <h3>ArrayList vs LinkedList</h3>

      <p>&nbsp;&nbsp;Creio que a essa altura do campeonato você já tenha quase que entendido o funcionamento do
        <code>LinkedList</code>, mas agora qual sua diferença em relação a estrutura estudada anteriormente
        (<code>ArrayList</code>)?. Vamos ver essa tabela de benchmark:</p>

      <DataTable :value="benchmark" tableStyle="min-width: 50rem">
        <Column field="operacao" header="Operação"></Column>
        <Column field="arraylist" header="ArrayList"></Column>
        <Column field="linkedlist" header="LinkedList"></Column>
      </DataTable>

      <p>&nbsp;&nbsp;Para adição no final <code>ArrayList</code> é levemente mais rápido. Para adições em posições aleatórias
        <code>LinkedList</code> é 10x mais rápido. Para get não tem jeito <code>ArrayList</code> é ordens
        de grandeza mais rápido (isso se da pois não é possível fazer aritmética de busca por ponteiro em Nodes). Remoção
        em posição aleatória <code>LinkedList</code> é pouco mais de 3x mais rápido. Em resumo <b>
        <code>ArrayList</code> para quando tem inserção no final e quando tem muita busca e <code>LinkedList</code>
        para quando tem remoção e adição em posição aleatória</b>.</p>

      <p>&nbsp;&nbsp;Em resumo <code>LinkedList</code> é muito mais rápido para inserções e remoções em
        posições aleatórias.<code>ArrayList</code> precisa redimensionar seu tamanho, já <code>LinkedList</code>
        faz algo assim:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/linked-list.png" alt="LinkedList Java" />

      <p>&nbsp;&nbsp;Por ao adicionar novo elemento, não precisa redimensionar tamanho objeto,
        você apenas precisar mudar dois endereços, e sem duplicata do seu objeto.</p>

    </article>

  </main>
</template>

<script>
export default {
  data() {
    return {
      benchmark: [
        { operacao: 'add (final lista)', arraylist: '3.064.831', linkedlist: '4.056.815' },
        { operacao: 'add (posição aleatoria lista)', arraylist: '188.153.952', linkedlist: '20.694.666' },
        { operacao: 'get (posição aleatoria lista)', arraylist: '81.242', linkedlist: '112.373.462' },
        { operacao: 'remove (posição aleatoria lista)', arraylist: '376.194.016', linkedlist: '112.884.713' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'assets/articles/base';
</style>
