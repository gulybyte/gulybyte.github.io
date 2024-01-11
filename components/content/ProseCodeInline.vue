<template>

  <code class="code-inline-prose-tag" v-if="(tag === 'true')"><slot /></code>
  <code class="code-inline-prose" v-if="!(tag === 'true')"><slot /></code>

</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
@use 'assets/fonts' as f;
@use 'assets/colors' as c;

.code-inline-prose-tag {
  border-radius: 8px !important;
  padding: .2rem .3rem !important;
  background-color: c.$dark-color !important;
}

.code-inline-prose {
  font-family: f.$notosans-medium;
}

</style>
