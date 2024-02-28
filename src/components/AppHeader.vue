<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/">
        <h1 class="logo-img">VC+C</h1>
      </a>
    </div>
    <button class="hamburger-button" @click="toggleMobileMenu" v-if="isMobile">
      <div class="hamburger-icon" :class="{ 'active': isMobileMenuVisible }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <div v-show="!isMobile" class="desktop-menu">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/executive-coaching" class="nav-link">Executives & Leaders</router-link>
      <router-link to="/rising-professionals" class="nav-link">Rising Stars & Professionals</router-link>
      <router-link to="/for-teams" class="nav-link">Teams</router-link>
      <router-link to="/startups" class="nav-link">Startups</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
    <transition name="fade">
      <div v-show="isMobileMenuVisible" class="full-page-menu" v-if="isMobile">
        <router-link to="/" class="menu-item" @click="toggleMobileMenu">Home</router-link>
        <router-link to="/executive-coaching" class="menu-item" @click="toggleMobileMenu">Executives & Leaders</router-link>
        <router-link to="/rising-professionals" class="menu-item" @click="toggleMobileMenu">Rising Stars & Professionals</router-link>
        <router-link to="/for-teams" class="menu-item" @click="toggleMobileMenu">Teams</router-link>
        <router-link to="/startups" class="menu-item" @click="toggleMobileMenu">Startups</router-link>
        <router-link to="/about" class="menu-item" @click="toggleMobileMenu">About</router-link>
        <router-link to="/contact" class="menu-item" @click="toggleMobileMenu">Contact</router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const isMobileMenuVisible = ref(false);
const isMobile = ref(window.innerWidth < 768);

const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
  if (isMobileMenuVisible.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

watchEffect(() => {
  const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
    if (!isMobile.value) {
      isMobileMenuVisible.value = false;
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  height: 80px;
  padding: 0 20px;
  background-color: rgb(249,249,235);
}

.navbar-brand a {
  text-decoration: none;
}

.logo-img {
  font-size: 35px;
  color: black;
}

.desktop-menu .nav-link {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  margin: 0 10px;
  display: inline-block;
}

.hamburger-button {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
}

.hamburger-icon {
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.hamburger-icon span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #000;
  transition: all 0.3s ease;
}

.hamburger-icon.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-icon.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.full-page-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.menu-item {
  color: white;
  font-size: 24px;
  padding: 15px;
  text-decoration: none;
  border: none;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: #ccc;
}

@media (min-width: 768px) {
  .hamburger-button, .full-page-menu {
    display: none;
  }
  .desktop-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
