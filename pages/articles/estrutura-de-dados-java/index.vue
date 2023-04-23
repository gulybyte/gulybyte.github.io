<template>
  <main class="articles-tecnico-container">
    <h1 class="text-center text-5xl">Serie - visão geral sobre estrutura de dados Java.</h1>

    <h4 class="text-center text-1xl">Data Structures + Algorithms = Programs de Niklaus Wirth.</h4>

    <nuxt-img src="/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png"
      alt="Dados Estruturados x Não Estruturados" />

    <nuxt-img src="/static/images/linha-branca.png"
      alt="Dados Estruturados x Não Estruturados" />

    <section>
      <h3 class="text-3xl">Porque estudar?</h3>

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
      <h3 class="text-3xl">Compreendendo Generics do Java.</h3>

      <p>&nbsp;&nbsp;Antes de partir para as estruturas, é necessário compreender os Generics do Java.
        Generics não apenas tornam o código mais seguro, mas também mais legível.</p>

      <p>&nbsp;&nbsp;Código com Generics:</p>

      <p>&nbsp;&nbsp;Código sem Generics:</p>


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
    padding-top: 60px;
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
