<template>
  <section class="custom-hero-section">
    <h1 class="page-title">Vatalaro Consulting</h1>
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
  padding: 30px 20px;
  height: 40vh;
  color: #333;
  /* Radial Gradient Background */
  background: radial-gradient(circle at top left, rgb(236, 137, 62), rgb(88, 177, 219));
}

.custom-hero-section .page-title {
  margin-bottom: 15px;
  font-size: 2.5rem;
  color: inherit;
}

.custom-hero-section h3 {
  margin-bottom: 10px;
  font-size: 2rem;
  color: inherit;
}

.custom-hero-section p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  max-width: 80%;
  color: inherit;
}
</style>
