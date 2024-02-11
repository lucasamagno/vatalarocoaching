<template>
  <div class="about-page">
    <h1 class="about-title">About</h1>
    <div class="split-section">
      <div class="left-side">
        <!-- Background image will be set via CSS -->
      </div>
      <div class="right-side">
        <h3>Kayla Vatalaro</h3>
        <p>Kayla brings a decade of executive & leadership experience spanning Talent & Diversity, GTM (Go-To-Market), and Social Impact at some of the world’s foremost organizations. Her career includes roles across diverse industries, from startups to multi-billion-dollar companies (often building from early-stage to post-IPO) in software, pharma, biotech, media, trading, and adtech. Kayla holds degrees and certifications in neuroscience, gender studies, business, sustainability, strength finding, and coaching. Her leadership approach has been recognized in publications like The Muse, Forbes, Marie Claire, and DigiDay. She was also honored as a 2022 Woman of the Year by Pledge 1% for International Women's Day, with a feature on NASDAQ.</p>
        <p>With a deep understanding of the challenges and opportunities faced by today's leaders, Kayla provides a holistic approach to empower them for success in the dynamic professional landscape.</p>
        <p>Kayla also provides pro bono strategy support to nonprofits and NGOs working to build a better world.</p>
        <p>Visit Kayla on her LinkedIn <a href="https://www.linkedin.com/in/kayla-vatalaro/">here</a>.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script setup area remains as it is since no JavaScript logic is needed for this example.
</script>

<style scoped>
.about-page {
  text-align: center;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 50px;
  padding: 10px;
}

.split-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.left-side, .right-side {
  flex: 1;
}

.left-side {
  background-image: url('/public/assets/images/IMG_1455.jpg'); /* Reference to the image URL */
  background-size: contain; /* Ensure the image covers the entire div */
  background-repeat: no-repeat;
  background-position: center; /* Center the image within the div */
  height: 500px; /* Explicitly set a height for the div */
}

.right-side {
  text-align: left; /* Align text content to the left */
  padding: 0 20px; /* Optional padding for spacing */
}

</style>
