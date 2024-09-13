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
  const { posts } = await $fetch<{ posts: Post[] }>('http://localhost:3000/api/posts')

  lastPosts.value = posts.slice(0, 10)
})

function linkToPage(id: number): string  {
  return `/posts/${id}`;
}
</script>

<template>
  <section class="text-center">
    <h1>Welcome to your dashboard</h1>
    <h2>Last Posts</h2>
    <nav class="text-left">
      <ul>
        <li v-for="post in lastPosts" :key="post.id">
          <NuxtLink :to="linkToPage(post.id)">{{ post.id }} - {{ post.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>
