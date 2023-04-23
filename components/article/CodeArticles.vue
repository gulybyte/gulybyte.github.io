<template>
  <div class="code-container">

    <ContentDoc id="code" :path="content"></ContentDoc>

    <button class="copy-code" @click="copyText('code')">
        <i :class="copyIcon"></i></button>

  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
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
  overflow-x: auto;
  max-width: 98%;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
  background-color: c.$dark-color;
  color: white;
  padding: 10px;

  pre {
    margin: 0;
    font-size: 1.2rem;
  }

  /* Necessário devido aos artigos que tem codes e eles alteram os códigos do markdown. */
  code {
    border-radius: 0px !important;
    padding: 0px !important;
    background-color: none !important;
  }

  .copy-code {
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
