<template>
  <section class="articles-page" id="articles">
    <article>
      <section>
        <h2 class="title-about" data-aos="zoom-out" data-aos-duration="500">
          <span class="text-teal-400 mr-4" data-aos="zoom-out-down" data-aos-duration="1000">02.</span>Anotações</h2>


        <p data-aos="zoom-in-right" data-aos-duration="1000">
          &nbsp;&nbsp;Inspirado no <a target="blank" href="https://rodrigoknol.com.br/#blog">
          site do rodrigoknol</a>, para o nome "Anotações". Essas anotações são minha bússola,
          minha fonte de consulta particular na programação, e compartilho publicamente na
          esperança de que possam ser úteis para alguém, ideia essa influenciada
          <a href="https://youtu.be/ii5Q2fCl8C0" target="blank">por este vídeo do Akitando</a>.</p>

        <p style="padding-top: 2em;" data-aos="zoom-in-left" data-aos-duration="1000">
          &nbsp;&nbsp;Dê um pulo aqui e explore minhas anotações sobre programação,
          abrangendo desde estruturas de dados, banco de dados até tópicos em alta como
          cloud computing e escalabilidade.</p>

        <p data-aos="flip-up" data-aos-delay="2000" data-aos-duration="1000" ><small style="padding-top: 2em;">
          (as anotações sobre DB, cloud computing e escalabilidade. Ainda estão em andamento...).</small></p>

      </section>

      <section>
        <aside data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500">
          <a href="/articles">
            <Button aria-label="Ir para as Anotações" size="large"
              icon="pi pi-reply" severity="info" label="Ir para as anotações"
              outlined></Button>
          </a>
        </aside>
      </section>


    </article>
  </section>
</template>



<style lang="scss">
@use 'assets/colors' as c;
@use 'assets/fonts' as f;

.articles-page {
  overflow: none;
  width: 90%;
  margin: 140px auto 0;
  padding-top: 6em;

  p {
    font-size: 18px; color: c.$font-color; line-height: 26px; font-family: f.$montserrat-medium;
  }

  aside{padding-top: 2rem;}
}
</style>
