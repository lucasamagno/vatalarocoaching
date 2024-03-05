<template>
  <section class="custom-hero-section">
    <h1 class="page-title">Are you ready to love your job?</h1>
    <p>Take your career to the next level and land a job you love with a company that <em>inspires</em> you.</p>
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
  background: black; /* Added background color */
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

/* Adjustments for Galaxy Fold and similarly small devices */
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
