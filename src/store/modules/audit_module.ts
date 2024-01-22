import Page from "@/interfaces/Page";
import Audit from "@/types/Audit";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAuditModule = defineStore("audit", {
  state: () => ({
    audit: [] as Audit[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setAudit(audit: Audit[]) {
      this.audit = audit;
    },

    setPage(page: Page) {
      this.page = page;
    },

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.AUDIT.READ}?page=${page}`
        );
        const res = await response.json();
        const { data } = res.audit;

        this.setPage(res.audit);
        this.setAudit(data);
        return true;
      } catch (error) {
        console.error("Error Audit in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getAudit(): Audit[] {
      return this.audit;
    },
  },
});
