<template>
  <div class="executive-coaching-page">
    <ExecutiveCoachingHero />
    <section>
      <div class="content">
        <h2>1:1 Coaching & More</h2>
        <p class="paragraph">My practice is dedicated to empowering leaders to excel in the corporate world while championing outcomes that bring about transformative change to their lives and society. I'm here to provide the essential support executives and rising leaders need: encouragement, a reliable sounding board, honest self-reflection, and support in developing crucial leadership skills. As a practitioner of holistic coaching methods, I place a strong emphasis on total well-being and the principles of strengths-based psychology and conscious leadership principles. Achieving profound growth in leadership occurs when your state of being aligns seamlessly with your actions.</p>
        <p class="paragraph">I’ve guided leaders in building winning teams, inspiring and developing their employees, running effective meetings, public speaking, overcoming imposter syndrome, making confident decisions, navigating rejection, and ultimately fulfilling their full potential on their current career journey and beyond.</p>
        <p class="paragraph">I also work with entire executive teams. We’ll go beyond mere alignment, and focus on empowering each member to be their best selves and to collectively excel together.</p>
        <LeadingDiverseTeams />
        <p class="startup-leader">Are you a startup leader? Learn more about critical People Partnership services we provide to startups <router-link to="/startups" class="learn-more-link">here</router-link>.</p>
      </div>
    </section>
    <LetsChat />
  </div>
</template>

<script setup>
import ExecutiveCoachingHero from './ExecutiveCoachingHero.vue'
import LeadingDiverseTeams from './LeadingDiverseTeams.vue'
import LetsChat from './LetsChat.vue'
</script>

<style scoped>
.executive-coaching-page {
  text-align: left;
  margin: auto;
  margin-bottom: 50px;
}

.content {
  max-width: 75%;
  margin: 0 auto;
}

.paragraph {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
}

.startup-leader {
  margin-top: 50px;
  font-size: 1.2rem;
  text-align: center;
}

.learn-more-link {
  color: #141726;
  text-decoration: underline;
}
</style>
