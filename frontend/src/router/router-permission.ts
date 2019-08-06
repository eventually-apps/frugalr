import router from '@/router/router';
import { Route } from 'vue-router';

router.beforeEach((to: Route, from: Route, next: any) => {
    console.log(to, from);
    // route guards.
    next();
});
