<template>
  <th class="th-row-datatable">
    <slot />
  </th>
</template>

<style lang="scss">
@use 'assets/colors' as c;

.th-row-datatable {
  padding: 1rem !important;
  border-bottom: 2px solid c.$primary-color;
}
</style>
