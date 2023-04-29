<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">TreeSet.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Tree's?</h3>

      <p>&nbsp;&nbsp;Trees são literalmente arvores, então imagine essa estrutura de dados como uma árvore com
        galhos e sub-galhos e sub-galhos de sub-galhos e por ai vai, a Tree especificamente usada por TreeSet
        é uma chamada <b style="color: red;">Red</b>-<b style="color: black;">Black</b> Tree,
        mas para entender a <b style="color: red;">R</b><b style="color: black;">B</b>Tree é
        necessário antes entender o básico de Tree o porque existe a
        <b style="color: red;">R</b><b style="color: black;">B</b>Tree.</p>

      <p>&nbsp;&nbsp;A Tree mais básica que temos é uma Tree que só pode ter 2 filhas, e cada filha também só pode
        ter 2 filhas (sub-filhas), uma representação básica temos:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/tree-classica.png" alt="Tree Clássica Estrutura de Dados." />

      <h3>Qual a utilidade?</h3>

      <p>&nbsp;&nbsp;Com elas a busca é muito mais rápida, um exemplo simples é o famoso Binary search (ou busca binária).
        Para verificar se existe um número em um array faríamos uma busca sequencial de um a um até chegar nele,
        porém na busca binaria dividimos o total por dois, verificamos se a segunda metade e maior ou menor que nosso número,
        se menor cortamos ela e vamos para próxima etapa e assim por diante, visualização disso é:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/busca-binaria-x-busca-sequencial.gif"
        alt="Busca Binaria vs Busca Sequencial" />

      <p><b>A arte de dividir para conquistar.</b></p>

      <p>&nbsp;&nbsp;Vamos ver outro exemplo na tree, digamos que temos o seguinte conjunto:
        <code>{34, 84, 15, 0, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101}</code>, em um array se fossemos
        procurar <code>101</code> precisaríamos percorrer todos os elementos, já em uma BST (binary search tree)
        percorreríamos apenas 4: <code>34 -> 84 -> 99 -> 100 -> 101</code>, veja:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/binary-search-tree.png"
        alt="Arvore Binaria" />

      <p>&nbsp;&nbsp;Note os elementos foram armazenas na sequencia dada
        (<small><code>{34, 84, 15, 0, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101}</code></small>),
        sendo os elementos menores são jogados a esquerda da árvore e os maiores a direita. Nesse nosso caso
        temos uma árvore bem distribuída, mas em um caso onde nosso conjunto não vai facilitar que nossa arvore fique
        bem distribuída?, ex <code>{99, 89, 100, 101, 102, 103, 104, 105, 106}</code>:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/binary-search-tree-pior-caso.png"
        alt="Arvore Binaria pior Caso" />

      <p>&nbsp;&nbsp;Pense agora, para encontrarmos o elemento <code>106</code> vamos precisar percorrer a árvore inteira.
        Mas e nesses casos, o que fazemos para manter a árvore bem distribuída?, bom, é agora que chegamos
        nas <b style="color: red;">Red</b>-<b style="color: black;">Black</b> Tree, construídas exatamente para
        manter uma árvore bem distribuída. Mas como ela faz isso?</p>

      <h3>Como funciona <b style="color: red;">Red</b>-<b style="color: black;">Black</b> Tree?</h3>

      <p>&nbsp;&nbsp;A diferença no geral entre a <b style="color: red;">Red</b>-<b style="color: black;">Black</b> e a BST,
        é que a <b style="color: red;">R</b><b style="color: black;">B</b>Tree tem um campo que é quem "define as cores",
        que claramente são <span style="color: red;">Vermelho (Red)</span> e
        <span style="color: black;">Preto (Black)</span>, mas com certeza não é uma cor, a cor é só para melhor
        compreensão e principalmente visualização a nós humanos. Esse campo que seria a cor é na realidade
        um campo de um 1 bit, no caso um boolean, e geralmente o bit 1 é associado à cor vermelha
        e o bit 0 é associado à cor preta.</p>

      <p><b>* A partir de agora vamos chamar os elementos da tree pelo nome correto que é Node!!</b></p>

      <p>&nbsp;&nbsp;O Node raiz (o primeiro) ele é sempre preto, e por padrão ao criar um novo Node ele será vermelho,
        a regra geral é que <b>um Node vermelho só pode ter Node pai e Nodes filhos da cor preta</b>.
        Os últimos Nodes (comumente chamados de LEAF) são Nodes vazios, que servem basicamente para os
        ponteiros dos verdadeiros últimos Nodes não serem nulos para seguir a regra das cores.
        Mas como que o <b style="color: red;">R</b><b style="color: black;">B</b>Tree consegue rebalancear nossos
        Nodes?, ela faz a rotação dos nós (por baixo dos panos é um swap de ponteiros) de forma que mantenha
        a árvore bem balanceada. Veja exemplo com nossos conjuntos anteriories
        (<small><code>{34, 84, 15, 0, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101}</code></small> e
        <small><code>{99, 89, 100, 101, 102, 103, 104, 105, 106}</code></small>):</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/binary-search-tree-x-red-black-tree.png"
        alt="Arvore Binaria vs Red Black Tree" />
      <nuxt-img style="width: 100%" src="/static/images/linha-branca.png" alt="Linha Branca" />
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/binary-search-tree-pior-caso-x-red-black-tree.png"
        alt="Arvore Binaria (pior caso) vs Red Black Tree" />

      <p><b>Bem melhor não é?</b>, agora que você já entendeu o que é uma
        <b style="color: red;">Red</b>-<b style="color: black;">Black</b> Tree
        fica mais fácil de entender como que ela consegue ordenar elementos de uma
        tabela de hash (nossa interface <code>Set</code>) por ASC ou DESC por exemplo.</p>

    </article>
  </main>
  <article-NextContent content="Map (próxima interface)" linkcontent="/articles/estrutura-de-dados-java/map"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>

<script setup>
useHead({
  title: 'TreeSet',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java' }
  ],
  meta: [
    { name: 'og:url', content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'},

    { property: "og:title", content: 'TreeSet' },

    { name: 'description', content: 'TreeSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'excerpt', content: 'TreeSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:description', content: 'TreeSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'application-name', content: 'TreeSet | Serie - visão geral sobre estrutura de dados Java.'},
    { name: 'og:site_name', content: 'TreeSet | Serie - visão geral sobre estrutura de dados Java.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Série, Set, TreeSet'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/binary-search-tree-pior-caso-x-red-black-tree.png'},
    { name: 'og:image:width', content: '2201'},
    { name: 'og:image:height', content: '946'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
