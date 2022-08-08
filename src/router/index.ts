import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../view/MainView.vue';
import NotFoundPageView from '../view/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: NotFoundPageView,
    },
  ],
});

export default router;
