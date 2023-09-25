<template>
  <aside orientation="right" class="email" data-aos="fade-left" data-aos-duration="2500">
    <a href="mailto:gulybyte@gmail.com" rel="noopener noreferrer">gulybyte@gmail.com</a>
  </aside>
</template>

<style lang="scss">
  @use 'assets/colors' as c;
  @use 'assets/fonts' as f;

  .email { width: 27px;position: fixed;bottom: 0px;right: 40px;left: auto;font-size: 15px;z-index: 10;
    a { text-decoration: none; font-family: f.$font-main; margin: 7px auto;padding: 5px;letter-spacing: 0.1em;-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;}
  }

  .email::after {content: "";display: block;width: 2px;height: 90px;margin: 0px auto;background-color: c.$secondary-color;}

  @media screen and (max-width: 768px)
  {
    .email {position: static;display: none;}
  }
</style>
