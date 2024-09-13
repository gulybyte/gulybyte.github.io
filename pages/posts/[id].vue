<template>
  <span>{{ post.id }}</span>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

const ID_POST: number = route.params.id as unknown as number

interface Post {
  id: number
  title: string
  body: string
}

const post = useState<Post>('post', () => ({
  id: 0,
  title: '',
  body: ''
}))

watchEffect(async () => {
  const posts = await $fetch<Post[]>(`http://localhost:8000/posts?id=${ID_POST}`)
  post.value = posts[0]
})
</script>
