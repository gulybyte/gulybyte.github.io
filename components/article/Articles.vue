<template>
  <div>
    <ContentDoc id="myInput" path="/"></ContentDoc>
    <button @click="copyText('myInput')">Copy text</button>
  </div>
</template>

<script>
export default {
  methods: {
    // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
    copyText(input) { navigator.clipboard.writeText(this.$el.querySelector(`#${input}`).textContent.split('.ct-')[0]); }
  }
}
</script>
