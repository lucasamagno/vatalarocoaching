<template>
  <div class="page-navigation">
    <div class="nav-item" v-if="$route.path !== '/executive-coaching'">
      <p><router-link to="/executive-coaching" class="nav-button">For Executives & Leaders</router-link></p>
    </div>
    <div class="nav-item" v-if="$route.path !== '/rising-professionals'">
      <p><router-link to="/rising-professionals" class="nav-button">For Rising Stars & Professionals</router-link></p>
    </div>
    <div class="nav-item">
      <p><router-link v-if="$route.path !== '/for-teams'" to="/for-teams" class="nav-button">For Teams</router-link></p>
    </div>
    <div class="nav-item">
      <p><router-link v-if="$route.path !== '/startups'" to="/startups" class="nav-button">For Startups</router-link></p>
    </div>
  </div>
</template>

<style scoped>
.page-navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Creates a 2-column grid */
  gap: 20px; /* Spacing between grid items */
  padding: 20px 0;
  max-width: 960px; /* Adjust based on your preference */
  margin: auto; /* Center the grid in the page */
}

.nav-item {
  width: 100%; /* Ensure the container takes up all available space */
}

.nav-button {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%; /* Ensure button takes up all available space in .nav-item */
  height: 150px; /* Adjusted height for uniformity */
  border-radius: 10px;
  font-size: 20px;
  transition: transform 0.3s;
  background-color: #F5AB63;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.nav-button:hover {
  transform: scale(1.05);
  background-color: #E89C4F;
}
</style>
