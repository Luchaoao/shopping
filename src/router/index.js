import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/cartcheck',
      name: 'cartcheck',
      component: () => import('@/views/Cartcheck.vue')
    },
    {
      path: '/cartinformation',
      name: 'cartinformation',
      component: () => import('@/views/Cartinformation.vue')
    },
    {
      path: '/completebuying',
      name: 'completebuying',
      component: () => import('@/views/Completebuying.vue')
    },
  ],
});

export default router;
