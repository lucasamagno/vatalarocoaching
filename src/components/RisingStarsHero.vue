<template>
  <section class="custom-hero-section">
    <h1 class="page-title"><em>Are you ready to love your job?</em></h1>
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
  height: 70vh; /* Adjusted height to be slightly smaller */
  color: #333; /* Text color */
}

.custom-hero-section .page-title {
  margin-bottom: 15px; /* Adjusted spacing */
  font-size: 2.5rem; /* Adjusted font size for the title */
  color: inherit; /* Inherits the section's text color */
}

.custom-hero-section h3 {
  margin-bottom: 10px; /* Adjusted spacing */
  font-size: 2rem; /* Adjusted font size for the subtitle */
  color: inherit; /* Inherits the section's text color */
}

.custom-hero-section p {
  font-size: 1.4rem; /* Adjusted font size for the paragraph */
  margin-bottom: 20px; /* Adjusted spacing */
  max-width: 80%; /* Max width to control the text wrapping */
  color: inherit; /* Inherits the section's text color */
}

.page-title {
  font-family: "Over the Rainbow", cursive;
}
</style>
