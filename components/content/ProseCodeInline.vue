<template>
  <code><slot /></code>
</template>

<style lang="scss">
@use 'assets/colors' as c;

code {
  border-radius: 8px !important;
  padding: 5px !important;
  background-color: c.$light-gray !important;
}

</style>
