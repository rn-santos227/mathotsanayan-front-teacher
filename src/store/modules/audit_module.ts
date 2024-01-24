import Page from "@/interfaces/Page";
import Search from "@/interfaces/Search";
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

    async search(payload: Search): Promise<boolean> {
      try {
        this.isTableLoading = true;
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.AUDIT.SEARCH}?category=${payload.category}&search=${payload.search}`
        );
        const data = await response.json();
        const { audit } = data;
        this.page.current_page = 1;
        this.page.total = 1;
        this.page.per_page = audit.length;
        this.setAudit(audit);
        return true;
      } catch (error) {
        console.error("Error Audit in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
        this.isLoading = false;
      }
    },
  },

  getters: {
    getAudit(): Audit[] {
      return this.audit;
    },
  },
});
