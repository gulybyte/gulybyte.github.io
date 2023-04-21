<template>
  <!-- vesao para nav-menu -->
  <aside class="nav-menu">
    <a href="https://github.com/gulybyte" aria-label="GitHub" target="_blank" rel="noreferrer"><i class="pi pi-github"></i></a>
    <a href="https://www.instagram.com/gulybyte/" aria-label="Instagram" target="_blank" rel="noreferrer"><i class="pi pi-instagram"></i></a>
    <a href="mailto:gulybyte@gmail.com" aria-label="E-Mail" target="_blank" rel="noreferrer"><i class="pi pi-envelope"></i></a>
  </aside>



  <aside orientation="left" class="nav">
    <ul>
      <li>
        <a href="https://github.com/gulybyte" aria-label="GitHub" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gulybyte/" aria-label="Instagram" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
            <title>Instagram</title>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </li>
      <li>
        <a href="mailto:gulybyte@gmail.com" aria-label="E-Mail" target="_blank" rel="noreferrer">
          <svg style="color: rgb(94, 234, 212);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0">
            <title>E-Mail</title>
            <defs><clipPath id="id1">
              <path d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 " clip-rule="nonzero" fill="#5eead4"></path>
            </clipPath></defs>
            <g clip-path="url(#id1)">
              <path fill="#5eead4" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 " fill-opacity="1" fill-rule="nonzero"></path>
            </g>
          </svg>
        </a>
      </li>
      <!--<li>
        <a href="https://www.linkedin.com/in/" aria-label="Linkedin" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </li>-->
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
