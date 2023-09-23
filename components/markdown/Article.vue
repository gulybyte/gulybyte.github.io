<template>
  <section class="markdown-article-container">

    <article>
      <ContentDoc :path="content" :head="false" class="contentdoc-markdown-article"></ContentDoc>
    </article>

  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
@use 'assets/fonts' as f;
@use 'assets/colors' as c;


.markdown-article-container {
  ul {
    list-style: disc !important;
    list-style-position: inside !important;
  }

  scroll-behavior: smooth !important;
  background-color: c.$primary-color-markdown;

  article {
    width: 75% !important;
    margin: 0 auto;
    padding-bottom: 5em;

    h2,h3,h4,h5,h6{font-family: f.$raleway-semibold !important; margin: 1em 0 !important;}
    h2,h3,h4{ border-bottom: 1px solid c.$light-gray; } /*TODO: */

    h1{font-size:3em;text-align:center;padding: 1em 0 !important;}
    h2{font-size:2.25em;}
    h3{font-size:1.77em}
    h4{font-size:1.5em}
    h5{font-size:1.24em}
    h6{font-size:1em;text-align:center;padding-top:0em!important;}

    .contentdoc-markdown-article {
      scroll-behavior: smooth !important;
    }
  }
}


</style>
