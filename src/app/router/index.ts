import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: NotFoundPage,
    },
  ],
});

export default router;
