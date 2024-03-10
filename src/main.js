// Assuming you have already imported Vue and Vue Router and set up your routes

// Import necessary items
import { createApp } from 'vue';
import App from './App.vue'; // Adjust the import path according to your file structure
import router from './router'; // Adjust the import path to where your router is defined

const app = createApp(App);

// Use the router
app.use(router);

// Wait for the router to be ready
router.isReady().then(() => {
  // Once the router is ready, mount the app
  app.mount('#app');

  // Check for a path parameter in the URL
  const params = new URLSearchParams(window.location.search);
  const path = params.get('path');
  if (path) {
    // Use decodeURIComponent to handle any encoded characters
    router.push(decodeURIComponent(path));
  }
});
