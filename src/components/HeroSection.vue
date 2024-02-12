<template>
  <section class="hero-section">
    <!-- Adjusted Left side with an img tag for the portrait -->
    <div class="hero-left">
    </div>
    <!-- Right side with text content remains unchanged -->
    <div class="hero-right">
      <h1>Empowering leaders and teams to excel and drive <em>transformative</em> change</h1>
      <p class="motto">Executive Coaching | Professional Development</p>
      <p><router-link to="/contact" class="contact-button"><strong>Learn how with a free discovery call</strong></router-link></p>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  padding: 0px 20px;
  background-color: #FFFFFF; /* White background */
  height: 70vh; /* Full viewport height */
}

.hero-left {
  flex: 1; /* Divide the section equally */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  background-size: contain; /* Ensure the entire image is shown */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-position: center; /* Center the background image */
  background-image: url('/public/assets/images/IMG_1455.jpg'); /* Verify this path */
  min-height: 500px; /* Example height to ensure visibility */  
}

.hero-right {
  flex: 1; /* Divide the section equally */
  text-align: left; /* Align text to the left */
}

.hero-right h1 {
  font-size: 3rem; /* Adjust font size */
  font-weight: bold; /* Bold font weight */
  color: #333; /* Dark text color */
}

.hero-right p {
  font-size: 1.25rem; /* Adjust font size */
  color: #666; /* Medium text color */
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #141726; /* Button background color */
  color: #FFF; /* Button text color */
  text-decoration: none; /* Remove underline */
  border-radius: 25px; /* Rounded button */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.contact-button:hover {
  background-color: #2b3152; /* Darker background color on hover */
}

</style>
