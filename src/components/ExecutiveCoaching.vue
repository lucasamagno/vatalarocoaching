<template>
    <div className="executive-coaching-page">
        <ExecutiveCoachingHero />
        <ApproachSection />

        <ExecutiveCoachingBlurb />
        <AreasOfCollaboration />
        <LetsChat />
    </div>
</template>


<script setup> 
import ApproachSection from './ApproachSection.vue'
import AreasOfCollaboration from './AreasOfCollaboration.vue'
import ExecutiveCoachingBlurb from './ExecutiveCoachingBlurb.vue'
import ExecutiveCoachingHero from './ExecutiveCoachingHero.vue'
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