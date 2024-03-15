import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import ExecutiveCoaching from '@/components/ExecutiveCoaching.vue';
import ForTeamsPage from '@/components/ForTeamsPage.vue';
import RisingStarsPage from '@/components/RisingStarsPage.vue'
import StartupsPage from '@/components/StartupsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/executive-coaching', component: ExecutiveCoaching },
  { path: '/for-teams', component: ForTeamsPage },
  { path: '/rising-professionals', component: RisingStarsPage },
  { path: '/startups', component: StartupsPage }  
];

const router = createRouter({
  history: createWebHistory('/'), // Adjusted to include the base URL
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
