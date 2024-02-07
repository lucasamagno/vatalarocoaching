<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/">
        VC
      </a>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-end">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/individual-coaching">Individual Coaching</router-link></li>
        <li><router-link to="/startup-coaching">Startup Coaching</router-link></li>
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
}
.navbar-brand img {
  height: 50px; 
}
.navbar-menu .navbar-end {
  list-style: none;
  display: flex;
}
.navbar-end li {
  margin-left: 20px;
}
</style>