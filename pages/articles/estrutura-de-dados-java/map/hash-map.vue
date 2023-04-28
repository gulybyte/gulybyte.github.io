<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">HashMap.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Como funciona?</h3>

      <p>&nbsp;&nbsp;É uma tabela de hash com <code>&lt;K, V&gt;</code>, ou seja, key-value (chave e valor) que nós controlamos. O
        <code>K</code> é o identificador dos elementos, é igual no <code>HashSet</code> porém aqui nós
        controlamos a chave, e obviamente por ela ser um identificador ela é única, vejamos em código:</p>

      <article-CodeArticles content="/ed/mapas/hash-map"></article-CodeArticles>

      <p>&nbsp;&nbsp;Como pode ver, tínhamos <code>3=Aulus</code> e mudamos para <code>3=Agerius</code> e quem ficou com
        a chave 3 foi <code>Agerius</code>, afinal uma chave só pode estar ligada a um valor. É uma estrutura de dados
        relativamente simples não?</p>

      <p>&nbsp;&nbsp;HashMap é a nova versão do antigo <code>Hashtable</code>,
        exceto que é não sincronizado e permite nulos. Inclusive o <code>Hashtable</code> extends de
        <code>Dictionary</code> que é a antiga implementação da interface Map que segue a mesma ideia
        de <code>&lt;K, V&gt;</code>, por curiosidade em outras linguagens a estrutura chamada de Map se
        chama Dictionary.</p>

      <p>&nbsp;&nbsp;Em resumo, <code>HashMap</code> é um <code>&lt;K, V&gt;</code> onde <code>K</code> é a
        nossa chave, <code>V</code> é o valor, e então eles são passados para um mapa que é uma tabela de hash,
        onde o hash seria o índice e esse hash obviamente é o <code>K</code>.</p>
      <nuxt-img class="img-80" src="/static/images/articles/estrutura-de-dados-java/hash-map.svg" alt="HashMap Java" />

      <h3>E se houver colisões?</h3>

        <p>&nbsp;&nbsp;Assim como os elementos em <code>HashSet</code> são os hashes, em <code>HashMap</code> nossa <code>K</code>
          é o hash pois key é unica, mas e em casos onde duas keys geram o mesmo hash?, nesse caso <code>HashMap</code>
          lida com isso exatamente como <code>HashSet</code> lida.
          <span style="color: gray;">"No caso de colisão, um único value armazena várias entradas sequenciais
          de outros values"</span>.</p>

        <p>&nbsp;&nbsp;Vamos usar o mesmo exemplo que usamos em <code>HashSet</code>, colisão entre duas String's que
          gerem o mesmo hash ("FB" e "Ea"):</p>

        <nuxt-img class="img-80" src="/static/images/articles/estrutura-de-dados-java/hash-map-colisao.svg" alt="Colisão HashMap Java" />

        <p><b>Em resumo é uma estrutura para quando quer ter indices, ou seja, uma estrutura perfeita entre o melhor
          dos dois mundos de List e Set, ou seja, search e find rápidos.</b></p>

    </article>
  </main>
  <article-NextContent content="Fim da série, retorne a home artigos" linkcontent="/articles"></article-NextContent>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>
