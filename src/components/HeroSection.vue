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
  flex-direction: row; /* Align side by side for desktop and tablets */
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-top: 50px; /* Added margin at the top */
  margin-bottom: 50px; /* Added margin at the bottom */
  background-color: #FFFFFF;
}

.hero-left, .hero-right {
  flex: 1; /* Split the space evenly between the image and the content */
}

.hero-left {
  min-height: 500px; /* Increased height for better display */
  background-image: url('/public/assets/images/IMG_1455.jpg');
  background-size: contain; /* Change to 'contain' to ensure the full image is visible */
  background-repeat: no-repeat;
  background-position: center; /* Center the image */
}

.hero-right {
  text-align: left; /* Left-align text for desktop and tablet */
  padding: 20px; /* Add some padding around the text */
}

.hero-right h1, .hero-right p, .button-container {
  margin: 0 0 20px; /* Add bottom margin for spacing */
}

.contact-button {
  padding: 10px 20px; /* Button padding */
  background-color: #141726; /* Button color */
  color: #FFF; /* Text color */
  text-decoration: none; /* No underline */
  border-radius: 25px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth transition for hover */
}

.contact-button:hover {
  background-color: #2b3152; /* Darker color on hover */
}

/* Tablet layout (similar to desktop) */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: row; /* Maintain side-by-side layout on tablets */
  }
}

/* Mobile layout */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column; /* Stack elements vertically on mobile */
    margin-top: 20px; /* Adjusted margin for mobile */
    margin-bottom: 20px; /* Adjusted margin for mobile */
  }

  .hero-left {
    width: 100%; /* Full width for the image */
    order: -1; /* Ensure image is above the text */
    min-height: 400px; /* Increased height for a larger display on mobile */
    background-size: cover; /* Keep to 'cover' for mobile to fill the container */
    background-position: center; /* Center the image to focus on the main part */
    margin-top: 20px; /* Added top margin for spacing between navbar and image */
  }

  .hero-right {
    text-align: center; /* Center-align text for mobile */
    padding: 20px; /* Ensure there's padding around the text for readability */
  }

  .hero-right h1, .hero-right p, .button-container {
    margin: 20px 0; /* Adjust spacing for mobile layout */
  }
}
</style>

