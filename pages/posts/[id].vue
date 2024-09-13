<template>
  <span>{{ post.id }}</span>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
</template>

<script setup lang="ts">
import type { Post } from '@/interfaces/Post'

const route = useRoute()

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

const ID_POST: number = route.params.id as unknown as number

const post = useState<Post>('post', () => ({
  id: 0,
  title: '',
  body: ''
}))

watchEffect(async () => {
  const { posts } = await $fetch<{ posts: Post[] }>(`http://localhost:3000/api/posts`)

  post.value = posts[ID_POST-1]
})
</script>
