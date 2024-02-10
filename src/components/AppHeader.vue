<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/">
        <img class="logo-img" src="/assets/logo.png" alt="Logo">
      </a>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-end">
        <li><router-link to="/">Home</router-link></li>
        <li class="dropdown" @mouseover="openDropdown" @mouseleave="closeDropdown">
          <a href="javascript:void(0)">How I Can Help</a>
          <div class="dropdown-content" v-show="dropdownOpen">
            <router-link to="/executive-coaching" @click="closeDropdown">For Executives & Leaders</router-link>
            <router-link to="/rising-professionals" @click="closeDropdown">For Rising Stars & Professionals</router-link>
            <router-link to="/for-teams" @click="closeDropdown">For Teams</router-link>
            <router-link to="/startups" @click="closeDropdown">For Startups</router-link>
          </div>
        </li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
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
  font-size: 18px;
}

.navbar-brand a {
  text-decoration: none;
  color: inherit;
}

.logo-img {
  max-height: 40px;
}

.navbar-menu .navbar-end {
  list-style: none;
  display: flex;
  align-items: center;
}

.navbar-end li {
  margin-left: 20px;
}

.navbar-end li a, .dropdown-content a {
  text-decoration: none;
  color: inherit;
  padding: 10px 15px;
  display: block;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Updated for scaling and highlighting */
}

/* Updated hover effect for scaling and highlighting */
.navbar-end li a:hover, .dropdown-content a:hover {
  transform: scale(1.1); /* Scaling effect */
  background-color: #FFCC99; /* Highlighting effect */
  color: #505050; /* Ensuring text color contrasts well with the highlight */
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  flex-direction: column;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

.router-link-exact-active {
  background-color: #F5AB63;
  color: #333;
}

.dropdown-content {
  display: block; /* Changed from none to block */
  visibility: hidden; /* Initially hidden */
  opacity: 0; /* Start fully transparent */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  flex-direction: column;
  transition: visibility 0s, opacity 0.5s linear; /* Fade-in effect */
}
.dropdown:hover .dropdown-content {
  visibility: visible; /* Make dropdown visible on hover */
  opacity: 1; /* Fade to fully opaque */
}

.dropdown:hover > a {
  transform: scale(1.1); /* Keep the scaling effect */
  background-color: #FFCC99; /* Maintain the highlighting effect */
  color: #505050; /* Ensuring text color contrasts well with the highlight */
}
</style>
