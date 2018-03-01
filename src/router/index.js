import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Create from '@/components/Create';
import Todo from '@/components/Todo';
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
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
