<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/">
        <h1 className="logo-img">VC</h1>
      </a>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-end">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="dropdown" @mouseover="openDropdown" @mouseleave="closeDropdown">
          <a href="javascript:void(0)" class="nav-link">How I Can Help</a>
          <div class="dropdown-content" v-show="dropdownOpen">
            <router-link to="/executive-coaching" class="nav-link" @click="closeDropdown">For Executives & Leaders</router-link>
            <router-link to="/rising-professionals" class="nav-link" @click="closeDropdown">For Rising Stars & Professionals</router-link>
            <router-link to="/for-teams" class="nav-link" @click="closeDropdown">For Teams</router-link>
            <router-link to="/startups" class="nav-link" @click="closeDropdown">For Startups</router-link>
          </div>
        </li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const dropdownOpen = ref(false);

const openDropdown = () => {
  dropdownOpen.value = true;
};

const closeDropdown = () => {
  dropdownOpen.value = false;
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  height: 80px;
  padding: 0 20px;
  background-color: #FFFFFF; /* White background */
}

.navbar-brand a {
  text-decoration: none;
}

.logo-img {
  font-size: 35px;
  color: black;
}

.navbar-menu .navbar-end {
  list-style: none;
  display: flex;
  align-items: center;
}

.navbar-end li {
  margin-left: 20px;
}

.nav-link {
  text-decoration: none;
  color: #333; /* Dark text color */
  padding: 10px 15px;
  border-radius: 10px; /* Added border radius */
  transition: background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease; /* Adjusted transition properties */
}

.nav-link:hover {
  background-color: #2A9D8F; /* Green background color */
  color: #FFF; /* White text color */
  /* border-radius: 10px; */ /* Removed border-radius from hover state */
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 10px; /* Added border radius */
}

.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
}

.router-link-exact-active {
  background-color: #2A9D8F; /* Corrected green color */
  color: #FFF; /* White text color */
  border-radius: 10px; /* Added border radius */
}
</style>
