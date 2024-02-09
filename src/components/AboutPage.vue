<template>
  <div class="about-page">
    <h1 class="about-title">About</h1>
    <div class="split-section">
      <div class="left-side">
        <!-- Assuming the path to your image is correct and accessible -->
        <img src="/assets/images/IMG_1455.jpg" alt="Description of Image">
      </div>
      <div class="right-side">
        <h3>Kayla Vatalaro</h3>
        <p>Kayla brings a decade of executive & leadership experience spanning Talent & Diversity, GTM (Go-To-Market), and Social Impact at some of the world’s foremost organizations. Her career includes roles across diverse industries, from startups to multi-billion-dollar companies (often building from early-stage to post-IPO) in software, pharma, biotech, media, trading, and adtech. Kayla holds degrees and certifications in neuroscience, gender studies, business, sustainability, strength finding, and coaching. Her leadership approach has been recognized in publications like The Muse, Forbes, Marie Claire, and DigiDay. She was also honored as a 2022 Woman of the Year by Pledge 1% for International Women's Day, with a feature on NASDAQ.</p>
        <p>With a deep understanding of the challenges and opportunities faced by today's leaders, Kayla provides a holistic approach to empower them for success in the dynamic professional landscape.</p>
        <p>Kayla also provides pro bono strategy support to nonprofits and NGOs working to build a better world.</p>
      </div>
    </div>
  </div>
  <PageNavigation />
</template>

<script setup>
import PageNavigation from './PageNavigation.vue'

</script>

<style scoped>
.about-page {
  text-align: center;
  max-width: 1100px;
  margin: auto;
  padding: 10px;
}

.about-title {
  font-size: 2rem;
  margin-top: 40px; /* Adjust this value as needed for top spacing */
  margin-bottom: 40px; /* Adjust this value as needed for bottom spacing */
}

.split-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Adjust this if you want to vertically center the content */
}

.left-side, .right-side {
  flex: 1;
}

.right-side {
  text-align: left; /* Aligns the text content to the left */
}

.left-side img {
  width: 100%; /* Makes the image responsive */
  height: auto; /* Maintains the aspect ratio */
  max-width: 400px; /* Limits the size of the image */
}
</style>
