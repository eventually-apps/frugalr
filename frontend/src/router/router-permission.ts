import router from '@/router/router';
import { Route } from 'vue-router';
import { setTitle } from '@/lib/utils';

router.beforeEach((to: Route, from: Route, next: any) => {
    // route guards.
    next();

    setTitle(to.meta.title);
});
