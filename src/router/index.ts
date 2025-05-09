import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// 1. Define your route components (for demo purposes)
import App from '../App.vue';
// 2. Define your routes
const routes: RouteRecordRaw[] = [{ path: '/', name: 'Home', component: App }];

// 3. Create the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
