import Dashboard from "@/interfaces/Dashboard";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useDashboardModule = defineStore("dashboard", {
  state: () => ({
    isLoading: false as boolean,
    dashboard: {} as Dashboard,
  }),

  actions: {
    setDashboard(dashboard: Dashboard): void {
      this.dashboard = dashboard;
    },

    async read() {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.DASHBOARD.READ);
        const data = await response.json();
        const { dashboard } = data;
        this.setDashboard(dashboard);
      } catch (error) {
        console.error("Error Course in:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getDashboard(): Dashboard {
      return this.dashboard;
    },
  },
});
