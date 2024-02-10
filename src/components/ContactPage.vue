<template>
  <div class="asana-embed-container">
    <!-- New content added above the form -->
    <div class="transformative-journey-intro">
      <h3>Begin your transformative journey today:</h3>
      <p>Your unique perspective and experiences are your greatest assets, and I am here to help you harness them.</p>
      <p>For individuals, I offer a 30 minute complimentary discovery video call. For organizations and partnerships, reach out for more information. </p>
    </div>
    <div class="responsive-iframe-container">
      <iframe class="asana-embed-iframe" src="https://form.asana.com/?k=sCaIxNnJY_UyeR42D7YLCw&d=1201846958216343&embed=true" frameborder="0"></iframe>
    </div>
    <div class="asana-embed-footer">
      <a rel="nofollow noopener" target="_blank" class="asana-embed-footer-link" href="https://asana.com/?utm_source=embedded_form">
        <div class="asana-embed-footer-logo" role="img" aria-label="Logo of Asana"></div>
      </a>
    </div>
  </div>
</template>

<script setup>
// Script setup remains unchanged
</script>

<style scoped>
.responsive-iframe-container {
  position: relative;
  width: 100%;
  padding-top: 180%; /* Adjusted to accommodate the form's height */
}
.asana-embed-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.asana-embed-container {
  max-width: 800px; /* Adjust the max-width as needed */
  margin: auto; /* Center the form container */
}
.transformative-journey-intro {
  margin-bottom: 20px; /* Space between the intro text and the form */
}
.transformative-journey-intro h2 {
  margin-bottom: 10px; /* Space between the title and the description */
}
</style>
