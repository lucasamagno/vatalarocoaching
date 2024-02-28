<template>
  <section class="hero-section">
    <div class="hero-left"></div>
    <div class="hero-right">
      <h1>Empowering leaders and teams to excel and drive <em>transformative</em> change</h1>
      <p class="motto">Executive Coaching | Professional Development | Consulting</p>
      <div class="button-container">
        <router-link to="/contact" class="contact-button"><strong>Learn how with a free discovery call</strong></router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column; /* Stack elements vertically for mobile */
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: #FFFFFF;
  height: auto; /* Adjust height for mobile */
}

.hero-left {
  width: 100%; /* Full width for mobile */
  min-height: 300px; /* Adjusted height for mobile */
  background-image: url('/public/assets/images/IMG_1455.jpg');
  background-size: cover; /* Cover the entire div */
  background-repeat: no-repeat;
  background-position: center;
}

.hero-right {
  text-align: center; /* Center text for mobile */
  padding: 20px; /* Add some padding */
}

.hero-right h1 {
  font-size: 2rem; /* Smaller font size for mobile */
}

.hero-right p {
  font-size: 1rem; /* Smaller font size for mobile */
}

.button-container {
  padding: 0; /* Remove padding */
  margin-top: 20px; /* Add some space above the button */
}

.contact-button {
  font-size: 1rem; /* Adjust button font size for mobile */
}
</style>
