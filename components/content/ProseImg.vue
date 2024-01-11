<template>
  <nuxt-img :src="src" :alt="alt"
    :style="'width:'+width+';height:'+height+';margin:'+position"
    :quality="quality" :format="format"></nuxt-img>
</template>

<script setup lang="ts">

defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  quality: {
    type: [String, Number],
    default: 100
  },
  format: {
    type: [String, Number],
    default: 'png'
  },
  position: {
    type: [String],
    default: 'none'
  }
})
</script>
