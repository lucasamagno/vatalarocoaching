import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import ExecutiveCoaching from '@/components/ExecutiveCoaching.vue';
import ConsultingPage from '@/components/ConsultingPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/executive-coaching', component: ExecutiveCoaching },
  { path: '/consulting', component: ConsultingPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Adjusted to include the base URL
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
