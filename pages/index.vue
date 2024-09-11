<script setup lang="ts">
</script>

<template>
  <TestCompo>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </TestCompo>
  <section>
    <h1 class="text-center text-2xl">Welcome to the homepage</h1>
    <br>
    <NuxtImg class="rounded-full" src="/img/guilherme-luis-franca.png" width="200" />
  </section>
</template>

