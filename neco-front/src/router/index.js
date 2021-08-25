import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/pages/MainPage.vue')
  },
  {
    path: '/LogIn',
    component: () => import('@/pages/user/LogInPage.vue')
  },
  {
    path: '/signUp',
    component: () => import('@/pages/user/SignUpPage.vue')
  },
  {
    path: '/findId',
    component: () => import('@/pages/user/FindIdPage.vue')
  },
  {
    path: '/findPassword',
    component: () => import('@/pages/user/FindPasswordPage.vue')
  },
  {
    path: '/itemManagement',
    component: () => import('@/pages/ItemManagementPage.vue')
  },
  {
    path: '/item',
    component: () => import('@/pages/ItemPage.vue')
  },
  {
    path: '/myInfo',
    component: () => import('@/pages/user/MyInfoPage.vue')
  },
  {
    path: '/myStore',
    component: () => import('@/pages/MyStorePage.vue')
  },
  {
    path: '/itemSell',
    component: () => import('@/pages/ItemSellPage.vue')
  },
  {
    path: '/notice',
    component: () => import('@/pages/NoticePage.vue')
  },
  {
    path: '/adinquiry',
    component: () => import('@/pages/AdinquiryPage.vue')
  },
  {
    path: '/policy',
    component: () => import('@/pages/PolicyPage.vue')
  },
  {
    path: '/question',
    component: () => import('@/pages/QuestionPage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
