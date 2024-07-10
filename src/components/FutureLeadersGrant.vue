<template>
    <div class="grants-page">
      <section class="hero">
        <div class="hero-content">
          <div class="hero-text-container">
            <div class="hero-text">
              <h2>The Future Leaders Grant</h2>
              <h3>Building a More Diverse Leadership Landscape</h3>
              <!-- You can add more content here if needed -->
            </div>
          </div>
          <div class="hero-image"></div>
        </div>
      </section>
      <!-- Other sections will go here -->
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .grants-page {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .hero {
    margin-bottom: 40px;
    padding: 60px 0;
  }
  
  .hero-content {
    display: flex;
    height: 400px;
    position: relative;
  }
  
  .hero-text-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
  
  .hero-text {
    background-color: #141726;
    color: white;
    padding: 30px;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .hero-text h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  .hero-text h3 {
    font-size: 1.5rem;
  }
  
  .hero-image {
    flex: 1;
    background-image: url('/public/assets/images/TheFutureLeadersGrant/AboutTheGrant.jpg');
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: contain;
    height: 100%;
  }
  </style>