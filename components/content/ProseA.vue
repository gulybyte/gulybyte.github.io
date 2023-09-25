<template>
  <NuxtLink class="link-markdown-st"
    :href="href"
    :target="target">
    <slot />
  </NuxtLink>
</template>

<style lang="scss">
@use 'assets/colors' as c;

.link-markdown-st:hover  {
  color: c.$tertiary-color !important;
  text-decoration: none;
}
.link-markdown-st{
  color: c.$secondary-color !important;text-decoration: none !important;
}</style>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>
