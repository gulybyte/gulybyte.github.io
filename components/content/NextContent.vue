<template>
  <footer class="footer-content">
    <NuxtLink :href="linkcontent">
      <Button size="large" icon="pi pi-reply" class="next-content" severity="info" :label="content" outlined></Button>
    </NuxtLink>
  </footer>

  <article-HeadGeneric></article-HeadGeneric>
</template>

<script setup>
defineProps({
  linkcontent: {
    type: String,
    equired: true
  },
  content: {
    type: String,
    equired: true
  }
})
</script>

<style>
.footer-content {
  width: 100% !important;
}.next-content {
  margin: 50px 0;
  float: right;
}
</style>
