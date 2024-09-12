<template>
  <span>{{ post.id }}</span>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
</template>

<script setup lang="ts">
const route = useRoute()

const ID_POST = route.params.id;

interface Post {
  id: number;
  title: string;
  body: string;
}

const post = useState<Post>('post')

await callOnce(async () => {
  const posts = await $fetch<Post[]>(`http://localhost:8000/posts?id=${ID_POST}`)
  post.value = posts[0]
})
</script>
