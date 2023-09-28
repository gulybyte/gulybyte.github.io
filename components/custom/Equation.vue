<template>
  <vue-mathjax :formula="'$$' + expression + '$$'" />
</template>

<script setup>
useHead({
  script: [
      {
          hid: 'mathjax',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML',
          defer: true,
      },
  ],
})
import VueMathjax from 'vue-mathjax-next'
const props = defineProps(['expression'])
</script>
