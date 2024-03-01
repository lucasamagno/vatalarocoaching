<template>
  <section class="lets-chat">
    <h3>Let's Chat</h3>
    <p>Have questions or want to learn more? Get in touch with Kayla today!</p>
    <p><router-link to="/contact" class="contact-button">Contact Kayla</router-link></p>
  </section>
</template>

<style scoped>
.lets-chat {
  text-align: center;
  padding: 20px;
  margin: 30px auto;
}

.lets-chat h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.lets-chat p {
  font-size: 18px;
  margin-bottom: 20px;
}

.contact-button {
  display: inline-block;
  padding: 10px 20px; /* Matching padding */
  font-size: 1rem; /* Matching font size */
  font-weight: bold; /* Ensure text is bold */
  text-decoration: none; /* Remove underline */
  color: #FFF; /* White text color */
  background-color: #141726; /* Matching background color */
  border: none;
  border-radius: 25px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.contact-button:hover {
  background-color: #2b3152; /* Darker background color on hover */
}

@media (max-width: 430px) {
  .lets-chat {
    padding: 0px 20px;
  }
}
</style>
