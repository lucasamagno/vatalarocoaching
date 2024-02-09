<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Links to other pages -->
        <div class="footer-links">
          <p><router-link to="/" class="footer-link">Home</router-link></p>
          <p><router-link to="/about" class="footer-link">About</router-link></p>
          <p><router-link to="/executive-coaching" class="footer-link">Executive Coaching</router-link></p>
          <p><router-link to="/consulting" class="footer-link">Consulting</router-link></p>
          <p><router-link to="/contact" class="footer-link">Contact</router-link></p>
        </div>
        <div class="footer-info">
          <p>© 2024 Vatalaro Coaching | All rights reserved.</p>
          <!-- FontAwesome LinkedIn Icon -->
          <a href="https://www.linkedin.com/in/kayla-vatalaro/" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// JavaScript logic can be added here if needed.
</script>

<style scoped>
.app-footer {
  text-align: center;
  padding: 20px 0;
  background-color: #f5f5f5;
  color: #333;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  flex-direction: column; /* Align links vertically */
}

.footer-links p {
  margin: 5px 0; /* Adjust vertical margin between paragraphs */
}

.footer-link {
  text-decoration: none; /* Remove underline */
  color: #333; /* Use custom color */
}

.footer-link:hover,
.footer-info a:hover {
  /* Apply hover effect */
  opacity: 0.8;
  transition: opacity 0.3s ease; /* Smooth transition for the hover effect */
}

.footer-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-info a {
  margin-top: 5px; /* Adjust spacing between links and rights reserved text */
  color: inherit; /* Inherits the color from the parent element */
}

.footer-info a i {
  font-size: 24px; /* Adjust icon size */
}
</style>
