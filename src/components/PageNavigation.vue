<template>
  <div class="page-navigation">
    <p v-if="$route.path !== '/about' && $route.path !== '/'"><router-link to="/about" class="nav-button" id="about-button">About</router-link></p>
    <p><router-link v-if="$route.path !== '/executive-coaching'" to="/executive-coaching" class="nav-button" id="executive-coaching-button">Executive Coaching</router-link></p>
    <p><router-link v-if="$route.path !== '/consulting'" to="/consulting" class="nav-button" id="consulting-button">Consulting</router-link></p>
  </div>
</template>

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
  width: 450px; /* Adjusted width */
  height: 200px; /* Adjusted height */
  border-radius: 10px;
  font-size: 24px; /* Increased font size */
  transition: transform 0.3s;
  background-color: rgba(236, 137, 62, 0.5); /* Apply orange tint to the background */
  position: relative;
  margin: 0 20px;
}

.nav-button:hover {
  transform: scale(1.05);
}
</style>
