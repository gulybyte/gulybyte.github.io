<template>
  <header class="header">

    <figure class="pl-8" data-aos="zoom-in-right" data-aos-duration="1000">
      <a href="/">
        <img width="50" alt="Logo" src="/static/images/icon.png">
      </a>
    </figure>

    <nav class="header-contents" data-aos="zoom-in-left" data-aos-duration="2000">

      <NuxtLink href="/articles" class="nav-link">
        <span class="nav-link-number">01.</span> Artigos
      </NuxtLink>

      <a href="#about" class="nav-link">
        <span class="nav-link-number">02. </span>Sobre
      </a>

      <!-- <a href="#philosophy" class="nav-link">
        <span class="nav-link-number">03. </span>Filosofia
      </a> -->

      <a target="_blank" href="/static/PDF/Resume.pdf" rel="noopener">
        <Button label="Resume" class="p-button-outlined p-button-success" style="padding: 8px 15px;" />
      </a>

    </nav>

    <figure class="hamburger-menu">

      <input type="checkbox" id="nav-toggle" hidden>
      <label class="nav-toggle-label" for="nav-toggle" @click="showToggleNav"><span></span></label>

    </figure>
  </header>

  <nav>
    <ul class="navbar" v-if="navVisible">

      <li>
        <NuxtLink href="/articles" class="nav-link">
          <span class="nav-link-number">01.</span> Artigos
        </NuxtLink>
      </li>

      <li>
        <a href="#about" class="nav-link">
          <span class="nav-link-number">02.</span> Sobre
        </a>
      </li>

      <!-- <li>
        <a href="#about" class="nav-link">
          <span class="nav-link-number">03.</span> Filosofia
        </a>
      </li> -->

      <li>
        <a href="static/PDF/Resume.pdf">
          <Button type="button" label="Resume"
            class="p-button-outlined p-button-success"></Button>
        </a>
      </li>

      <li>
        <gulybyte-header-Nav></gulybyte-header-Nav>
      </li>

    </ul>
  </nav>

  <div class="clear-both"></div>

  <gulybyte-header-Nav></gulybyte-header-Nav>

</template>


<script>
  export default {
    data() {
      return {
        navVisible: false
      }
    },
    methods: {
      showToggleNav() {
        this.navVisible = !this.navVisible
      }
    }
  };
</script>

<style lang="scss">
  @use 'assets/colors' as c;
  @use 'assets/fonts' as f;

  .header {width: 100%;display: flex;align-items: center;justify-content: space-between;position: fixed;top: 0;background-color: c.$primary-color;opacity: 1 !important;z-index: 998;
    .header-contents{display: inline-block;padding: 25px;
      .nav-link{color: white;font-size: 16px;font-family: f.$sf-mono;color: c.$light-gray !important;padding-right: 30px;}
      .nav-link:hover {color: c.$secondary-color !important;}
    }
  }

  .nav-link{.nav-link-number{color: c.$secondary-color;}}

  .hamburger-menu {display: none;}

  @media screen and (max-width: 768px) {

    .header {padding: 25px 35px;
      .header-contents { display: none !important; }
      .hamburger-menu { display: block; padding: 38px; }
    }

    /* == HAMBURGUER MENU MOBILE == */

    .nav-toggle-label { margin: 50px 70px 0 0; position: fixed; top: 0; right: 0; width: 40px; height: 30px; display: flex; align-items: center; z-index: 999; cursor: pointer;
      span { width: 100%; height: 4px; background: c.$dark-color; display: block; transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -webkit-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -moz-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -ms-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); -o-transition: transform .3s cubic-bezier(0.75, 0, 0.25, 1); }
      span::before, span::after { content: ""; position: absolute; left: 0; right: 0; display: block; height: 4px; background: c.$secondary-color; }
      span::before { top: 0; }
      span::after { top: calc(100% - 2px); }
    }

    #nav-toggle:checked ~ .nav-toggle-label { height: 10px; color: white; }
    #nav-toggle:checked ~ .nav-toggle-label span { height: 7.8px; background: c.$dark-color; transform: rotate(45deg); }
    #nav-toggle:checked ~ .nav-toggle-label span::before { top: calc(50% - 1px); transition: transform 0.4s 0.4s cubic-bezier(0.75, 0, 0.25, 1);}
    #nav-toggle:checked ~ .nav-toggle-label span::after { top: calc(50% - 1px); transition: transform 0.4s 0.4s cubic-bezier(0.75, 0, 0.25, 1); transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); -o-transform: rotate(90deg); }

    .navbar {background-color: c.$dark-color;color: white;position: fixed;width: 50% !important;padding-top: 15%;height: 100%;top: 0;left: 0;z-index: 998;text-align: center !important; align-items: center !important;
      .nav-link {font-size: 25px;font-family: f.$sf-mono;color: c.$light-gray !important;}
      .nav-link:hover {color: c.$secondary-color !important;}
      .p-button-outlined {text-align: center !important;font-size: 15px;margin: 50px auto 0;padding: 10px 30px;}
    }

  }

  @media screen and (max-width: 520px) {
    .navbar {padding: 50px 10px;
      .nav-link {font-size: 20px;}
    }
  }

  @media screen and (max-width: 400px) {
    .navbar {padding: 50px 40px;}
  }

  @media screen and (max-width: 375px) {
    .navbar {padding: 50px 30px;}
  }

  @media screen and (max-width: 330px) {
    .navbar {padding: 50px 25px;}
  }


</style>
