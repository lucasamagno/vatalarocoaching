<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Updated structure for links with two columns -->
        <div class="footer-links">
          <!-- First column -->
          <div class="footer-column">
            <p><router-link to="/" class="footer-link">Home</router-link></p>
            <p><router-link to="/about" class="footer-link">About</router-link></p>
            <p><router-link to="/contact" class="footer-link">Contact</router-link></p>
          </div>
          <!-- Second column -->
          <div class="footer-column">
            <p><router-link to="/executive-coaching" class="footer-link">For Executives & Leaders</router-link></p>
            <p><router-link to="/rising-professionals" class="footer-link">For Rising Stars & Professionals</router-link></p>
            <p><router-link to="/for-teams" class="footer-link">For Teams</router-link></p>
            <p><router-link to="/for-startups" class="footer-link">For Startups</router-link></p>
          </div>
        </div>
        <div class="footer-info">
          <p>© 2024 Vatalaro Coaching & Consulting | All rights reserved.</p>
          <a href="https://www.linkedin.com/in/kayla-vatalaro/" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

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
  flex-direction: row; /* Align the columns horizontally */
}

.footer-column {
  display: flex;
  flex-direction: column;
  margin-right: 50px; /* Add spacing between the columns */
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
  opacity: 0.8;
  transition: opacity 0.3s ease; /* Smooth transition for the hover effect */
}

.footer-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-info a {
  margin-top: 5px;
  color: inherit; /* Inherits the color from the parent element */
}

.footer-info a i {
  font-size: 24px; /* Adjust icon size */
}
</style>
