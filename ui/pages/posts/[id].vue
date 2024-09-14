<template>
  <span>{{ post.id }}</span>
  <h1>{{ post.title }}</h1>
  <p>{{ post.content }}</p>
</template>

<script setup lang="ts">
const route = useRoute()
const postStore = usePostStore()

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

const ID_POST: number = route.params.id as unknown as number

watchEffect(async () => {
  await postStore.fetchPost(ID_POST)
})

const post = computed(() => postStore.post)
</script>
