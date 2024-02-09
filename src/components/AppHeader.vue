<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/">
        VC
      </a>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-end">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/executive-coaching">Executive Coaching</router-link></li>
        <li><router-link to="/consulting">Consulting</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

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
  font-size: 24px;
  transition: color 0.3s ease;
}

.navbar-menu .navbar-end {
  list-style: none;
  display: flex;
}

.navbar-end li {
  margin-left: 20px;
}

.navbar-end li a {
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  border-radius: 20px;
  padding: 10px 15px;
}

/* Updated hover effect with the specified lighter orange color */
.navbar-end li a:hover {
  transform: scale(1.05);
  background-color: #FFCC99; /* Even lighter shade of orange */
  color: #505050; /* Darker text for better contrast */
}

/* Updated style for the active link with a slightly darker shade of the specified orange */
.router-link-exact-active {
  background-color: #F5AB63; /* The original orange color for active links */
  color: #333;
  border-radius: 20px;
  padding: 10px 15px;
}

/* Adjusting the hover style to not apply for active link */
.navbar-end li a:hover:not(.router-link-exact-active) {
  transform: scale(1.05);
  background-color: #FFCC99; /* Consistent with the hover effect */
  color: #505050;
}
</style>


