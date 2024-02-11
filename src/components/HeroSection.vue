<template>
  <section class="hero-section">
    <!-- Right side with text content -->
    <div class="hero-right">
      <h1>KAYLA VATALARO COACHING & CONSULTING</h1>
      <p class="motto">Empowering leaders and teams to excel and drive transformative change</p>
      <p><router-link to="/contact" class="contact-button">Learn how with a free discovery call</router-link></p>
    </div>
  </section>
</template>

<script setup>
// Script setup does not require exporting the default object explicitly
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  padding: 0px 20px;
  padding-top: 50px;
  background-color: #FFFFFF; /* White background */
  height: 40vh; /* Full viewport height */
}

.hero-right {
  text-align: center; /* Center text content */
}

.hero-right h1 {
  font-size: 3rem; /* Adjust font size */
  font-weight: bold; /* Bold font weight */
  color: #333; /* Dark text color */
}

.hero-right p {
  font-size: 1.25rem; /* Adjust font size */
  color: #666; /* Medium text color */
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #2A9D8F; /* Button background color */
  color: #FFF; /* Button text color */
  text-decoration: none; /* Remove underline */
  border-radius: 25px; /* Rounded button */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.contact-button:hover {
  background-color: #21867a; /* Darker background color on hover */
}
</style>
