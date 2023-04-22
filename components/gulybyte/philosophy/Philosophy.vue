<template>
  <article class="philosophy" id="philosophy">
    <h2 class="title-philosophy" data-aos="zoom-in" data-aos-duration="800">
      <span class="text-teal-400 mr-4">02.</span>Minha Filosofia</h2>

    <p class="text-content" data-aos="fade-left" data-aos-duration="1500">
      <nuxt-img class="mr-4 float-left" src="/static/images/not-agile.webp" alt="Not Agile"
        data-aos="fade-right" data-aos-duration="2000" />
      &nbsp;&nbsp;&nbsp;Sou um desenvolvedor que busca ser sempre pragmático e genérico em muitos assuntos, mas especialista em
      outros que considero serem importantes (equilíbrio). Me esforço para fornecer excelentes experiências planejando, desenhando
      e construindo o software, garantindo sua estabilidade e disponibilidade, e trazendo melhorias e recursos com o tempo.
      Sim, o chamado "<a target="_blank" href="https://agilemanifesto.org/iso/ptbr/principles.html">Agile</a>".</p>

    <p class="text-content pt-2" data-aos="fade-right" data-aos-duration="1500">
      <nuxt-img class="float-right" src="/static/images/no-rules-no-limits.webp" alt="No Rules No Limits"
        data-aos="fade-left" data-aos-duration="2000" />
      &nbsp;&nbsp;&nbsp;Não tenho nada contra, mas o problema é que algumas metodologias ágeis parecem impor
      regras e procedimentos restritivos que, muitas vezes, bloqueiam a criatividade e a produtividade. Para mim,
      programação é uma arte, e não algo que deva ser regido por excesso de normas. Mas como eu trabalho de forma eficiente?,
      simples, tudo se resume em:</p>

    <p style="text-align: center; margin: 12px; font-size: 20px; color: #c3c6d2;
        line-height: 26px; font-family: serif; font-style: italic;"
        data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
      "Faça a aplicação de forma responsavel. Antes de criar uma nova funcionalidade, pense se ela terá um <b>impacto positivo</b>
      no produto e se facilitará a vida do usuário ou reduzirá os custos da aplicação. Analise para ver se não é algo que
      <b>você que fazer</b>, o importante é o produto. O código deve ser legível, livre de bugs, performático,
      seguro e garantia de estabilidade e disponibilidade. Não faça <b title="excesso de engenharia">overengineer</b>
      desnecessariámente, e não exagere nos design patterns."
    </p>

    <p class="text-content" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
      <nuxt-img class="img-cj" src="/static/images/cj-matando-mosca-bazuca.webp" alt="Carl Johnson Matando Mosca com Bazuca."
        data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000" data-aos-offset="0" />
      &nbsp;&nbsp;&nbsp;Claro, não levo isso ao pé da letra. Bons programadores que realmente gostam de programar
      amam fazer overengineer (excesso de complexidade). Fazemos porque gostamos de experimentar coisas que não fazemos no dia a dia.
      Mas esse é um código de hobby, um código de um produto real cujo objetivo é gerar lucro e agregar valor para o cliente.</p>

    <div class="clear-both"></div>
  </article>

  <section data-aos="zoom-in" data-aos-duration="1500">
    <ul class="recently-tech" style="text-align: center;">
      <h3>&#x1f6e0; Tecnologias que domino:</h3><br>

      <div class="list-0">
        <li>Angular;</li>
        <li>Heroku;&nbsp;</li>
        <li>AWS;&nbsp;&nbsp;&nbsp;&nbsp;</li>
      </div>
      <div class="list-1">
        <li>Java (Spring);</li>
        <li>PostgreSQL;&nbsp;&nbsp;</li>
        <li>Vue (nuxt);&nbsp;&nbsp;&nbsp;&nbsp;</li>
      </div>
    </ul>
  </section>

</template>

<style lang="scss">

  .philosophy {max-width: 95%;width: 95%;margin: 250px auto 0 !important;
    p> img {width: 200px;}
    .text-content{font-size: 20px; color: #8892b0; line-height: 26px; font-family: serif;}
  }


  .img-cj {float: right !important;width: 30% !important;}


  .title-philosophy {color: white;display: flex;-webkit-box-align: center;align-items: center;position: relative;margin: 10px 0px 40px;width: 100%;font-size: 26px;white-space: nowrap;}
  .title-philosophy::after {content: "";display: block;position: relative;width: 100%;height: 1px;margin-left: 20px;background-color: gray;}


  /* == lista techs about == */
  .recently-tech {margin: 0 auto;width: 70%;font-size: 20px;color: rgb(213, 213, 213);line-height: 26px;font-family: serif;
    h3 {font-family: 'Ubuntu'; margin-top: 40px; font-size: 30px; color: white; line-height: 26px;}
  }


  .recently-tech> .list-0 {width: 50%;float: right;}
  .recently-tech> .list-1 {width: 50%;}

  .recently-tech> .list-0> li::before,.recently-tech> .list-1> li::before {content: "▹ ";}



  @media screen and (max-width: 980px) {
    .img-cj {width: 50% !important;}
  }

  @media screen and (max-width: 520px) {
    .philosophy> p> img, .img-cj {width: 100% !important;}
  }

  @media screen and (max-width: 480px) {
    .recently-tech {width: 100%;}
  }

</style>
