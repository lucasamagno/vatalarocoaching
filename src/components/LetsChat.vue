<template>
  <section class="lets-chat">
    <h3>Let's Chat</h3>
    <p>Have questions or want to learn more? Get in touch with Kayla today!</p>
    <router-link to="/contact" class="contact-button">Contact Kayla</router-link>
  </section>
</template>

<style scoped>
.lets-chat {
  text-align: center;
  padding: 20px; /* Adjust padding for mobile */
  margin: 30px auto; /* Reduce margin for mobile */
}

.lets-chat h3 {
  font-size: 20px; /* Reduce font size for mobile */
  margin-bottom: 15px; /* Adjust spacing */
}

.lets-chat p {
  font-size: 14px; /* Reduce font size for mobile */
  margin-bottom: 20px; /* Adjust spacing */
}

.contact-button {
  padding: 8px 16px; /* Adjust padding for smaller screens */
  font-size: 14px; /* Adjust font size for mobile */
}
</style>
