import { ContentDoc } from '../../.nuxt/components';
<template>
  <main class="container-articles">
    <article class="articles">
      <div class="wrapper-articles">

        <section class="pos-left">
          <NuxtLink href="/articles/estrutura-de-dados-java">&nbsp;&nbsp;Serie - visão geral sobre estrutura de dados Java.</NuxtLink>
        </section>

        <section class="pos-right">
          <nuxt-img src="/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png"
            alt="Dados Estruturados x Não Estruturados" />
        </section>

        <section class="pos-left">
          <p>&nbsp;&nbsp;Desmistificando a temida estrutura de dados com Collections Framework do Java.</p>
          <p>&nbsp;&nbsp;Aprenda de uma vez por todas com conceitos simples e imagens que te farão "sacar" na hora o funcionamento
            dessas estruturas.</p>
        </section>

      </div>
    </article>
  </main>

  <ContentDoc path="/" />
</template>

<style lang="scss">
@use 'assets/colors' as c;

.container-articles {
  padding: 0;
  margin: 30px auto;
  width: 80% !important;
}

.articles {
  position: relative;
  background-color: c.$dark-color !important;
  padding: 10px;
  overflow: auto;
}

.pos-right {
  width: 50%;
  float: right;
}

.pos-left {
  width: 50%;
  float: left;
  a {
    font-size: 30px;
  }
  p {
    padding: 0.5rem 1rem;
  }
}

@media screen and (max-width: 768px) {
  .pos-right, .pos-left {
    width: 100%;
    float: none;
  }
}
</style>

<script setup>
useHead({
  title: 'Artigos',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles' }
  ],
  meta: [
    { property: 'og:title', content: 'Artigos' },

    { name: 'description', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'excerpt', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'og:description', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'application-name', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'og:site_name', content: 'Artigos - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},

    { name: 'keywords', content: 'Java, Estrutura de Dados, Séries, Algoritmos e Estrutura de Dados Java, Banco de Dados'},

    { name: 'og:image', content: 'https://gulybyte.github.io/static/images/icon.png'},
    { name: 'og:image:width', content: '75'},
    { name: 'og:image:height', content: '75'},
    { name: 'og:image:type', content: 'image/png'},

    { name: 'og:url', content: 'https://gulybyte.github.io/articles'},

    { name: 'article:published_time', content: '2023-03-25T04:09:45+00:00'},
    { name: 'article:modified_time', content: '2023-04-30T04:30:41+00:00'}

  ]
})
</script>
