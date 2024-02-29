<template>
  <div class="new-page-navigation">
    <router-link to="/executive-coaching" class="new-nav-item" id="new-executive"><strong>Executives & Leaders</strong></router-link>
    <router-link to="/rising-professionals" class="new-nav-item" id="new-rising"><strong>Rising Stars & Professionals</strong></router-link>
    <router-link to="/for-teams" class="new-nav-item" id="new-teams"><strong>Teams</strong></router-link>
    <router-link to="/startups" class="new-nav-item" id="new-startups"><strong>Startups</strong></router-link>
  </div>
</template>

<style scoped>
.new-page-navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  background-color: rgb(249,249,235);
  padding: 20px; /* Adjusted padding for better spacing */
  box-sizing: border-box;
  min-height: 70vh;
}

.new-nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%; /* Adjust width for better fit */
  height: 10rem;
  margin: 0 auto; /* Center align items */
  padding: 15px 1%; /* Adjust padding to ensure it fits within the container */
  text-decoration: none;
  color: #fff;
  background-color: #141726;
  text-align: center;
  font-size: 1.8rem; /* Adjust font size for better readability */
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.354);
  transition: background-color 0.3s, transform 0.2s;
  font-family: "Lato";
}

.new-nav-item:hover {
  background-color: #2b3152;
  transform: translateY(-2px);
}

@media (max-width: 430px) {
  .new-page-navigation {
    padding: 10px; /* Reduce padding for very small screens */
    grid-template-columns: 1fr; /* Single column layout */
  }

  .new-nav-item {
    width: 100%; /* Full width to utilize available space */
    margin-bottom: 10px; /* Reduce margin for compact layout */
    font-size: 1.6rem; /* Adjust font size for smaller screens */
    height: 6rem;
  }

  .new-nav-item:last-child {
    margin-bottom: 0;
  }
}
</style>
