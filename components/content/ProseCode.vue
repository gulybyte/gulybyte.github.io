<template>

  <span style="display: none;" ref="contentCodeSlot"><slot /></span>

  <i style="width: 100%; font-size: 25px; text-align: center;" class="pi pi-spin pi-spinner" v-if="visibleLoadSpinner"></i>

  <custom-Equation :expression="codeInSlot" v-if="visibleMath"></custom-Equation>

  <div class="code-container" v-if="visibleCode">
    <code id="code-content-copy"><slot /></code>

    <button class="copy-code" @click="copyText()">
        <i :class="copyIcon"></i></button>

  </div>

</template>

<script>
export default {
  mounted() {
    const contentCode = this.$refs.contentCodeSlot.textContent;
    if(contentCode.includes("math:")) {
      this.enableMath(contentCode)
    } else {
      this.enableCode(contentCode)
    }
  },
  data() {
    return {
      copyIcon: 'pi pi-clone text-white',
      visibleMath: false,
      visibleCode: false,
      codeInSlot: '',
      visibleLoadSpinner: true
    }
  },
  methods: {
    enableMath(contentCode) {
      const latexCode = contentCode.replace(/^math: /, '');
      this.codeInSlot = latexCode;
      this.visibleLoadSpinner = false
      this.visibleMath = true
    },
    enableCode(contentCode) {
      this.codeInSlot = contentCode;
      this.visibleLoadSpinner = false
      this.visibleCode = true
    },

    // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
    copyText() {
      const textToCopy = this.$refs.contentCodeSlot.textContent;
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
