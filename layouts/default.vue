<template>
  <div class="background">
    <Marquee />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>
<style lang="scss">
html {
  overflow-x: hidden;
  font-family: 'NeueMachina-Regular', sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-size: contain;
  background-color: $background;
}
html,
body {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
