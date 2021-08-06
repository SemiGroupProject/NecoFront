import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/pages/MainPage.vue")
  },
  {
    path: "/signIn",
    component: () => import("@/pages/SignInPage.vue")
  },
  {
    path: "/signUp",
    component: () => import("@/pages/SignUpPage.vue")
  },
  {
    path: "/findPassword",
    component: () => import("@/pages/FindPasswordPage.vue")
  },
  {
    path: "/itemManagement",
    component: () => import("@/pages/ItemManagementPage.vue")
  },
  {
    path: "/item",
    component: () => import("@/pages/ItemPage.vue")
  },
  {
    path: "/myInfo",
    component: () => import("@/pages/MyInfoPage.vue")
  },
  {
    path: "/myStore",
    component: () => import("@/pages/MyStorePage.vue")
  },
  {
    path: "/itemSell",
    component: () => import("@/pages/ItemSellPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
