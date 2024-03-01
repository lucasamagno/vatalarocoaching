<template>
  <section class="custom-hero-section">
    <h1 class="page-title"><em>Are you ready to inspire your teams and those around you to be their greatest selves?</em></h1>
  </section>
</template>

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

/* Adjustments for Galaxy Fold and similarly small devices */
@media (max-width: 280px) {
  .custom-hero-section .page-title {
    font-size: 1.8rem; /* Smaller font size for the title */
  }

  .custom-hero-section h3 {
    font-size: 1.5rem; /* Smaller font size for the subtitle */
  }

  .custom-hero-section p {
    font-size: 1rem; /* Smaller font size for paragraphs */
    max-width: 90%; /* Allows text to take up more width */
  }
}
</style>
