<template>
  <footer class="footer-content">
    <NuxtLink :href="linkcontent">
      <Button size="large" icon="pi pi-reply" class="next-content" severity="info" :label="content" outlined></Button>
    </NuxtLink>
  </footer>
</template>

<script>
export default {
  props: {
    linkcontent: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.footer-content {
  width: 90% !important;
}.next-content {
  margin: 50px 0;
  float: right;
}
</style>
