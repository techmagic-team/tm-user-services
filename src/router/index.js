import Vue from 'vue';
import Router from 'vue-router';

import ServiceForm from '@/components/service/ServiceForm';
import ServicesList from '@/components/service/ServicesList';
import SignIn from '@/components/auth/SignIn';
import UsersList from '@/components/user/UsersList';

import AuthGuard from './auth-guard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/users',
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      meta: {
        noHeaders: true,
      },
      component: SignIn,
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersList,
      beforeEnter: AuthGuard,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesList,
      beforeEnter: AuthGuard,
    },
    {
      path: '/services/new',
      component: ServiceForm,
      beforeEnter: AuthGuard,
    },
    {
      path: '/services/:id',
      component: ServiceForm,
      beforeEnter: AuthGuard,
    },
    {
      path: '**',
      redirect: '/users',
    },
  ],
});
