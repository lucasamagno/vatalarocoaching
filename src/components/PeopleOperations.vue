<template>
  <div class="people-operations-container">
    <!-- First Row: Content and Gradient Shape -->
    <div class="top-section">
      <div class="gradient-shape"></div>
      <div class="people-operations-content">
        <h1>On Demand & Full Service People Operations for Startups</h1>
        <p><em><a href="https://medium.com/granify/why-your-startup-needs-people-operations-yes-even-you-d0d9f0b5538a">Why Every Startup Needs People Operations. Yes, Even You. [9 min read]</a></em></p>
        <p>Navigating the complexities of People Operations (or HR) can be daunting for startups, but there are common pitfalls that can easily be avoided, and are sometimes critical to a company's survival. I’ve teamed up with heavy hitting People Leaders who laid the groundwork at Airbnb, Facebook, LinkedIn, and Asana.</p>
        <p>We provide critical people operations services that won’t break the bank. It's like having a team of in-house experts when you need them. We’ll start by conducting an honest assessment of your current state, and provide a few different solutions (we’ll never oversell you).</p>
      </div>
    </div>
    <!-- Second Row: Areas We Help Startups -->
    <div class="areas-of-help">
      <h2>Areas We Help Startups</h2>
      <div class="areas-grid">
        <div class="area" v-for="(item, index) in areas" :key="index">
          <h3>{{ item.Header }}</h3>
          <p>{{ item.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const areas = ref([
  { Header: "Role Design & Recruiting", Description: "Org planning, job descriptions, advertising, assessment, and landing the right hire" },
  { Header: "Employer Branding", Description: "A compelling employer brand that resonates with your mission and makes you a talent magnet" },
  { Header: "Onboarding", Description: "Ensure new hires know what they need to when they start, nurturing & integrating them into the team" },
  { Header: "Admin-lite Performance Evaluation", Description: "High performance teams need to know how their performance is being measured" },
  { Header: "Compensation & Equity Design", Description: "Giving flexibility as you scale" },
  { Header: "Offboarding & Employee Exits", Description: "" },
  { Header: "Employment Law & Risk Mitigation", Description: "" },
  { Header: "Inclusion & Diversity Planning", Description: "" },
  { Header: "When to bring someone on full-time", Description: "" },
  { Header: "and more", Description: "" }
]);
</script>

<style scoped>
.people-operations-container {
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0 auto;
  max-width: 75%; /* Adjusting the overall component to take up 75% of the page width */
}

.top-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.gradient-shape {
  flex-basis: 20%;
  background: linear-gradient(to bottom right, #FF7E5F, #FEB47B);
}

.people-operations-content {
  flex-basis: 75%;
}

.areas-of-help {
  grid-column: 1 / -1; /* Ensures the table spans the full width of its row */
}

.areas-of-help .areas-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Ensuring exactly 5 boxes per row */
  gap: 20px;
}

.areas-of-help .area {
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.areas-of-help .area:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.people-operations-content h1, .areas-of-help h2, .areas-of-help h3 {
  margin-bottom: 1rem;
}

.people-operations-content p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>
