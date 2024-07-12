<template>
  <section class="custom-hero-section">
    <h1 class="page-title">Are you ready to inspire your teams and those around you to be their greatest selves?</h1>
  </section>
</template>

<script setup>
// No additional script setup needed for this example
</script>

<style scoped>
.custom-hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 60px; /* This controls the space on the left and right */
  height: 50vh;
  color: white;
  background: #141726;
}


.custom-hero-section .page-title {
  margin-bottom: 15px; /* Adjusted spacing */
  font-size: 2.5rem; /* Adjusted font size for the title */
  color: inherit; /* Inherits the section's text color */
  font-family: "Lato" /* Ensuring font family consistency */
}

/* Adjustments for Galaxy Fold and similarly small devices */
@media (max-width: 375px) {
  .custom-hero-section .page-title {
    font-size: 1.8rem; /* Smaller font size for the title */
  }
}
</style>
