<template>
  <div class="about-container">
    <div class="about-left-side"></div>
    <div class="about-right-side">
      <h3>About Kayla:</h3>
      <p>Kayla brings a decade of executive & leadership experience spanning Talent & Diversity, GTM (Go-To-Market), and Social Impact at some of the world’s foremost organizations. Her career includes roles across diverse industries, from startups to multi-billion-dollar companies (often building from early-stage to post-IPO) in software, pharma, biotech, media, trading, and adtech. Kayla holds degrees and certifications in neuroscience, gender studies, business, sustainability, strength finding, and coaching. Her leadership approach has been recognized in publications like The Muse, Forbes, Marie Claire, and DigiDay. She was also honored as a 2022 Woman of the Year by Pledge 1% for International Women's Day, with a feature on NASDAQ.
        With a deep understanding of the challenges and opportunities faced by today's leaders, Kayla provides a holistic approach to empower them for success in the dynamic professional landscape.
        Kayla also provides pro bono strategy support to nonprofits and NGOs working to build a better world. Visit her LinkedIn here.
      </p>
    </div>
  </div>
</template>

<script setup>
// Script setup tag for using the Composition API syntax
</script>

<style scoped>
.about-container {
  display: flex;
  height: auto; /* Adjust based on content or set a fixed height */
}

.about-left-side {
  width: 30%;
  background-image: url('/public/assets/images/IMG_1455.jpg'); /* Ensure this path is correct */
  background-repeat: no-repeat;
  background-size: cover; /* Use cover for better image handling */
  background-position: center;
}

.about-right-side {
  width: 70%; /* Adjusted to match the total width correctly */
  padding: 20px;
}
</style>
