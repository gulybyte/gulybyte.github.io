<template>
  <code><slot /></code>
</template>

<style lang="scss">
@use 'assets/colors' as c;

code {
  border-radius: 8px !important;
  padding: .2rem .3rem !important;
  background-color: c.$dark-color !important;
}

</style>
