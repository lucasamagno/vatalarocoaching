<template>
  <LandingPage msg="Welcome to Your Vue.js App"/>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 800px; 
}


h1 {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 45px;
}

h2 {
  font-family: 'Lora', sans-serif;
}

h3, h4 {
  font-family: 'Manrope', sans-serif;
}

p, li {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
}
</style>
