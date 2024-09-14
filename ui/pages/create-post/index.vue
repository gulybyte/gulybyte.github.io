<script setup lang="ts">
import type { PostsDto } from '@/lib/types/PostsDto'

definePageMeta({
  middleware: 'auth'
});

const lastPosts = useState<PostsDto[]>('lastPosts')

await callOnce(async () => {
  const posts = await $fetch<PostsDto[]>(`${useRuntimeConfig().public.apiUrl}/posts`)

  lastPosts.value = posts
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
