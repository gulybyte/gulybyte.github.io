<template>
  <header class="header">

    <div class="header-img">
      <img width="50" src="/static/images/icon.png">
    </div>

    <div class="header-contents">

      <a href="#about" style="color: white;" class="navigation">
        <span style="color: #4FE8D0; margin-right: 10px;">01.</span>Sobre</a>

      <a href="#philosophy" style="color: white;" class="navigation">
        <span style="color: #4FE8D0; margin-right: 10px;">02.</span>Filosofia</a>

      <a target="_blank" href="/static/PDF/Resume.pdf">
        <Button label="Resume" class="p-button-outlined p-button-success" /></a>

    </div>

    <div class="header-navbar">

      <input type="checkbox" id="trigger" hidden>
      <label class="navbarLabel" for="trigger" @click="showNavBar"><span></span></label>

    </div>
  </header>

  <ul class="navbarUl" v-if="navBar">
    <a href="#about" style="color: white;" class="navigation">
      <span style="color: #4FE8D0;">01.</span><br>Sobre</a> <br>

    <a href="#about" style="color: white;" class="navigation">
      <span style="color: #4FE8D0;">02.</span><br>Filosofia</a>

    <a pButton pRipple type="button" label="Resume" target="_blank" href="/static/PDF/Resume.pdf"
      class="p-button-outlined p-button-success"></a>

    <gulybyte-header-Nav></gulybyte-header-Nav>

  </ul>

  <div class="clear"></div>

  <gulybyte-header-Nav></gulybyte-header-Nav>


</template>


<script>
export default {
  data() {
    return {
      navBar: false
    }
  },
  methods: {
    showNavBar() {
      this.navBar = !this.navBar
    }
  }
};
</script>

<style lang="scss">
/* == header == */
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: #0A192F;
  opacity: 1 !important;
  z-index: 998;

  .header-img { padding: 25px; }

  .header-contents
  {
    display: inline-block;
    padding: 25px;

    .navigation
    {
      font-size: 16px;
      font-family: 'SF Mono';
      color: #8892B0 !important;
      padding-right: 30px;
    }.navigation:hover {
      color: #40bba9 !important;
    }
  }

}

.header-navbar {
  display: none;
}



@media screen and (max-width: 768px) {

  /* == header == */
  .header {
    padding: 25px 35px;

    .header-contents { display: none !important; }
    .header-navbar { display: block; }
  }

  /* == MENU HAMBURGUER MOBILE == */

  .navbarLabel { margin: 50px 70px 0 0; position: fixed; top: 0; right: 0; width: 40px; height: 30px; display: flex; align-items: center; z-index: 999; cursor: pointer; }
  .navbarLabel span { width: 100%; height: 4px; background: #060D15; display: block; transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -webkit-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -moz-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -ms-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -o-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); }
  .navbarLabel span::before, .navbarLabel span::after { content: ""; position: absolute; left: 0; right: 0; display: block; height: 4px; background: #5EEAD4; }
  .navbarLabel span::before { top: 0; }
  .navbarLabel span::after { top: calc(100% - 2px); }

  #trigger:checked ~ .navbarLabel { height: 10px; color: #ffffff; }
  #trigger:checked ~ .navbarLabel span { height: 7.8px; background: #060D15; transform: rotate(45deg); }
  #trigger:checked ~ .navbarLabel span::before { top: calc(50% - 1px); transition: transform 0.4s 0.4s cubic-bezier(0.75, 0, 0.25, 1);}
  #trigger:checked ~ .navbarLabel span::after { top: calc(50% - 1px); transition: transform 0.4s 0.4s cubic-bezier(0.75, 0, 0.25, 1); transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); -o-transform: rotate(90deg); }

  .navbarUl {
    background: #060D15;
    color: white;
    position: fixed;
    width: 50% !important;
    padding-top: 15%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 998;
    /* padding: 70px 250px 0 150px; */
    text-align: center !important;
    align-items: center !important;

    .navigation {
      font-size: 25px;
      font-family: 'SF Mono';
      color: #8892B0 !important;
    }.navigation:hover {
      color: #40bba9 !important;
    }

    .p-button-outlined {
      text-align: center !important;
      font-size: 15px;
      margin: 50px auto 0;
      padding: 10px 30px;
    }
  }

}

@media screen and (max-width: 520px) {
  .navbarUl {
    padding: 70px 220px 0 110px;
  }
  .navbarUl> .navigation {
    font-size: 20px;
  }
}

@media screen and (max-width: 400px) {
  .navbarUl {
    padding: 70px 200px 0 90px;
  }
}

@media screen and (max-width: 375px) {
  .navbarUl {
    padding: 70px 180px 0 70px;
  }
}

@media screen and (max-width: 330px) {
  .navbarUl {
    padding: 70px 170px 0 62px;
  }
}


</style>
