<template>
  <section class="about" id="about">
    <article class="about-me">
      <h2 class="title-about"><span style="color: #4FE8D0; margin-right: 16px;">01.</span>Sobre mim</h2>

      <p style="font-size: 20px; color: #8892b0; line-height: 26px; font-family: serif;">
        Desde cedo, sempre tive uma paixão pela programação e me sentia intrigado com a ideia de desenvolver meus próprios sistemas.
        Eu não me importava com o quão difícil isso pudesse ser, apenas queria aprender.
        Lá por 2019 me dediquei e mergulhei fundo nessa área, buscando conhecimento e prática, sem sequer pensar em seguir como profissão.
        No entanto, quanto mais aprendia, mais me apaixonava por essa área.
        Aprendi muitas coisas novas, estudei até coisas consideradas "difíceis", como C/C++, assembly e Linux.
        Sinceramente nunca gostei da ideia da ideia de limitações,
        afirmações como "Java é difícil como primeira linguagem" me faziam sentir a vontade que todo bom programador tem -
        "Quero aprender isso não importa o que". Mas no fim, percebi que a programação poderia ser mais do que apenas um hobby,
        a escolha de seguir foi natural, hoje eu to ai né, como programador e buscando mais conhecimento.</p>

    </article>
    <div class="about-image">
      <div class="img-guilherme">
        <img class="eu-azul" src="/static/images/eu-azul.webp" alt="Guilherme Luis França efeito azul">
        <img class="eu" src="/static/images/eu.webp" alt="Guilherme Luis França">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use 'assets/colors' as c;
@use 'assets/fonts' as f;

/* == espacamentos about == */
.about{max-width:90%;width:90%;margin:250px auto 0}
.about-me{float:left;width:62%}
.about-image{float:right;width:30%;padding:75px 0 0 70px}



/* == imagem no about == */
.img-guilherme>{img{border-radius:1%;width:280px;height:280px;box-shadow:22px 22px c.$primary-color,22px 22px 0 2.5px c.$secondary-color;-webkit-border-radius:1%;-moz-border-radius:1%;-ms-border-radius:1%;-o-border-radius:1%}.about-image>.img-guilherme:hover>img{box-shadow:12px 12px c.$primary-color,12px 12px 0 2.5px c.$secondary-color}}

.about-image> .img-guilherme> .eu {
  display: none;
}/* troca as imagens */
.about-image> .img-guilherme:hover> .eu-azul {
  display: none;
}.about-image> .img-guilherme:hover> .eu {
  display: block;
}

/* == titulo about me == */
.title-about{color:#fff;display:flex;-webkit-box-align:center;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:26px;white-space:nowrap}
.title-about::after{content:"";display:block;position:relative;width:100%;height:1px;margin-left:20px;background-color:c.$light-gray}




@media screen and (max-width: 1296px) {
  .about-me {width: 50%;}
  .about-image {width: 40%;}
}

@media screen and (max-width: 1048px) {
  .about-me {float: none;width: 100%;}
  .about-image {text-align: center;margin: 0 auto;float: none;width: 100%;display: flex;align-items: 50%;padding-top: 50px;}
}

@media screen and (max-width: 580px) {
  .img-guilherme{img{width: 250px;height: 250px;}}
}

@media screen and (max-width: 380px) {
.img-guilherme{img{width: 200px; height: 200px;}}
}

</style>
