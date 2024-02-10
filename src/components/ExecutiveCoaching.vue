<template>
    <div className="executive-coaching-page">
        <ExecutiveCoachingHero />
        <section>
            <p>My practice is dedicated to empowering leaders to excel in the corporate world while championing outcomes that bring about transformative change to their lives and society.  I'm here to provide the essential support executives and rising leaders need: encouragement, a reliable sounding board, honest self-reflection, and support in developing crucial leadership skills. As a practitioner of holistic coaching methods, I place a strong emphasis on total well-being and the principles of strengths-based psychology and conscious leadership principles. Achieving profound growth in leadership occurs when your state of being aligns seamlessly with your actions.</p>
            <p>I’ve guided leaders in building winning teams, inspiring and developing their employees,  running effective meetings, public speaking, overcoming imposter syndrome, making confident decisions, navigating rejection, and ultimately fulfilling their full potential on their current career journey and beyond.</p>
            <p>I also work with entire executive and leader teams.  We’ll go beyond mere alignment, and focus on empowering each member to be their best selves and to collectively excel together.  </p>
            
            <LeadingDiverseTeams />
            <p>Are you a startup leader?  Learn more about critical People Partnership services we provide to startups here.</p>
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
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
}

.page-title {
    font-size: 2rem;    
    margin-top: 40px; /* Adjust this value as needed for top spacing */
    margin-bottom: 40px; /* Adjust this value as needed for bottom spacing */
}

</style>