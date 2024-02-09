<template>
  <section class="experience-section">
    <h3 class="experience-header">Experience</h3> <!-- Header added here -->
    <div class="companies">
      <div class="company-logo" v-for="logo in logos" :key="logo.name">
        <img :src="logo.imgSrc" :alt="logo.name" />
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  { name: 'Asana', imgSrc: '/assets/images/asanalogo.png' },
  { name: 'The Trade Desk', imgSrc: '/assets/images/thetradedesk.png' },
  { name: 'Flow Traders', imgSrc: '/assets/images/flowtraders.png' },
  { name: 'Time Inc', imgSrc: '/assets/images/timeinc.png' },
];
</script>

<style scoped>
.experience-section {
  display: flex;
  justify-content: center;
  flex-direction: column; /* Changed to column for vertical stacking */
  align-items: center; /* Ensure the header is centered */
  flex-wrap: wrap;
  padding: 20px;
}

.experience-header {
  margin-bottom: 20px; /* Spacing between the header and the logos */
  font-size: 24px; /* Adjust font size as needed */
  text-align: center; /* Center the text */
}

.companies {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.company-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  flex-basis: 20%;
  min-width: 150px;
  height: 120px;
}

.company-logo img {
  max-height: 60px;
  max-width: 100%;
  object-fit: contain;
  filter: grayscale(100%);
}
</style>
