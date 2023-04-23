<template>
  <div>
    <ContentDoc id="myInput" path="/"></ContentDoc>
    <button @click="copyText">Copy text</button>
  </div>
</template>

<script>
export default {
  methods: {
    copyText() {
      const content = this.$el.querySelector('#myInput')
      navigator.clipboard.writeText(content.innerText)
        .then(() => {
          console.log("Copy success")
        })
        .catch((error) => {
          console.error('Failed to copy text: ', error)
        })
    }
  }
}
</script>
