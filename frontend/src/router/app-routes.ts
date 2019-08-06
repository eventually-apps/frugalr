import { IRouter } from './router-entities/IRouter';
import Home from '../views/Home.vue';

export const appRoutes: IRouter[] = [
  {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '',
        requiresAuth: false,
      },
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/EditTemplate.vue'),
      meta: {
        title: 'Create Invoice',
        requiresAuth: false,
      },
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('@/views/ConfirmationSend.vue'),
      meta: {
        title: 'Confirmation',
        requiresAuth: false,
      },
    },
];
