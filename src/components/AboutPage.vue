<template>
  <div class="about-page">
    <h1 class="about-title">Hi, I'm Kayla</h1>
    <div class="text-container">
      <img :src="getImagePath('IMG_1166.jpg')" alt="Kayla" class="float-left">
      <p>My journey into coaching stems from a deep-rooted commitment to living my <a href="https://brenebrown.com/resources/dare-to-lead-list-of-values/">value</a> of growth – both my own and that of others. Navigating through the complexities of belonging has been a recurring theme in my life. As one of the 200,000 Korean orphans who found homes through international adoption, I've experienced a strange entanglement of identities and grappled with feelings of otherness. This journey towards self-discovery has fueled my passion for creating spaces of inclusion and belonging, long before these concepts became prevalent in the workplace vernacular.</p>
      <p>In 2016, amidst societal shifts and divisive rhetoric, I confronted the layers of disconnection surrounding my identity. This pivotal moment ignited my passion for supporting individuals from underrepresented backgrounds in finding purpose and resilience amidst adversity; I began working closely with women from underserved communities, assisting them in overcoming barriers and empowering them to enter and thrive in the workforce through various volunteer organizations. Later in life, as an executive sponsor for a BIPOC employee resource group, I began immersing myself in understanding intersectional identities and their impact on professional growth. I began coaching as a way to formalize my commitment to supporting others in their growth journey, and to leverage the lessons I've learned while navigating my own path to gaining a seat at the table. It was sometimes a lonely road, but it doesn't have to be for others. My aim is to empower individuals, regardless of their background, to realize their fullest potential and create thriving organizations.</p>
      <p>In my coaching practice, I draw upon over a decade of executive and leadership experience spanning Talent & Diversity, Go-To-Market, and Social Impact at global companies leading their categories (and not coincidentally, are also known for their impressive cultures and market caps). My career includes roles across diverse industries, from startups to multi-billion-dollar companies, often building from early-stage to post-IPO. I am deeply committed to continuing to understand and create solutions for the challenges faced by today's leaders, allowing me to provide a holistic approach to empower them for success in the dynamic professional landscape. Whether you're an executive seeking to build inclusive teams or an aspiring leader striving to align your career with your purpose, I'm here to support you on your journey towards growth and fulfillment.</p>
      <p>My mission is clear: to contribute to a better world by nurturing the growth of individuals and organizations. For me, it’s personal.</p>
    </div>
    <div class="text-container">
      <div class="text-left">
        <h1 class="about-title2">More About Kayla</h1>
        <p>A first-generation graduate, she holds degrees and certifications in neuroscience, gender studies, business, strength finding, and executive coaching. She’s personally participated in launching 3 successful IPOs and supported many others along that journey and beyond. Her leadership approach has been recognized in publications like The Muse, Forbes, Marie Claire, and DigiDay. She was also honored as a 2022 Woman of the Year by Pledge 1% for International Women's Day, with a feature on NASDAQ.</p>
        <img :src="getImagePath('IMG_1104.jpeg')" alt="More About Kayla" class="image-center">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImagePath(imageFileName) {
      // Check if running on GitHub Pages and adjust the path accordingly
      const basePath = window.location.hostname.includes('github.io') ? '/vatalarocoaching/' : '/';
      return `${basePath}assets/images/${imageFileName}`;
    }
  }
};
</script>

<style scoped>
.about-page {
  text-align: center;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 50px;
  padding: 10px;
}

.text-container {
  text-align: justify;
  padding: 20px;
  overflow: hidden; /* Ensures the container wraps around floated elements */
}

.float-left {
  float: left;
  width: 30%; /* Adjust based on your preference */
  height: auto;
  margin-right: 20px; /* For float-left */
}

.image-center {
  display: block; /* Needed to apply margin auto for centering */
  margin: 20px auto; /* Top and bottom margins for spacing, auto for left and right margins to center */
  width: 30%; /* Adjust based on your preference */
  height: auto;
}

.about-title, .about-title2 {
  font-family: "Over the Rainbow", cursive;
  margin: 20px 0;
  text-align: center;
}

@media (max-width: 768px) {
  .float-left, .image-center {
    float: none;
    margin: 10px auto; /* Center images on smaller screens */
    display: block;
    width: 80%; /* Adjust for mobile, ensuring images are not too large */
  }

  .text-container {
    padding: 10px; /* Adjust padding for smaller screens */
  }
}
</style>
