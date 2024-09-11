<script setup lang="ts">
  const count = ref(1)
</script>

<template>
  <button @click="count++">plus</button>
  <br>
  {{ count }}
</template>
