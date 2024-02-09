import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue'; // Adjust this import to your actual component
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
  history: createWebHistory(),
  routes,
});

export default router;