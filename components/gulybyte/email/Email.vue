<template>
  <div orientation="right" class="email">
    <a href="mailto:gulybyte@gmail.com" target="_blank" rel="noopener noreferrer">gulybyte@gmail.com</a>
  </div>
</template>

<style lang="scss">
  .email {
    width: 27px;
    position: fixed;
    bottom: 0px;
    right: 40px;
    left: auto;
    font-size: 15px;
    z-index: 10;
  }

  .email::after {
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0px auto;
    background-color: #5EEAD4;
  }

  .email> a {
    margin: 7px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }
</style>
