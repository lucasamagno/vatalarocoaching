<template>
  <div class="new-page-navigation">
    <router-link to="/executive-coaching" class="new-nav-item" id="new-executive">For Executives & Leaders</router-link>
    <router-link to="/rising-professionals" class="new-nav-item" id="new-rising">For Rising Stars & Professionals</router-link>
    <router-link to="/for-teams" class="new-nav-item" id="new-teams">For Teams</router-link>
    <router-link to="/startups" class="new-nav-item" id="new-startups">For Startups</router-link>
  </div>
</template>

<style scoped>
.new-page-navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Creates two columns */
  grid-gap: 20px; /* Space between items */
  justify-items: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  background-color: rgb(249,249,235); /* Cream background for the navigation */
  padding: 40px;
  box-sizing: border-box;
  min-height: 70vh; /* Ensure the container takes at least the height of the viewport */
}

.new-nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%; /* Take up full width of the grid column */
  height: 5rem;
  padding: 15px 20px;
  text-decoration: none;
  color: #fff; /* White text for contrast against dark mode buttons */
  background-color: #141726; /* Dark mode color for the buttons */
  text-align: center;
  font-size: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.354); /* Adjusted shadow for a more pronounced effect in dark mode */
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-family: "Lato";
}

.new-nav-item:hover {
  background-color: #2b3152; /* Slightly lighter dark mode color for hover */
  transform: translateY(-2px);
}
</style>

