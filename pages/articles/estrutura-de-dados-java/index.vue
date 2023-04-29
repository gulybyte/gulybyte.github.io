<template>
  <HeadGeneric></HeadGeneric>

  <main class="articles-tecnico-container">

    <h1 class="text-center text-5xl">Serie - visão geral sobre estrutura de dados Java.</h1>

    <h5 class="text-center text-1xl">Data Structures + Algorithms = Programs de Niklaus Wirth.</h5>

    <nuxt-img src="/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png"
      alt="Dados Estruturados x Não Estruturados" />

    <nuxt-img src="/static/images/linha-branca.png"
      alt="Linha Branca" />

    <article>
      <h3>Porque estudar?</h3>

      <p>&nbsp;&nbsp;A disciplina de estrutura de dados visa estudar como os dados são organizados,
        acessados e manipulados na memória. Em linguagens de alto nível, geralmente usamos as
        estruturas que a própria linguagem fornece.</p>

      <p>&nbsp;&nbsp;Compreender a estrutura de dados facilita a compreensão de como as coisas
        funcionam por baixo dos panos, melhorando a capacidade de <b>aprender e se adaptar a novas
        tecnologias</b>. Portanto é o que diferencia um estudante de um profissional.</p>

      <p>&nbsp;&nbsp;Sendo direto, como quer entender a fundo conceitos como banco de dados, Kafka,
        contêineres, sistemas operacionais, SQS e escalabilidade que tem como base você saber e
        <b>entender estruturas de dados?</b>.</p>
    </article>

    <article>
      <h3>Compreendendo Generics do Java.</h3>

      <p>&nbsp;&nbsp;Antes de partir para as estruturas, é necessário compreender os Generics do Java.
        Generics não apenas tornam o código mais seguro, mas também mais legível.</p>

      <p><b>Código com Generics:</b></p>
      <article-CodeArticles content="/ed/code-without-generics"></article-CodeArticles>

      <p><b>Código sem Generics: </b></p>
      <article-CodeArticles content="/ed/code-with-generics"></article-CodeArticles>

    </article>

    <article>
      <h3>Hierarquia Collection Framework.</h3>

      <p>&nbsp;&nbsp;O Collection Framework do Java é um conjunto de classes e interfaces que fornecem estruturas de dados
        de alto nível e eficiente para armazenar e manipular objetos em Java. É onde fica todas as estruturas de dados
        padrão da linguagem.</p>

      <p>&nbsp;&nbsp;As <b>principais interfaces e classes</b> que vamos estudar são essas
        (<a target="_blank" href="https://docs.oracle.com/en/java/javase/17/docs/api/overview-tree.html">mas
          é só o básico e o mais usado, atualmente essa lista é muito mas muito mais grande</a>):</p>

      <nuxt-img class="m-auto w-11/12" src="/static/images/articles/estrutura-de-dados-java/collections-framework-java.png"
        alt="Dados Estruturados x Não Estruturados" />

      <p>&nbsp;&nbsp;Lembrando que essa hierarquia são só as principais, e inclusive ela está bem rudimentar, faltou colocar as
        "Abstract's" interface e todas as outras estruturas fornecidas pela Collections Framework.</p>

      <p>&nbsp;&nbsp;No início do Java (chamado originalmente de Oak), as estruturas básicas disponíveis eram o
        <code>Vector</code> e o <code>Hashtable</code>. Perceba que o <code>Hashtable</code> não segue o padrão
        de nomenclatura atual sendo que o correto seria "<code>HashTable</code>". Com o tempo, a necessidade de
        mais estruturas de dados (devido aos sistemas que ele era usado) surgiu, levando então ao desenvolvimento
        do Collections Framework no Java 1.2. É comum que haja uma confusão (até eu me confundi) de que o Map não
        faz parte do Collections Framework, isso devido a ele não extender de java.util.Collection como nas outras
        estruturas, mas ele faz parte sim da Collections Framework.</p>

    </article>

    <section>
      <h2 class="text-5xl">Explicando as estruturas.</h2>

      <p>&nbsp;&nbsp;Vamos ver agora explicação base de cada classe com uma explicação detalhada de
        cada uma separada nos links:</p>

      <h4><NuxtLink class="title-structure" href="/articles/estrutura-de-dados-java/listas">List</NuxtLink></h4>
      <span class="description-structures">&nbsp;&nbsp;&nbsp;&nbsp;A interface List define uma sequência ordenada de elementos.
        As implementações disponíveis incluem:</span>
<pre class="pt-2">
  - <b>ArrayList - </b>um array dinâmico;
  - <b>LinkedList - </b>estrutura Node duplamente ligado;
  - <b>Vector - </b>um ArrayList só que thread-safe;
    - <b>Stack - </b>tipo LIFO;</pre>

      <h4><NuxtLink class="title-structure" href="/articles/estrutura-de-dados-java/queues">Queue</NuxtLink></h4>
      <span class="description-structures">&nbsp;&nbsp;&nbsp;&nbsp;A interface Queue define uma coleção que mantém uma ordem
        específica para seus elementos. As implementações disponíveis incluem:</span>
<pre class="pt-2">
  - <b>PriorityQueue - </b>tipo FIFO;
  - <b>ArrayDeque - </b>FIFO de duas cabeças;</pre>

      <h4><NuxtLink class="title-structure" href="/articles/estrutura-de-dados-java/set">Set</NuxtLink></h4>
      <span class="description-structures">&nbsp;&nbsp;&nbsp;&nbsp;A interface Set define uma coleção de elementos únicos,
        que não se repetem. As implementações disponíveis incluem:</span>
<pre class="pt-2">
  - <b>HashSet - </b>tabela hash;
    - <b>LinkedHashSet - </b>HashSet + <s>LinkedList</s>;
  - <b>TreeSet - </b>tabela hash em <b><span style="color: red;">R</span><span style="color: black;">B</span>Tree</b>;</pre>

      <h4><NuxtLink class="title-structure" href="/articles/estrutura-de-dados-java/map">Map</NuxtLink></h4>
      <span class="description-structures">&nbsp;&nbsp;&nbsp;&nbsp;A interface Map define uma coleção de pares chave-valor,
        em que cada chave é única. As implementações disponíveis incluem:</span>
<pre class="pt-2">
  - <b>HashMap - </b>key-value;
    - <b>LinkedHashMap - </b>key-value + <s>LinkedList</s>;
  - <b>TreeMap - </b>key-value em <b><span style="color: red;">R</span><span style="color: black;">B</span>Tree</b>;
  - <b>Hashtable - </b>um HashMap só que thread-safe;</pre>


    </section>


  </main>
  <article-NextContent content="Comece aqui!" linkcontent="/articles/estrutura-de-dados-java/listas"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';

.title-structure {
  color: rgb(0, 72, 255);
}

.description-structures {
  border-left: 4px solid #363a3e;
  padding: 8px 0;
  margin-left: 20px;
  color: #727475;
}
</style>

<script setup>
useHead({
  title: 'Estrutura de Dados',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { property: 'og:title', content: 'Estrutura de Dados.' },

    { name: 'description', content: 'Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, List, Listas, Stack, Pilha, Árvores, Trees, Filas, Queues, Mapas, Maps, Set, Algoritmos e Estrutura de Dados Java'},

    { name: 'application-name', content: 'Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png'},
    { name: 'og:image:width', content: '712'},
    { name: 'og:image:height', content: '351'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
