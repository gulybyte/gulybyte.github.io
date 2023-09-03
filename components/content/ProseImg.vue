<template>
  <nuxt-img :src="src" :alt="alt"></nuxt-img>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
})
</script>
