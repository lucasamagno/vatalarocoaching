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
  height: 100%;
}


#app {

}


h1 {
  font-family: 'Fraunces';
  font-weight: 100;
}

h2 {
  font-family: 'Lato', sans-serif;
}

h3, h4 {
  font-family: 'Lato', sans-serif;
}

p, li {
  font-family: 'Lato', sans-serif;
  font-size: 18px;
}

.button-text {
  font-family: 'Roboto', sans-serif;
}
</style>
