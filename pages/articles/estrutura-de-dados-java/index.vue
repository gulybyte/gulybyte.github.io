<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Serie - visão geral sobre estrutura de dados Java.</h1>

    <h4 class="text-center text-1xl">Data Structures + Algorithms = Programs de Niklaus Wirth.</h4>

    <nuxt-img src="/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png"
      alt="Dados Estruturados x Não Estruturados" />

    <nuxt-img src="/static/images/linha-branca.png"
      alt="Linha Branca" />

    <section>
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
    </section>

    <section>
      <h3>Compreendendo Generics do Java.</h3>

      <p>&nbsp;&nbsp;Antes de partir para as estruturas, é necessário compreender os Generics do Java.
        Generics não apenas tornam o código mais seguro, mas também mais legível.</p>

      <p><b>Código com Generics:</b></p>
      <article-CodeArticles content="/ed/code-without-generics"></article-CodeArticles>

      <p><b>Código sem Generics: </b></p>
      <article-CodeArticles content="/ed/code-with-generics"></article-CodeArticles>

    </section>

    <section>
      <h3>Hierarquia Collection Framework.</h3>

      <p>&nbsp;&nbsp;O Collection Framework do Java é um conjunto de classes e interfaces que fornecem estruturas de dados
        de alto nível e eficiente para armazenar e manipular objetos em Java. É onde fica todas as estruturas de dados
        padrão da linguagem.</p>

      <p>&nbsp;&nbsp;As <b>principais interfaces e classes</b> que vamos estudar são essas
        (<a href="https://docs.oracle.com/en/java/javase/17/docs/api/overview-tree.html">mas
          é só o básico e o mais usado, atualmente essa lista é muito mas muito mais grande</a>):</p>

      <nuxt-img class="m-auto w-11/12" src="/static/images/articles/estrutura-de-dados-java/collections-framework-java.png"
        alt="Dados Estruturados x Não Estruturados" />

      <p>&nbsp;&nbsp;Lembrando que essa hierarquia são só as principais, e inclusive ela está bem rudimentar, faltou colocar as
        "Abstract's" interface e todas as outras estruturas fornecidas pela Collections Framework.</p>

      <p>&nbsp;&nbsp;Breve história...</p>

    </section>

  </main>
</template>

<style lang="scss">
@use 'assets/fonts' as f;

.articles-tecnico-container {
  padding: 0;
  margin: 20px auto;
  width: 80% !important;

  h1, h2, h3, h4, h5, h6, p {
    color: #F5F5F5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: f.$raleway-semibold !important;
    padding: 1rem;
  }

  h3 {
    font-size: 35px;
    padding-top: 80px;
  }

  p {
    padding: 10px;
    font-family: f.$montserrat-medium !important;
  }

  @media screen and (max-width: 768px) {
    p {
      padding: 15px;
    }
  }

}
</style>
