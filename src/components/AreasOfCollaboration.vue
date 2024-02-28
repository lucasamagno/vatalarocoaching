<template>
<div className="tan-color">
  <div class="areas-of-collaboration">
    <h3>Some areas we can explore together</h3>
    <ul>
      <li>
        <strong>Self-Discovery</strong> Embark on a journey of self-discovery to understand your unique strengths, values, and aspirations.
      </li>
      <li>
        <strong>Corporate Navigation & Advocating for Yourself</strong> Learn the art of navigating corporate landscapes effectively and explore strategies to enhance skills, build strong internal relationships, expand influence, and seize leadership opportunities within your organization to propel your career forward.
      </li>
      <li>
        <strong>Career Transitions</strong> From resume writing and networking to interview preparation and negotiation skills, embrace change with confidence and clarity as you step into your next chapter of professional growth and personal fulfillment.
      </li>
      <li>
        <strong>Time Management & Boundaries</strong> Optimize your productivity and personal effectiveness, which can include taking control of your time to establish healthy boundaries with work.
      </li>
      <li>
        <strong>Authentic Leadership</strong> Embrace authenticity as a leader or rising star, fostering trust and connection with your team and colleagues.
      </li>
      <li>
        <strong>Finding Your Voice & Public Speaking</strong> Discover the power of your voice and hone your public speaking skills to communicate with clarity and confidence and enhance your leadership presence.
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>
/* Styles for the first component to match the second component's font sizes */
.tan-color {
  background-color: rgb(249,249,235);
  padding: 30px 0;
}

.areas-of-collaboration {
  margin: 20px auto;
  max-width: 800px;
  display: grid;
  gap: 20px;
}

/* Adjusting the h3 to match the h2 size in the second component */
.areas-of-collaboration h3 {
  margin-bottom: 1rem;
  text-align: center;
  color: #141726;
  font-size: 24px; /* Matching the h2 size from the second component */
}

.areas-of-collaboration ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.areas-of-collaboration li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

.areas-of-collaboration li:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Adjusting the paragraph text to match */
.areas-of-collaboration p {
  margin-bottom: 1rem;
  text-align: left; /* Ensure text aligns to the left */
  line-height: 1.6; /* Matching line height from the second component */
}

.areas-of-collaboration strong {
  margin-right: 6px;
  color: #141726;
}

</style>
