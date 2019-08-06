import { IRouter } from './router-entities/IRouter';
import Home from '../views/Home.vue';

export const appRoutes: IRouter[] = [
  {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/EditTemplate.vue'),
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('@/views/ConfirmationSend.vue'),
    },
];
