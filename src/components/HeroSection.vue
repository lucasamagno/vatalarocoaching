<template>
  <section class="hero-section">
    <h1>VATALARO COACHING</h1>
    <p class="motto">Executive Coaching and Consulting Services</p>
  </section>
</template>

<script setup>
// Script setup does not require exporting the default object explicitly
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  text-align: center;
  padding: 50px 20px;
  background-color: #f0f0f0; /* This will be overridden by the gradient */
  height: 50vh;
  background: linear-gradient(to top right, rgb(236, 137, 62), rgb(88, 177, 219));
  margin: 0; /* Ensure there's no default margin */
}

.hero-section h1 {
  margin-bottom: 20px;
  font-size: 3.5rem;
  color: #333;
}

.motto {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-style: italic;
}
</style>
