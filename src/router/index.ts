import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import DashboardView from "../views/dashboard/MainView.vue";
import ReportsView from "../views/reports/MainView.vue";
import StudentsView from "../views/students/MainView.vue";
import AuthView from "../views/auth/MainView.vue";

import { useAuthModule } from "@/store";

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
    path: "/reports",
    name: "reports",
    component: ReportsView,
    meta: {
      forAuth: true,
    },
  },
  {
    path: "/students",
    name: "students",
    component: StudentsView,
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

router.beforeEach((to, from, next) => {
  const authStore = useAuthModule();
  if (to.meta.forAuth && !authStore.isAuthenticated) {
    next("/login");
  } else if (to.meta.forVisitors && authStore.isAuthenticated) {
    next("/");
  } else if (to.matched.length === 0) {
    next("/");
  } else {
    next();
  }
});

export default router;
