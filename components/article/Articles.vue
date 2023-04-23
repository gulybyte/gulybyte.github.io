<template>
  <div class="code-container">

    <ContentDoc id="code1" path="/"></ContentDoc>

    <button class="copy-btn" @click="copyText('code1')">
        <i :class="copyIcon"></i></button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      copyIcon: 'pi pi-clone text-white'
    }
  },
  methods: {
    // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
    copyText(input) {
      const textToCopy = this.$el.querySelector(`#${input}`).textContent
      const textWithoutColors = textToCopy.split('.ct-')[0]
      navigator.clipboard.writeText(textWithoutColors)
        .then(() => {
          console.log("Copy success")
          this.copyIcon = 'pi pi-check text-lime-300' // altera o ícone para o de sucesso
          setTimeout(() => {
            this.copyIcon = 'pi pi-clone text-white' // volta para o ícone de cópia após 2 segundos
          }, 1000)
        })
        .catch((error) => {
          console.error('Failed to copy text: ', error)
        })
    }
  }
}
</script>

<style lang="scss">
@use 'assets/colors' as c;

.code-container {
  position: relative;
  background-color: c.$dark-color;
  color: white;
  padding: 10px;

  pre {
    margin: 0;
    font-size: 1.2rem;
  }

  .copy-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 20px;
    color: c.$secondary-color !important;
    i {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
