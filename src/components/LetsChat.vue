<template>
  <section class="lets-chat">
    <h3>Let's Chat</h3>
    <p>Have questions or want to learn more? Get in touch with Kayla today!</p>
    <p><router-link to="/contact" class="contact-button">Contact Kayla</router-link></p>
  </section>
</template>

<script setup>
// No script setup logic needed for this component
</script>

<style scoped>
.lets-chat {
  text-align: center;
  margin: 50px auto;
}

.lets-chat h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.lets-chat p {
  margin-bottom: 30px;
}

.contact-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: rgb(88, 177, 219);
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #0056b3;
}
</style>
