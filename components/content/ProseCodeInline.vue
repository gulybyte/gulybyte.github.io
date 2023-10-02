<template>
  <code class="code-inline-prose"><slot /></code>
</template>

<style lang="scss">
@use 'assets/fonts' as f;

/* desativado até segunda ordem, muito feio */
/* code {
  border-radius: 8px !important;
  padding: .2rem .3rem !important;
  background-color: c.$dark-color !important;
}
 */

.code-inline-prose {
  font-family: f.$montserrat-medium;
}

</style>
