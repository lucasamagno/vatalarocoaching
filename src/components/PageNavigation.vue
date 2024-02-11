<template>
  <div class="page-navigation">
    <router-link to="/executive-coaching" class="nav-item button-text" id="executive">For Executives & Leaders</router-link>
    <router-link to="/rising-professionals" class="nav-item button-text" id="rising">For Rising Stars & Professionals</router-link>
    <router-link to="/for-teams" class="nav-item button-text" id="teams">For Teams</router-link>
    <router-link to="/startups" class="nav-item button-text" id="startups">For Startups</router-link>
  </div>
</template>

<style scoped>
.page-navigation {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.nav-item {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 50%;
  height: 50%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.nav-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: filter 0.3s ease, opacity 0.3s ease; /* Updated transition to include opacity */
  z-index: -1;
  opacity: 1; /* Full opacity by default */
}

.nav-item:hover::before {
  filter: blur(8px); /* Blur effect */
  opacity: 0.8; /* Slightly reduced opacity */
}

/* Assign background images to each nav item */
#executive::before {
  background-image: url('/public/assets/images/pagenavigation/1.jpg');
}

#rising::before {
  background-image: url('/public/assets/images/pagenavigation/2.jpg');
}

#teams::before {
  background-image: url('/public/assets/images/pagenavigation/3.jpg');
}

#startups::before {
  background-image: url('/public/assets/images/pagenavigation/4.jpg');
}

/* Ensures text is visible and not affected by the ::before pseudo-element */
.button-text {
  z-index: 2; /* Higher than the ::before pseudo-element */
  position: relative;
  font-size: 3rem; /* Increased font size for better visibility */
}
</style>

