<template>
    <div className="executive-coaching-page">
        <h1 className="page-title">Vatalaro Executive and Leadership Coaching</h1>
        <h3>Are you ready to step into your full potential?</h3>
        <p>My practice is dedicated to empowering leaders to excel in the corporate world while championing outcomes that bring about transformative change to their lives and society.</p>
        <ApproachSection />


        <ExecutiveCoachingBlurb />
        <AreasOfCollaboration />
        <InclusiveLeadership />
    </div>
</template>


<script setup> 
import ApproachSection from './ApproachSection.vue'
import AreasOfCollaboration from './AreasOfCollaboration.vue'
import InclusiveLeadership from './InclusiveLeadership.vue'
import ExecutiveCoachingBlurb from './ExecutiveCoachingBlurb.vue'

</script>
<style scoped>

.executive-coaching-page {
    text-align: center;
    max-width: 1100px;
    margin: auto;
    margin-bottom: 50px;
    padding: 10px;
}

.page-title {
    font-size: 2rem;    
    margin-top: 40px; /* Adjust this value as needed for top spacing */
    margin-bottom: 40px; /* Adjust this value as needed for bottom spacing */
}

</style>