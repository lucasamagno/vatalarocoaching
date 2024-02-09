<template>
  <section class="combined-section">
    <div class="approach-content">
      <h3>My Approach:</h3>
      <p>As a practitioner of holistic coaching methods, I place a strong emphasis on total well-being and the principles of strengths-based psychology. Achieving profound growth in leadership occurs when your state of being aligns seamlessly with your actions.</p>
      <p>I work closely with high achieving executives and leaders to cultivate practices that promote diversity, inclusion, and a sense of belonging within their teams, build winning businesses, and chart a personal path towards fulfillment and lasting impact. My mission is to support the creation and scaling of equitable, sustainable solutions that drive positive societal change, <strong><em>with you at the helm.</em></strong></p>
    </div>
    <div class="leadership-content">
      <h3>Leading Diverse Teams and Building Inclusive Environments</h3>
      <p>As a leader of a diverse team or someone aspiring to build an inclusive environment, understanding and addressing biases is pivotal for effectiveness and positive change. Recognizing the challenges faced by underrepresented groups in the professional landscape, including systemic and cultural biases in funding, opportunity, and access, is crucial. My coaching approach is designed to help you become aware, better understand, and take action in dismantling these biases. By embracing this awareness, you not only become a more effective leader but also contribute to making the world a better and more inclusive place. Together, let's create workplaces and a world where everyone has equal opportunities to thrive and succeed.</p>
    </div>
  </section>
</template>

<script setup>
// Script setup remains empty as before
</script>

<style scoped>
.combined-section {
  display: flex; /* Use flexbox to create a side-by-side layout */
  justify-content: center; /* Center the content horizontally */
  align-items: flex-start; /* Align items at the start of the flex container */
  padding: 20px; /* Padding around the entire section */
}

.approach-content, .leadership-content {
  flex: 1; /* Each child takes up an equal amount of space */
  padding: 0 30px; /* Padding inside each content area for spacing */
  text-align: center; /* Center text content */
}

/* Increase the space between the content sections */
.approach-content {
  margin-right: 20px; /* Add margin to the right of the approach content */
}

.leadership-content {
  margin-left: 20px; /* Add margin to the left of the leadership content */
}

/* Optional: Additional styling as needed for headings and paragraphs */
h3 {
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
}
</style>
