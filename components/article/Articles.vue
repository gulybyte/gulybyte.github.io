<template>
  <div>
    <ContentDoc id="myInput" path="/"></ContentDoc>
    <button ref="copyButton">Copy text</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      const copyButton = this.$refs.copyButton
      const content = this.$el.querySelector('#myInput')
      copyButton.addEventListener('click', () => {
        const range = document.createRange()
        range.selectNodeContents(content)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand('copy')
        alert('Copied to clipboard!')
      })
    })
  }
}
</script>
