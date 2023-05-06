<template>
  <gulybyte-Head></gulybyte-Head>
  <gulybyte-Header></gulybyte-Header>
  <gulybyte-Email></gulybyte-Email>

  <div class="container">

    <main>
      <gulybyte-FirstApresentation></gulybyte-FirstApresentation>

      <gulybyte-Articles></gulybyte-Articles>

      <gulybyte-About></gulybyte-About>
    </main>

    <div class="clear-both"></div>

    <!-- <gulybyte-Philosophy></gulybyte-Philosophy> -->

    <div class="clear-both"></div>

    <footer class="soon-more" style="margin: 80px; text-align: center; font-size: 25px; font-family: 'Calibre-semibold';">
      <i class="pi pi-exclamation-triangle" style="color: yellow; font-size: 25px;"></i> Ainda em construção! <i
        style="font-size: 25px;" class="pi pi-spin pi-spinner"></i> Em breve mais conteudo <i
        style="font-size: 25px;" class="pi pi-calendar-plus"></i>
    </footer>
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

  *, ::before, ::after {
    box-sizing: inherit !important;/* config default antes e depois dos elementos */
  }

  .container {
    width: 75%;
    margin: 110px auto 0;
  }

  @media screen and (max-width: 768px) {

    .container {
      width: 80%;
      margin: 80px auto 0;
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
        "             (((("+line+
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
