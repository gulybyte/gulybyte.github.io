<template>
  <td class="td-row-datatable">
    <slot />
  </td>
</template>

<style lang="scss">
@use 'assets/colors' as c;

.td-row-datatable {
  padding: 1rem !important;
  border-bottom: 2px solid c.$primary-color;
}
</style>
