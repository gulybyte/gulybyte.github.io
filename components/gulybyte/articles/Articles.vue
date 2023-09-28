<template>
  <section class="articles-page" id="articles">
    <article>
      <h2 class="title-about" data-aos="fade-down-left" data-aos-duration="800">
        <span class="text-teal-400 mr-4">01.</span>Artigos</h2>

      <!-- <p>
        &nbsp;&nbsp;Explore meus artigos sobre programação. Abordo assuntos mais avançados, em particular assuntos
        que dificilmente se encontra em outros lugares, principalmente em ótima qualidade e com o
        material em português. Dentre os artigos você encontra assuntos como estruturas de dados, banco de dados, escalabilidade,
        linguagens de programação, Cloud Computing, performance entre outros.</p>

      <p>
        &nbsp;&nbsp;Esses artigos foram criados para meu próprio uso como referência,
        se eu quisesse bombar eu os colocaria no Medium, mas eu quero que fica no meu site com
        o front-end da forma que eu gosto de forma personalizada, e está de forma publica caso alguém esteja procurando
        mais conhecimentos sobre os assuntos postados :).</p> -->

      <aside>
        <a href="/articles">
          <Button size="large" icon="pi pi-reply" severity="info" label="Navegue para os Artigos" outlined></Button>
        </a>
      </aside>

    </article>
  </section>
</template>

<style lang="scss">
@use 'assets/colors' as c;
@use 'assets/fonts' as f;

.articles-page {
  overflow: none;
  width: 90%;
  margin: 250px auto 0;

  p{padding: 0.5rem 0; font-size: 20px; color: c.$font-color; line-height: 26px; font-family: serif;}

  aside{padding-top: 2rem;}
}
</style>
