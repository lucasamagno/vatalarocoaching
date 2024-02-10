<template>
  <section class="hero-section">
    <h1>VATALARO COACHING & CONSULTING</h1>
    <p class="motto">Empowering leaders and teams to excel and drive transformative change</p>
    <!-- Added Contact Button -->
    <p><router-link to="/contact" class="contact-button">Learn how with a free discovery call</router-link></p>
  </section>
</template>

<script setup>
// Script setup does not require exporting the default object explicitly
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  background-color: #f0f0f0;
  height: 50vh;
  background: linear-gradient(to top right, rgb(236, 137, 62), rgb(88, 177, 219));
  margin: 0;
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

/* Styling for the Contact Button, similar to the 'Let's Chat' component */
.contact-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: rgb(88, 177, 219);
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer; /* Ensures the link looks clickable */
}

.contact-button:hover {
  background-color: #0056b3;
}
</style>
