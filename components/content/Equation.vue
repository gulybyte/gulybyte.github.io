<template>
  <vue-mathjax :formula="'$$' + expression + '$$'" :style="'font-size:' + size" />
</template>

<script setup>
import VueMathjax from 'vue-mathjax-next'

useHead({
  script: [
    {
      hid: 'mathjax',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML',
      defer: true,
    },
  ],
});

defineProps(['size','expression'])
</script>
