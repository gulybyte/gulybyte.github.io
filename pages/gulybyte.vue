<template>
  <gulybyte-Head></gulybyte-Head>
  <img src="/static/images/eu.webp" alt="Guilherme Luis França" />
  <Button label="Check" icon="pi pi-check" />

  <!-- <app-components-base></app-components-base> -->

  <div class="container">

    <!-- <app-components-infoinit></app-components-infoinit> -->

    <div class="clear"></div>

    <!-- <app-components-about></app-components-about> -->

    <div class="clear"></div>

    <!-- <app-component-philosophy></app-component-philosophy> -->

    <div class="clear"></div>


    <div class="soon-more" style="margin: 80px; text-align: center; font-size: 25px; font-family: 'Calibre-semibold';">
      <i class="pi pi-exclamation-triangle" style="color: yellow; font-size: 25px;"></i> Ainda em construção! <i
        style="font-size: 25px;" class="pi pi-spin pi-spinner"></i> Em breve mais conteudo <i
        style="font-size: 25px;" class="pi pi-calendar-plus"></i>
    </div>
  </div>



</template>


<style lang="scss">
  @media screen and (max-width: 419px) {
    .soon-more {
      font-size: 22px !important;
      i {
        font-size: 22px !important;
      }
    }
  }

  @media screen and (max-width: 380px) {
    .soon-more {
      font-size: 18px !important;
      i {
        font-size: 18px !important;
      }
    }
  }
</style>
