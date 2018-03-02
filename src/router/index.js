import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
