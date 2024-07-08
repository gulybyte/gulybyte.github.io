<template>
  <section class="home-page">
    <gulybyte-Head></gulybyte-Head>
    <gulybyte-Header></gulybyte-Header>
    <gulybyte-Email></gulybyte-Email>

    <section class="container">

      <main>
        <gulybyte-FirstApresentation></gulybyte-FirstApresentation>

        <gulybyte-About></gulybyte-About>

        <gulybyte-Articles></gulybyte-Articles>
      </main>

      <div class="clear-both"></div>

      <!-- <gulybyte-Philosophy></gulybyte-Philosophy> -->

      <div class="clear-both"></div>

      <footer class="soon-more" style="padding: 80px; text-align: center; font-size: 25px; font-family: 'Calibre-semibold';">
        <i class="pi pi-exclamation-triangle" style="color: yellow; font-size: 25px;"></i> Ainda em construção! <i
          style="font-size: 25px;" class="pi pi-spin pi-spinner"></i> Em breve mais conteudo <i
          style="font-size: 25px;" class="pi pi-calendar-plus"></i>
      </footer>
    </section>
  </section>



</template>


<style lang="scss" scoped>
  @use 'assets/colors' as c;


  .home-page {
    background-color: c.$primary-color-home !important;
    width: 100% !important;
  }

  ul {list-style: none !important;}

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

  *, ::before, ::after {
    box-sizing: inherit !important;/* config default antes e depois dos elementos */
  }

  .container {
    width: 75%;
    padding-top: 110px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {

    .container {
      width: 80%;
      padding-top: 80px;
    }

  }

  @media screen and (max-width: 580px) {

    .container {
      width: 90%;
    }

  }

  @media screen and (max-width: 380px) {
    .container {
      width: 85%;
    }
  }


</style>

<script>
let line = '\n';
    console.log(
        "             ))))"+line+
        "            (((("+line+
        "             ))))"+line+
        "          _ .---."+line+
        "         ( |`---'|"+line+
        "          \\|     |"+line+
        "          : .___, :"+line+
        "           `-----'"+line+
        "           K E E P"+line+
        "           C A L M"+line+
        "             and"+line+
        "          D R I N K"+line+
        "         C O F F E E");
</script>
