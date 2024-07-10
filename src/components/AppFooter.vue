<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-links">
        <router-link to="/" class="footer-link">Home</router-link> |
        <router-link to="/about" class="footer-link">About</router-link> |
        <router-link to="/contact" class="footer-link">Contact</router-link> |
        <router-link to="/executive-coaching" class="footer-link">For Executives & Leaders</router-link> |
        <router-link to="/rising-professionals" class="footer-link">For Rising Stars & Professionals</router-link> |
        <router-link to="/the-future-leaders-grant" class="footer-link">The Future Leaders Grant</router-link> |
        <router-link to="/for-teams" class="footer-link">For Teams</router-link> |
        <router-link to="/startups" class="footer-link">For Startups</router-link>
      </div>
      <div class="footer-info">
        <p className="rights">© 2024 Vatalaro Coaching LLC | All rights reserved.</p>
        <a href="https://www.linkedin.com/in/kayla-vatalaro/" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
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

.footer-links {
  margin-bottom: 20px; /* Add some space above footer info */
  font-family: 'Lato', sans-serif;
  font-size: 14px;
}

.footer-link {
  text-decoration: none;
  color: #333;
  margin: 0 5px; /* Adjust spacing between links */
}

.footer-link:hover {
  text-decoration: underline; /* Optional: underline on hover for better visibility */
}

.footer-info {
  text-align: center;
  font-size: 14px;
}

.footer-info p {
  margin-bottom: 10px;
}

.footer-info a {
  color: inherit;
  margin: 0 5px;
}

.footer-info a i {
  font-size: 24px;
}

.rights {
  font-size: 14px;
}
</style>


