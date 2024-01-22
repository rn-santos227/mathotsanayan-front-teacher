import Page from "@/interfaces/Page";
import Audit from "@/types/Audit";
import { defineStore } from "pinia";

export const useAuditModule = defineStore("audit", {
  state: () => ({
    audit: [] as Audit[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),
});
