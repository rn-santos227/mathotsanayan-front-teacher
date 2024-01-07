import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import DashboardView from "../views/dashboard/MainView.vue";
import AuthView from "../views/auth/MainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    meta: {
      forAuth: true,
    },
  },

  {
    path: "/login",
    name: "login",
    component: AuthView,
    meta: {
      forVisitors: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
