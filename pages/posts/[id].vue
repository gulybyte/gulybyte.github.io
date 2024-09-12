<template>
  <h1>{{ route.params.id }}</h1>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})
</script>
