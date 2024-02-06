import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue'; // Adjust this import to your actual component
import AboutPage from '@/components/AboutPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import IndividualCoaching from '@/components/IndividualCoaching.vue';
import StartupCoaching from '@/components/StartupCoaching.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/individual-coaching', component: IndividualCoaching },
  { path: '/startup-coaching', component: StartupCoaching },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;