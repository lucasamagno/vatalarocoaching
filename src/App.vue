<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  /* You might also want to set the height to ensure it fills the full viewport height */
  height: 100%;
}


#app {

}


h1 {
  font-family: 'Merienda';
}

h2 {
  font-family: 'Lato', sans-serif;
}

h3, h4 {
  font-family: 'Lato', sans-serif;
}

p, li {
  font-family: 'Lato', sans-serif;
}

.button-text {
  font-family: 'Lato', sans-serif;
}
</style>
