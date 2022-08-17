import MainPage from '@/pages/main';
import NotFoundPage from '@/pages/not-found';

const routes = [
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
];

export default routes;
