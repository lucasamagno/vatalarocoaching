<template>
  <div class="workshops-training">
    <h1>Workshops & Training for managers and teams</h1>
    <!-- Sections -->
    <section>
      <h2>Fostering Inclusivity: A DEIB Training Workshop</h2>
      <p>Delve into the nuanced world of diversity, equity, inclusion, and belonging (DEIB)...</p>
    </section>
    <section>
      <h2>Building Bridges: Strengthening Teams for Success</h2>
      <p>Dive into the core elements of effective teamwork...</p>
    </section>
    <section>
      <h2>Leadership Synergy: Achieving Alignment for Executive Teams</h2>
      <p>Designed specifically for leadership or executive teams...</p>
    </section>
    <section>
      <h2>Putting Conflict to Rest: The Clearing Path from Story to Fact</h2>
      <p>Explore a powerful conscious leadership tool to resolve workplace conflicts...</p>
    </section>
    <!-- Disclaimer -->
    <p class="disclaimer">It is recommended that these be hosted in person, but many can also be held online.</p>
  </div>
</template>

<script setup>
// Import any required components or utilities if needed
</script>

<style scoped>
.workshops-training {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.workshops-training h1 {
  margin-bottom: 2rem;
  text-align: left;
  font-size: 24px; /* Adjusted font size */
}

.workshops-training section {
  padding: 15px;
  margin-bottom: 2rem;
  border: 1px solid #e0e0e0; /* Subtle border */
  border-radius: 8px; /* Rounded corners */
  transition: all 0.3s ease-in-out;
}

.workshops-training section:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow on hover */
}

.workshops-training h2, h1 {
  margin-bottom: 1rem;
  color: #FEB47B; /* Fresh color for the headings */
  font-size: 20px; /* Adjusted font size */
}

.workshops-training p {
  margin-bottom: 1rem;
  text-align: left; /* Ensure text aligns to the left */
  line-height: 1.6;
}

.disclaimer {
  font-style: italic; /* Italics for the disclaimer */
  margin-top: 20px; /* Spacing above the disclaimer */
  text-align: center; /* Center-align the disclaimer */
}
</style>
