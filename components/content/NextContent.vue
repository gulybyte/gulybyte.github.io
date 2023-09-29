<template>
  <footer class="footer-content">
    <NuxtLink :href="linkcontent">
      <Button aria-label="Próximo conteudo" size="large" icon="pi pi-reply" class="next-content" severity="info" :label="content" outlined></Button>
    </NuxtLink>
  </footer>
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
