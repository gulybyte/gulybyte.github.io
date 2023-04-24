<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">HashSet.</h1>

    <h3>Serie - visão geral sobre estrutura de dados Java.</h3>

    <nuxt-img src="/static/images/linha-branca.png" alt="Linha Branca" />

    <article class="pt-4">
      <h3>Como funciona?</h3>

      <p>&nbsp;&nbsp;É uma estrutura de dados bem rápida. É uma tabela de hash, onde temos sim de certa
        forma um <code>&lt;K, V&gt;</code> (chave e valor), porém nós não lidamos com chave em HashSet
        (para isso use HashMap), a chave é insignificante (não trabalhamos e nem podemos lidar
        diretamente com elas), usada apenas para encontrar os elementos na tabela, e também para
        garantir que não tenhamos elementos duplicados:</p>

      <p>&nbsp;&nbsp;A visualização geral é essa:</p>
      <nuxt-img src="/static/images/articles/estrutura-de-dados-java/hash-set.png" alt="HashSet Java" />

      <p>&nbsp;&nbsp;Se você prestou atenção, deve ter percebido que os elementos adicionados ao <code>HashSet</code>
        não ficaram na mesma ordem que foram inseridos. Isso acontece porque o <code>HashSet</code> não mantém nenhuma
        ordem, nem mesmo a ordem de inserção. A forma como os elementos são ordenados varia de acordo com a implementação
        da JVM e de outros fatores. Além disso, é importante mencionar a função hash utilizada, que é uma função de hash
        padrão da classe <code>Object</code>. O número total de hashes possíveis é de 32 bits (em algumas implementações
        pode chegar a 64 bits), o que é relativamente pouco, e isso pode levar a <b>colisões entre os elementos do
        <code>HashSet</code></b>.</p>

        <h3>E se houver colisões?</h3>

        <p>&nbsp;&nbsp;Se o hash é usado como próprio "identificador" dos elementos para evitar duplicação,
          o que acontece se houver dois elementos diferentes que geram o mesmo hash?</p>

        <p>&nbsp;&nbsp;Bem, o algoritmo de hash usado por <code>HashSet</code> é chamado de <b>hashing by chaining</b>,
          sua implementação não é importante aqui, mas ele funciona como uma tabela de hash e as <b>colisões são resolvidas
          usando listas encadeadas</b>. Ficou meio confuso eu sei, mas na visualização que já veremos vai dar para entender
          facilmente.</p>

        <p>&nbsp;&nbsp;Vamos usar exemplo de colisões com duas String, as String's "FB" e "Ea" geram o mesmo hash 2236.
          Isso aconteçe pois o hashCode() do Java usa uma função polinomial que produz um número finito de valores hash,
          por isso a colisão. Veremos agora então uma visualização de como funciona essa lista encadeada em caso de
          colisões ("FB" e "Ea"):</p>

        <nuxt-img src="/static/images/articles/estrutura-de-dados-java/hash-set-colisao.png" alt="Colisão HashSet Java" />

        <p><b>Em resumo é uma estrutura para quando não quer elementos duplicados e não depende de ordenação,
          em caso de colisões como visto, se for fazer pesquisa nela vai jogar para um lista ligada vai verificar
          o primeiro elemento, se não for passa para o próximo e assim por diante.</b></p>

    </article>
  </main>
</template>

<style lang="scss">
@import 'assets/articles/base';
</style>
