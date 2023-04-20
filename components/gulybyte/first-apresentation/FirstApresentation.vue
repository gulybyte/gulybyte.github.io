<template>
  <div class="infoinit">
    <h1 class="hi">Olá, meu nome é</h1>
    <h2 class="name">Guilherme Luis.</h2>
    <h3 class="developer-web">Desenvolvedor Web.</h3>
    <p class="info">
      Apenas um grande amante de tecnologia desde os 15 anos. Meu foco é desenvolvimento web, onde crio experiências únicas.
      Você desenvolvedor, visite meu
      <a href="https://github.com/gulybyte" target="_blank"><i class="pi pi-github"></i> GitHub</a>.
    </p>

    <Button label="Check code this website!" class="thiscode p-button-outlined p-button-success"
      target="_blank" href="https://github.com/gulybyte/gulybyte.github.io" ></Button>

  </div>
</template>

<style lang="scss">
@use 'assets/colors' as c;
@use 'assets/fonts' as f;

.infoinit {
  padding-top: 72px;
}

.hi {
  font-family: f.$sf-mono;
  font-weight: 400;
  font-size: 18px;
  color: #5EEAD4;
}

.name {
  line-height: 130px;
  font-family: f.$calibre-semibold;
  font-weight: 600;
  font-size: 78px;
  color: #CCD6F6;
}

.developer-web {
  line-height: 50px;
  font-family: f.$calibre-semibold;
  font-weight: 600;
  font-size: 72px;
  color: #8892b0;
  padding: 0 !important;
}

.info {
  padding-top: 25px;
  font-family: serif;
  font-weight: 400;
  font-size: 20px;
  color: #8892b0;
  max-width: 51%;
}

.thiscode {
  font-family: f.$sf-mono-900;
  color:#64ffda;
  font-size: 15px;
  margin-top: 50px !important;
  padding: 12px 25px;
}


@media screen and (max-width: 1125px) {

.infoinit> .info {
  max-width: 80%;
}

.infoinit> .name {
  font-size: 70px;
}

.infoinit> .developer-web {
  font-size: 60px;
}

}

@media screen and (max-width: 950px) {

.infoinit> .name {
  font-size: 60px;
}

.infoinit> .developer-web {
  font-size: 50px;
}

}

@media screen and (max-width: 780px) {

.infoinit> .info {
  max-width: 100%;
}

.infoinit> .name {
  font-size: 50px;
}

.infoinit> .developer-web {
  font-size: 40px;
}

}

@media screen and (max-width: 650px) {

.infoinit> .info {
  max-width: 85%;
}

}

@media screen and (max-width: 580px) {
.infoinit> .info {
  max-width: 100%;
}

.infoinit> .name {
  font-size: 45px;
}

.infoinit> .developer-web {
  font-size: 40px;
}

.infoinit> .info {
  width: 100%;
  font-size: 18px;
}
}

@media screen and (max-width: 330px) {
.infoinit> .name {
  font-size: 42px;
}

.infoinit> .developer-web {
  font-size: 38px;
}

.infoinit> .thiscode {
  width: 100%;
  font-size: 15px;
  padding: 10px 20px;
}
}


</style>
