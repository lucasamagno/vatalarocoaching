<template>
  <div class="about-page">
    <h1 class="about-title">Hi, I'm Kayla</h1>
    <div class="split-section">
      <div class="left-side">
        <!-- Background image will be set via CSS -->
      </div>
      <div class="right-side">
        <p>My journey into coaching stems from a deep-rooted commitment to my living my <a href="https://brenebrown.com/resources/dare-to-lead-list-of-values/">value</a> of growth – both my own and that of others.</p>
        <p>Navigating through the complexities of belonging has been a recurring theme in my life. As one of the 200,000 Korean orphans who found homes through international adoption, I've experienced a strange entanglement of identities and grappled with feelings of otherness. This journey towards self-discovery has fueled my passion for creating spaces of inclusion and belonging, long before these concepts became prevalent in the workplace vernacular.</p>
        <p>In 2016, amidst societal shifts and divisive rhetoric, I confronted the layers of disconnection surrounding my identity. This pivotal moment ignited my passion for supporting individuals from underrepresented backgrounds in finding purpose and resilience amidst adversity; I began working closely with women from underserved communities, assisting them in overcoming barriers and empowering them to enter and thrive in the workforce through various volunteer organizations.  Later in life, as an executive sponsor for a BIPOC employee resource group, I began immersing myself in understanding intersectional identities and their impact on professional growth.  I began coaching as a way to formalize my commitment to supporting others in their growth journey, and to leverage the lessons I've learned while navigating my own path to gaining a seat at the table.  It was sometimes a lonely road, but it doesn't have to be for others. My aim is to empower individuals, regardless of their background, to realize their fullest potential and create thriving organizations.</p>
        <p>In my coaching practice, I draw upon over a decade of executive and leadership experience spanning Talent & Diversity, Go-To-Market, and Social Impact at global companies leading their categories (and not coincidentally, are also known for their impressive cultures and marketcaps). My career includes roles across diverse industries, from startups to multi-billion-dollar companies, often building from early-stage to post-IPO. I am  deeply committed to continue to understand and create solutions for the challenges and faced by today's leaders, allowing me to provide a holistic approach to empower them for success in the dynamic professional landscape.Whether you're an executive seeking to build inclusive teams or an aspiring leader striving to align your career with your purpose, I'm here to support you on your journey towards growth and fulfillment.</p>
        <p>My mission is clear: to make the world better by helping individuals and organizations flourish.</p>

        <hr>

        <h1 class="about-title2">More About Kayla</h1>
        <p>A first generation graduate, she holds degrees and certifications in neuroscience, gender studies, business, strength finding, and executive coaching. She’s personally participated in the launching 3 successful IPOs, and supported many others along that journey and beyond.  Her leadership approach has been recognized in publications like The Muse, Forbes, Marie Claire, and DigiDay.  She was also honored as a 2022 Woman of the Year by Pledge 1% for International Women's Day, with a feature on NASDAQ. </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script setup area remains as it is since no JavaScript logic is needed for this example.
</script>

<style scoped>
.about-page {
  text-align: center;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 50px;
  padding: 10px;
}

.split-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.left-side, .right-side {
  flex: 1;
}

.left-side {
  background-image: url('/public/assets/images/IMG_1166.jpg'); /* Reference to the image URL */
  background-size: contain; /* Ensure the image covers the entire div */
  background-repeat: no-repeat;
  background-position: center; /* Center the image within the div */
  height: 500px; /* Explicitly set a height for the div */
}

.right-side {
  text-align: justify; /* Align text content to the left */
  padding: 0 20px; /* Optional padding for spacing */
}


.about-title {
  font-family: "Over the Rainbow", cursive;
}

.about-title2 {
  font-family: "Lato", cursive;
}

</style>
