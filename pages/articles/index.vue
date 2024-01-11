<template>
  <main class="container-articles">
    <article class="articles">
      <div class="wrapper-articles">

        <section class="pos-left">
          <NuxtLink href="/articles/estrutura-de-dados-java">&nbsp;&nbsp;Serie - Fundamentos de Estrutura de Dados Elementar com Java.</NuxtLink>
        </section>

        <section class="pos-right">
          <nuxt-img src="/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png"
            alt="Dados Estruturados x Não Estruturados" width="712" />
        </section>

        <section class="pos-left">
          <p>&nbsp;&nbsp;Fique postulado que: <b>estruturas de dados faz parte da fundação de um bom progrador</b>.</p>
          <p>&nbsp;&nbsp;Desmistificando de uma vez por todas com conceitos simples e diagramas de imagens mentais a
            temida estrutura de dados com Collections Framework do Java.</p>
        </section>

      </div>
    </article>
  </main>
  <div class="clear-both"></div>

  <footer class="soon-more" style="padding: 80px; text-align: center; font-size: 25px; font-family: 'Calibre-semibold';">
    <i class="pi pi-exclamation-triangle" style="color: yellow; font-size: 25px;"></i> Ainda em construção! <i
      style="font-size: 25px;" class="pi pi-spin pi-spinner"></i> Em breve mais conteudo <i
      style="font-size: 25px;" class="pi pi-calendar-plus"></i>
  </footer>
</template>

<style lang="scss">
@use 'assets/colors' as c;
@use 'assets/fonts' as f;


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
    font-family: f.$confortaa-semibold;
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
  title: 'Anotações',
  link: [
    { rel: 'canonical', href: 'https://gulybyte.github.io/articles' }
  ],
  meta: [
    { property: 'og:title', content: 'Anotações' },

    { name: 'description', content: 'Anotações - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'excerpt', content: 'Anotações - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'og:description', content: 'Anotações - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'application-name', content: 'Anotações - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},
    { name: 'og:site_name', content: 'Anotações - Programação, Estrutura de Dados, Banco de Dados, Desenvolvimento Web.'},

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
