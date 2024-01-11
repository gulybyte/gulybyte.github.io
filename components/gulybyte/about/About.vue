<template>
  <section class="about" id="about">
    <article class="about-me">
      <h2 class="title-about" data-aos="zoom-out" data-aos-duration="500">
        <span class="text-teal-400 mr-4" data-aos="zoom-out-down" data-aos-duration="1000">01.</span>Sobre mim</h2>

      <p data-aos="zoom-in" data-aos-duration="1000" style="text-align: justify;">
        Desde cedo, aos meus 14 anos, meu fascínio pela lógica, expressada na matemática e <b>programação</b>,
        conduziu-me a criar meus próprios sistemas. O que começou como um intrigante hobby,
        estudando com afinco e pragmatismo, naturalmente evoluiu para minha profissão. Hoje,
        ainda em minha juventude, embora já tenha alcançado o patamar profissional,
        <abbr title="Pv 22.29">busco capacitar-me sempre que póssivel </abbr>
        <abbr title="Pv 15.33">com humildade, pois ela antecede a honra.</abbr> Uma frase?:</p>

      <blockquote data-aos="fade-up" data-aos-duration="1000">
        <i data-aos="zoom-in-up" data-aos-delay="800">
          Não se apegar ao código, codificando o <b><abbr title="Estou falando de overengineering">essencial</abbr></b>,
          com qualidade. <br> Demonstra a prudência de um bom programador.
        </i>
      </blockquote>

    </article>
    <aside class="about-image">
      <figure class="img-guilherme" data-aos="zoom-in" data-aos-duration="1000">
        <nuxt-img
          class="eu-azul" src="/static/images/guilherme-luis-franca-azul.png" alt="gulybyte efeito azul" />
        <nuxt-img
          class="eu" src="/static/images/guilherme-luis-franca.png" alt="gulybyte" />
      </figure>
    </aside>
    <div class="clear-both"></div>

  </section>
</template>

<style lang="scss">
@use 'assets/colors' as c;
@use 'assets/fonts' as f;


/* == espacamentos about == */
.about{max-width:90%;width:90%;margin:250px auto 0;padding-top: 6em;}
.about-me{float:left;width:62%;
  p {
    font-size: 18px; color: c.$font-color; line-height: 26px; font-family: f.$montserrat-medium;
  }
  blockquote {
    text-align: center; padding: 8px; border-left: 2px solid c.$tertiary-color; font-family: f.$montserrat-medium;
    i{line-height: 1.6; color: rgb(10, 255, 173);}
  }
}
.about-image{float:right;width:30%;padding:75px 0 0 70px}

/* == imagem no about == */
.img-guilherme> img{border-radius:1%;width:280px;height:280px;box-shadow:22px 22px c.$primary-color-home,22px 22px 0 2.5px c.$secondary-color;-webkit-border-radius:1%;-moz-border-radius:1%;-ms-border-radius:1%;-o-border-radius:1%;}
.img-guilherme:hover>img{box-shadow:12px 12px c.$primary-color-home,12px 12px 0 2.5px c.$secondary-color;}

.about-image> .img-guilherme> .eu {
  display: none;
}/* troca as imagens */
.about-image> .img-guilherme:hover> .eu-azul {
  display: none;
}.about-image> .img-guilherme:hover> .eu {
  display: block;
}

/* == titulo about me == */
.title-about{font-family: f.$montserrat-medium; color:#fff;display:flex;-webkit-box-align:center;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:26px;white-space:nowrap}
.title-about::after{content:"";display:block;position:relative;width:100%;height:1px;margin-left:20px;background-color:c.$font-color}



@media screen and (max-width: 1296px) {
  .about-me {width: 50%;}
  .about-image {width: 40%;}
}

@media screen and (max-width: 1048px) {
  .about-me {float: none;width: 100%;}
  .about-image {text-align: center;margin: 0 auto;float: none;width: 100%;padding: 0px;display: flex;flex-direction: row;justify-content: center;align-items: center;}
}

@media screen and (max-width: 500px) {
  .img-guilherme> img{width:250px;height:250px;}
}

@media screen and (max-width: 450px) {
  .img-guilherme> img{width:230px;height:230px;}
}

@media screen and (max-width: 400px) {
  .img-guilherme> img{width:200px;height:200px;}
}

@media screen and (max-width: 340px) {
  .img-guilherme> img{width:170px;height:170px;}
}

</style>
