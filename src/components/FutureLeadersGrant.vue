<template>
    <div class="grant-page">
      <section class="section our-mission">
        <h2 class="main-header">The Future Leaders Grant</h2>
        <div class="our-mission-image">
          <p class="photo-credit">Photo by John Doe</p>
        </div>
        <h2>Our Mission</h2>
        <p>We believe in the power of diverse leadership to create a more inclusive world. Our coaching focuses on leadership development for women, transgender and nonconforming individuals, and men of color. By equipping professionals from underrepresented backgrounds with professional support and essential guidance, we cultivate leaders who drive change and inspire others.</p>
      </section>
      
      <section class="section about-the-grant">
        <h2>About The Grant</h2>
        <div class="about-the-grant-image">
          <p class="photo-credit">Photo by Jane Smith</p>
        </div>
        <p>At Vatalaro Coaching, we are committed to diversifying the leadership landscape. Our cornerstone program, the Future Leaders Grant, provides low or no-cost personalized 1:1 leadership development coaching to professionals from traditionally marginalized backgrounds, for at least six months. Six months of sustained focus has shown to be critical in achieving lasting behavioral change and significant professional growth, ensuring participants can fully integrate and apply new skills to drive meaningful progress in their careers.</p>
        <p>This initiative not only offers subsidized coaching to empower participants to advance their leadership skills, but it also aims to create ripple effects that benefit entire communities and future generations.</p>
        <p>Each coach is hand-selected and undergoes advanced DEIB (Diversity, Equity, Inclusion, and Belonging) training. Our coaches are passionate DEI advocates with a deep understanding of the unique challenges faced by underrepresented professionals. They bring empathy, cultural awareness, and a commitment to fostering an inclusive environment. With a proven track record of guiding individuals as they advance from entry-level jobs to expert-level careers, overcome imposter syndrome, and navigate complex cultural nuances, our esteemed coaches are particularly well-suited to support and empower our grant winners.</p>
        <p>By equipping underrepresented professionals with the tools to lead, we are not just changing the boardrooms; we are building better businesses.</p>
      </section>
      
      <section class="section diverse-leadership">
        <h2>The Power Of Diverse Leadership</h2>
        <div class="power-diverse-image">
          <p class="photo-credit">Photo by Alex Brown</p>
        </div>
        <p>Investing in diverse leadership is crucial for building a more equitable and inclusive society:</p>
        <ul>
          <li>Only 4.8% of Fortune 500 CEOs are women, and just three are women of color.</li>
          <li>People of color make up only 36% of the U.S. workforce but hold just 16% of executive positions.</li>
          <li>Companies with diverse leadership are more innovative and financially successful, with a 33% higher likelihood of outperforming their peers.</li>
        </ul>
        <p>By addressing these disparities, the Future Leaders Grant aims to create a leadership landscape that truly reflects the diversity of our society.</p>
        <p>Our grant recipients have gone on to build inclusive teams, champion diversity, and mentor future generations, creating a ripple effect of positive change. Their success stories highlight the transformative potential of targeted support, showing how strategic investment in underrepresented talent can reshape leadership for the better.</p>
      </section>
      
      <section class="section grant-recipient">
        <h2>Hear from our Grant Recipient</h2>
  
        <p>Jerrod H.</p>
        <p>“You all have connected me to [a coach] who has incredible empathy. Her understanding of my work challenges has been instrumental in supporting my journey of driving community change and developing my mentorship abilities.”</p>
  
        <p>Annie (Ziwei) Z.</p>
        <p>“Receiving the Future Leaders grant has been an emotional and powerful journey. The cultural understanding and nuance the coach brought to our sessions made all the difference, helping me navigate my career with newfound confidence and balance.”</p>
  
        <p>Yash A.</p>
        <p>“The coaching I received through the [Future Leaders] grant was more than just professional development. It was a support system like I've never had before.”</p>
  
        <p>Natalia H.</p>
        <p>“I didn't really know what coaching really was. I had heard of executive coaching but thought that was reserved for the Tim Cooks and Sheryl Sandbergs of the world. Two years ago, I never thought I'd work outside of retail, let alone in tech. I was introduced to a coach who gave me the support and guidance to break into the tech industry… it's transformed my life and financial future.”</p>
      </section>
      
      <section class="section how-you-can-help">
        <h2>How you can help</h2>
        <div class="how-you-can-help-image">
          <p class="photo-credit">Photo by Emma Green</p>
        </div>
        <p>Contributions from individual donors are the cornerstone of our efforts and are vital to the success of this program:</p>
        <ul>
          <li><strong>$25+ - The Ally:</strong> Your donation helps us provide essential resources and initial support for underrepresented professionals beginning their leadership journey. Every contribution counts towards building a more inclusive leadership landscape.</li>
          <li><strong>$150 - The Advocate:</strong> Your generosity enables us to offer comprehensive leadership development materials. You are playing a crucial role in fostering the growth of future leaders from marginalized backgrounds.</li>
          <li><strong>$300 - The Empowerer:</strong> Your donation provides critical resources and support, equipping professionals with the skills and confidence needed to excel in their careers. You are creating opportunities for growth and development, making a significant impact on their path to leadership.</li>
          <li><strong>$1,800 or more - The Changemaker:</strong> This donation sponsors an individual for six months of personalized coaching, providing them with critical guidance and resources to thrive as leaders. Your support transforms lives and drives lasting change within organizations and communities. Your name will be prominently listed on all grant materials, publications, and our annual report, acknowledging your generous support (you can choose to opt out).</li>
        </ul>
        <p>By supporting the Future Leaders Grant, you are investing in a brighter, more inclusive future. Your contribution helps break down barriers and creates opportunities for underrepresented leaders to rise and make a lasting impact.</p>
      </section>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .grant-page {
    /* Add global styles for the page */
  }
  
  .section {
    margin: 0 auto;
    padding: 20px;
    max-width: 75%;
  }
  
  .section h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .section img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .section p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  
  .our-mission-image,
  .about-the-grant-image,
  .power-diverse-image,
  .how-you-can-help-image {
    min-height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative; /* Ensure the photo credit is positioned relative to the image container */
  }
  
  .photo-credit {
    font-size: 0.8em;
    color: #777;
    position: absolute;
    bottom: 10px; /* Adjust as needed */
    left: 10px; /* Adjust as needed */
    background-color: rgba(255, 255, 255, 0.7); /* Optional: add a background for better readability */
    padding: 2px 5px; /* Optional: add some padding */
  }
  
  .our-mission-image {
    background-image: url('/public/assets/images/TheFutureLeadersGrant/our-mission.jpg');
  }
  
  .about-the-grant-image {
    background-image: url('/public/assets/images/TheFutureLeadersGrant/AboutTheGrant.jpg');
  }
  
  .power-diverse-image {
    background-image: url('/public/assets/images/TheFutureLeadersGrant/ThePowerOfDiverseLeadership.jpg');
  }
  
  .how-you-can-help-image {
    background-image: url('/public/assets/images/TheFutureLeadersGrant/HowYouCanHelp.jpg');
  }

  .main-header {
    text-align: center;
    padding: 20px 0;
  }
  </style>
  