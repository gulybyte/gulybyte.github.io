<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Map's.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <section class="pt-20">
      <nav>
        <ul>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/queues/priority-queue">PriorityQueue;</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/articles/estrutura-de-dados-java/queues/array-deque">ArrayDeque;</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>

    <article class="pt-10">
      <DataTable :value="queues" tableStyle="min-width: 50rem">
        <Column field="tipo" header="Tipo"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="detalhes" header="detalhes"></Column>
      </DataTable>
    </article>

    <h3>Outras "queues"</h3>

    <p>&nbsp;&nbsp;Vimos só ArrayDeque e PriorityQueue, mas tem outras mais principais de outras interfaces</p>
<pre class="pt-2">
  - <b>BlockingQueue - </b>abstrata um tipo de fila que espera que a fila
      não seja vazia ao recuperar um elemento e aguarda que o espaço fique
      disponível na fila ao armazenar um elemento;

  - <b>BlockingDeque - </b>é semelhante a BlockingQueue, mas para filas
      de extremidade dupla. É sub interface do BlockingQueue.</pre>


  </main>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>

<script>
export default {
  data() {
    return {
      queues: [
        { tipo: 'PriorityQueue', descricao: 'Queue simples', detalhes: '	FIFO, primeiros elementos a entrar são os primeiros a sair.' },
        { tipo: 'ArrayDeque	', descricao: 'Deque -> queue dupla', detalhes: 'É possível inserir e remover dados da entrada e da saída.' }
      ]
    }
  }
}
</script>
