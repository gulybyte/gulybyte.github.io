<template>
  <div class="code-container">

    <code id="code-content-copy"><slot /></code>

    <button aria-label="Copiar código" class="copy-code" @click="copyText('code-content-copy')">
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
    async copyText(input) {
      const textToCopy = this.$el.querySelector(`#${input}`).textContent
      const textWithoutSaida = textToCopy.split('saida:')[0]
      const textWithoutColors = textWithoutSaida.split('.ct-')[0]
      navigator.clipboard.writeText(textWithoutColors)
        .then(() => {
          console.log("Copy success")
          this.copyIcon = 'pi pi-check text-lime-600' // altera o ícone para o de sucesso
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
  max-width: 100%;
  margin: -.5em auto 1em;
  border-radius: 8px;
  position: relative;
  background-color: c.$dark-color;
  color: white;
  padding: 10px;

  pre {
    margin: 0;
    font-size: 1.2rem;
    background-color: c.$dark-color;
  }

  /* Necessário devido aos artigos que tem codes e eles alteram os códigos do markdown. */
  code {
    border-radius: 0px !important;
    padding: 0px !important;
    background-color: none !important;
    .line {
      background-color: c.$dark-color !important;
    }
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
