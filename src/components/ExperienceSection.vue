<template>
  <section class="experience-section">
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
  flex-wrap: wrap;
  padding: 20px;
}

.companies {
  display: flex; /* Ensure logos are displayed side by side */
  justify-content: center;
  align-items: center; /* Align logos vertically */
  flex-wrap: wrap; /* Allow wrapping if needed */
  width: 100%; /* Take up full container width */
}

.company-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex: 1; /* Allows flexible sizing but can be replaced with flex-basis if specific size is needed */
  min-width: 150px; /* Minimum width for each logo container */
  max-width: 20%; /* Maximum width for each logo container */
}

.company-logo img {
  height: 100px; /* Set a fixed height for all logos */
  width: auto; /* Maintain aspect ratio */
}
</style>
