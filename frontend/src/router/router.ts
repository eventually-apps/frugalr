import Vue from 'vue';
import Router from 'vue-router';
import { appRoutes } from '@/router/app-routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: appRoutes,
});
