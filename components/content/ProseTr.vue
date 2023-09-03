<template>
  <tr role="row" class="tr-row-datatable">
    <slot />
  </tr>
</template>

<style lang="scss">
@use 'assets/colors' as c;

.tr-row-datatable {
  background-color: c.$dark-color;
}
</style>
