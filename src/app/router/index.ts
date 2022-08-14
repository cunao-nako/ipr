import { createRouter, createWebHistory } from 'vue-router';

import NotFoundPage from '@/pages/not-found';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: { template: `<h1>Hello, World!</h1>` },
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: NotFoundPage,
    },
  ],
});

export default router;
