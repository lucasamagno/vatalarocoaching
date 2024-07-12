<template>
  <section class="custom-hero-section">
    <h1 class="page-title">Is your team ready to unleash its full potential?</h1>
    <p>Here are just a few examples of workshops and hands-on training designed to bring out the best in your team. We’ll design a program that fits your goals and budget.</p>
  </section>
</template>

<script setup>
// No additional script setup needed for this example
</script>

<style scoped>
.custom-hero-section {
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  text-align: center;
  padding: 0 20px; /* Adjusted padding for a slightly smaller height */
  height: 50vh; /* Matching the height of the example */
  color: white; /* Updated text color */
  background: #141726; /* Added background color */
}

.custom-hero-section .page-title {
  margin-bottom: 15px; /* Adjusted spacing */
  font-size: 2.5rem; /* Adjusted font size for the title */
  color: inherit; /* Inherits the section's text color */
  font-family: "Lato"; /* Updated font family to Lato */
}

.custom-hero-section p {
  font-size: 1.4rem; /* Adjusted font size for the paragraph */
  margin-bottom: 20px; /* Adjusted spacing */
  max-width: 80%; /* Max width to control the text wrapping */
  color: inherit; /* Inherits the section's text color */
}

@media (max-width: 375px) and (min-width: 281px) {
  .custom-hero-section p {
    font-size: 1.2rem; /* Adjusted for specific media query */
  }

  .custom-hero-section .page-title {
    font-size: 2rem; /* Adjusted for specific media query */
  }
}

@media (max-width: 280px) {
  .custom-hero-section .page-title {
    font-size: 1.8rem; /* Smaller font size for the title */
  }

  .custom-hero-section p {
    font-size: 1rem; /* Smaller font size for paragraphs */
    max-width: 90%; /* Allows text to take up more width */
  }
}
</style>
