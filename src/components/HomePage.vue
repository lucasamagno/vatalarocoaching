<script setup>
import HeroSection from '@/components/HeroSection.vue';
import ApproachSection from './ApproachSection.vue';
import ExperienceSection from './ExperienceSection.vue'
import AboutPage from './AboutPage.vue'
</script>

<template>
  <div>
    <HeroSection />
    <ApproachSection />  
    <ExperienceSection />
    <AboutPage />
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  height: auto; /* Adjust based on content or set a fixed height */
}

.about-left-side {
  width: 30%;
  background-image: url('/public/assets/images/IMG_1455.jpg'); /* Adjusted path for public directory */
  background-repeat: no-repeat;
  background-size: calc(100% - 20px); /* Adjust the 20px to increase/decrease the 'margin' */
  background-position: center;
  display: flex; /* Ensures the container can use flex properties */
  justify-content: center; /* Horizontally centers the content */
  align-items: center; /* Vertically centers the content */
}


.about-right-side {
  width: 80%;
  padding: 20px; /* Provides spacing for the content */
}

</style>
