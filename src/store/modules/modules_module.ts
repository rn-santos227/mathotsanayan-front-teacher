import Module from "@/types/Module";
import Page from "@/interfaces/Page";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useModulesModule = defineStore("modules", {
  state: () => ({
    modules: [] as Module[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setModules(modules: Module[]) {
      this.modules = modules;
    },

    setPage(page: Page) {
      this.page = page;
    },

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.MODULES.READ}?page=${page}`
        );
        const res = await response.json();
        const { data } = res.modules;

        if (data) {
          data.forEach((item: Module) => {
            if (item.active) item.active = true;
            else item.active = false;
          });
        }

        this.setPage(res.modules);
        this.setModules(data);
        return true;
      } catch (error) {
        console.error("Error Module in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getModules(): Module[] {
      return this.modules;
    },
  },
});
