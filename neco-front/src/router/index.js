import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Index'),
    children: [
      {
        path: '/item-management',
        component: () => import('@/pages/ItemManagement.vue')
      },
      {
        path: '/item',
        component: () => import('@/pages/Item.vue')
      },
      {
        path: '/my-store',
        component: () => import('@/pages/MyStore.vue')
      },
      {
        path: '/item-sell',
        component: () => import('@/pages/ItemSell.vue')
      },
      {
        path: '/notice',
        component: () => import('@/pages/Notice.vue')
      },
      {
        path: '/adinquiry',
        component: () => import('@/pages/Adinquiry.vue')
      },
      {
        path: '/question',
        component: () => import('@/pages/Question.vue')
      }
    ]
  },
  {
    path: '/find',
    component: () => import('@/layouts/find/Index'),
    children: [
      {
        path: '/find-id',
        component: () => import('@/pages/find/FindId.vue')
      },
      {
        path: '/find-password',
        component: () => import('@/pages/find/FindPassword.vue')
      }
    ]
  },
  {
    path: '/authentication',
    component: () => import('@/layouts/authentication/Index'),
    children: [
      {
        path: '/log-in',
        component: () => import('@/pages/authentication/LogIn.vue')
      },
      {
        path: '/sign-up',
        component: () => import('@/pages/authentication/SignUp.vue')
      },
      {
        path: 'my-info',
        component: () => import('@/pages/authentication/MyInfo.vue')
      }
    ]
  },
  {
    path: '/etc',
    component: () => import('@/layouts/etc/Index'),
    children: [
      {
        path: '/policy',
        component: () => import('@/pages/etc/Policy.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
