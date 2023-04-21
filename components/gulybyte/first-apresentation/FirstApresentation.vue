<template>
  <section class="infoinit">
    <h1 class="hi">Olá, meu nome é</h1>
    <h2 class="name">Guilherme Luis.</h2>
    <h3 class="developer-web">Desenvolvedor Web <small>(construo sites)</small>.</h3>
    <p class="info">
      Apenas um grande amante de tecnologia. Meu foco é desenvolvimento web, onde crio experiências únicas.
      Você desenvolvedor, visite meu
      <a href="https://github.com/gulybyte" target="_blank"><i class="pi pi-github"></i> GitHub</a>.
    </p>

    <Button label="Check code this website!" class="thiscode p-button-outlined p-button-success"
      target="_blank" href="https://github.com/gulybyte/gulybyte.github.io" ></Button>

  </section>
</template>

<style lang="scss">
@use 'assets/colors' as c;
@use 'assets/fonts' as f;

.infoinit {
  padding-top: 72px;
}

.hi{font-family:f.$sf-mono;font-weight:400;font-size:18px;color:c.$secondary-color;}

.developer-web,.name{font-family:f.$calibre-semibold;font-weight:600}

.name{line-height:130px;font-size:78px;color:#ccd6f6}

.developer-web{line-height:50px;font-size:72px;color:#8892b0;padding:0!important}

.info{padding-top:25px;font-family:serif;font-weight:400;font-size:20px;color:#8892b0;max-width:51%}

.thiscode{font-family:f.$sf-mono-900;color:c.$secondary-color;font-size:15px;margin-top:50px!important;padding:12px 25px}


@media screen and (max-width: 1125px) {
  .info{max-width:80%}
  .name{font-size:70px}
  .developer-web{font-size:60px}
}

@media screen and (max-width: 950px) {
  .name {font-size: 60px}
  .developer-web {font-size: 50px;}
}

@media screen and (max-width: 780px) {
  .info{max-width:100%}
  .name{font-size:50px}
  .developer-web{font-size:40px}
}

@media screen and (max-width: 650px) {
  .info {max-width: 85%;}
}

@media screen and (max-width: 580px) {
  .name{line-height:80px;font-size:45px}
  .developer-web{font-size:40px}
  .info{max-width:100%;width:100%;font-size:18px}
}

@media screen and (max-width: 330px) {
  .name{font-size:42px}
  .developer-web{font-size:38px}
  .thiscode{width:100%;font-size:15px;padding:10px 20px}
}


</style>
