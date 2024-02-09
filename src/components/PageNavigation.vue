<template>
  <div class="page-navigation">
    <p><router-link v-if="$route.path !== '/about'" to="/about" class="nav-button" id="about-button">About</router-link></p>
    <p><router-link v-if="$route.path !== '/executive-coaching'" to="/executive-coaching" class="nav-button" id="executive-coaching-button">Executive Coaching</router-link></p>
    <p><router-link v-if="$route.path !== '/consulting'" to="/consulting" class="nav-button" id="consulting-button">Consulting</router-link></p>
  </div>
</template>

<script setup>
// Script setup for composition API if needed later
</script>

<style scoped>
.page-navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
}

.nav-button {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  font-size: 20px;
  transition: transform 0.3s;
}

.nav-button:hover {
  transform: scale(1.05);
}

/* Add background images for each button here */
#about-button {
   background-image: url('/public/assets/images/pagenavigation/1.jpeg');
}

#executive-coaching-button {
  background-image: url('/public/assets/images/pagenavigation/2.jpeg');
}

#consulting-button {
  background-image: url('/public/assets/images/pagenavigation/3.jpeg');
}
</style>
