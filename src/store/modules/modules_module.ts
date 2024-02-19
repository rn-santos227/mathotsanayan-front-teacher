import Module from "@/types/Module";
import Page from "@/interfaces/Page";

import { defineStore } from "pinia";

export const useModulesModule = defineStore("modules", {
  state: () => ({
    modules: [] as Module[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),

  getters: {
    getModules(): Module[] {
      return this.modules;
    },
  },
});
