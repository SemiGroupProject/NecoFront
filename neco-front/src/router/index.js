import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Index'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/MainRecommend.vue')
      },
      {
        path: '/item-management',
        component: () => import('@/pages/ItemManagement.vue')
      },
      {
        path: '/item/:id',
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
        path: '/notice/:id',
        name: 'notice-item',
        component: () => import('@/pages/NoticeItem.vue')
      },
      {
        path: '/ad-inquiry',
        component: () => import('@/pages/Advertisement.vue')
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
        name: 'log-in',
        path: '/log-in',
        component: () => import('@/pages/authentication/LogIn.vue')
      },
      {
        path: '/sign-up',
        component: () => import('@/pages/authentication/SignUp.vue')
      },
      {
        path: '/my-info',
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
