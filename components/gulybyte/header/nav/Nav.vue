<template>
  <!-- vesao para nav-menu -->
  <aside class="nav-menu">
    <a href="https://github.com/gulybyte" aria-label="GitHub" target="_blank" rel="noreferrer"><i class="pi pi-github"></i></a>
    <a href="mailto:gulybyte@gmail.com" aria-label="E-Mail" target="_blank" rel="noreferrer"><i class="pi pi-envelope"></i></a>
    <a href="https://www.linkedin.com/in/gulybyte/" aria-label="E-Mail" target="_blank" rel="noreferrer"><i class="pi pi-linkedin"></i></a>
  </aside>



  <aside orientation="left" class="nav" data-aos="fade-right" data-aos-duration="2500">
    <ul>
      <li>
        <a href="https://github.com/gulybyte" aria-label="GitHub" target="_blank" rel="noreferrer">
          <i class="pi pi-github"></i>
        </a>
      </li>
      <li>
        <a href="mailto:gulybyte@gmail.com" aria-label="E-Mail" target="_blank" rel="noreferrer">
          <i class="pi pi-envelope"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/gulybyte/" aria-label="Linkedin" target="_blank" rel="noreferrer">
          <i class="pi pi-linkedin"></i>
        </a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
@use 'assets/colors' as c;

.nav-menu {
  display: none;
}

.nav {
  width: 27px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  ul> li
  {
    padding-bottom: 22px;
    a> i {
      padding-left: 2px;
      font-size: 25px;
    }
  }
}

.nav::after {
  content: "";
  display: block;
  width: 2px;
  height: 90px;
  margin: 0px auto;
  background-color: c.$secondary-color;
}

@media screen and (max-width: 768px) {
  .nav {
    position: static;
    display: none;
  }

  .nav-menu{
    display: block;
    width: 100%;
    white-space: nowrap;
    a> i
    {
      font-size: 25px;
      margin: 0 auto;
      text-align: center;
      padding: 40px 10px;
    }
  }

}

</style>
