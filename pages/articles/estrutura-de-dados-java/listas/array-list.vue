<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">ArrayList.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />


    <article class="pt-4">
      <h3>ArrayList vs array.</h3>

      <p><b>&nbsp;&nbsp;Arrays são uma sequencia de valores do mesmo tipo, e são imutáveis:</b></p>
      <article-CodeArticles content="/ed/listas/arrays"></article-CodeArticles>

      <p>&nbsp;&nbsp;Perceba que todo array começa com o índice 0, isso é básico. No entanto,
        é importante ressaltar que os arrays são imutáveis, o que significa que se você precisar
        adicionar um novo elemento no meio dele, a JVM criará um novo objeto para cada operação.
        Por exemplo, se você precisar adicionar um novo elemento no meio do array, a JVM criará
        um <code>novo objeto</code> que terá os elementos da segunda metade, um
        <code>segundo objeto</code> que será a primeira metade, um <code>terceiro objeto</code>
        que será o novo elemento, um <code>quarto objeto</code> que será a primeira metade mais o
        novo elemento, e, por fim, um <code>quinto objeto</code> que será a primeira
        metade mais o novo elemento junto com a segunda metade.</p>

      <p>&nbsp;&nbsp;Claro é meio exagero, o <span title="Garbage Collector">GC</span> periodicamente
        limpa esses objetos da memória, mas ainda assim a perca de performance em varias iterações é
        significante. Portanto, <b>só use arrays se não precisar iterar novos elementos nele</b>.</p>

      <p>&nbsp;&nbsp;Outro assunto referente a diferença entre arrays e ArrayList's que não se aplica
        muito a Java, é que <b>arrays são sequencia de elementos do mesmo tipo</b> e <b>ArrayList
        são sequencia de vários tipos</b>, mas como em Java tudo é um <code>Object</code>, podemos "gambiarrar"
        arrays de diferentes elementos:</p>
      <article-CodeArticles content="/ed/listas/array-list-x-arrays"></article-CodeArticles>

      <p>&nbsp;&nbsp;Inclusive, no Java não é recomendado deixar List sem tipo definido, e sim usar o
        <code>Generics</code> de Java e dar tipagem ao ArrayList.</p>

      <p>&nbsp;&nbsp;Recapitulando, entendemos que ArrayList não é necessário para utilizarmos arrays com
        elementos de tipos variados e que os arrays são imutáveis. Então, qual é o papel do ArrayList?
        Simples, o <b>ArrayList é uma estrutura mutável que nos permite adicionar, remover e modificar
        elementos de forma eficiente</b>.</p>

      <p>&nbsp;&nbsp;Ou seja, podemos concluir que ArrayList é uma estrutura de lista sequencial,
        onde podemos acessar pelo índice e elementos podem ser adicionados ou removidos de forma dinâmica:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/array-list.png" alt="ArrayList Java" />

      <p>&nbsp;&nbsp;Sim ele é um Objeto Dinâmico, porém ainda assim computador não tem memória infinita,
        ArrayList costuma ter 50% de memória a mais que seu total, e quando bate o limite vai precisar criar
        outro objeto, mas ainda assim é bem menos que o array, pois ele <b>redimensiona objeto não recria</b>.</p>

    </article>

  </main>
  <article-NextContent content="LinkedList" linkcontent="/articles/estrutura-de-dados-java/listas/linked-list"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>
