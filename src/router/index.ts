import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthModule } from "@/store";

import AuditView from "../views/audit/MainView.vue";
import AuthView from "../views/auth/MainView.vue";
import CoursesView from "../views/courses/MainView.vue";
import DashboardView from "../views/dashboard/MainView.vue";
import ModuleView from "../views/modules/MainView.vue";
import ReportsView from "../views/reports/MainView.vue";
import SectionsView from "../views/sections/MainView.vue";
import StudentsView from "../views/students/MainView.vue";

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
    path: "/audit",
    name: "audit",
    component: AuditView,
    meta: {
      forAuth: true,
    },
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursesView,
    meta: {
      forAuth: true,
    },
  },
  {
    path: "/modules",
    name: "modules",
    component: ModuleView,
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
    path: "/sections",
    name: "sections",
    component: SectionsView,
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
