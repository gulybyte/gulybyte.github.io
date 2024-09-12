<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

interface Post {
  id: number;
  title: string;
}

const lastPosts = useState<Post[]>('lastPosts')

await callOnce(async () => {
  const posts = await $fetch<Post[]>('http://localhost:8000/posts')

  lastPosts.value = posts.slice(0, 10)
})
</script>

<template>
  <h1>Welcome to your dashboard</h1>
  <h2>Last Posts</h2>
  <nav>
    <ul>
      <li v-for="post in lastPosts" :key="post.id">
        {{ post.id }} - {{ post.title }}
      </li>
    </ul>
  </nav>
</template>
