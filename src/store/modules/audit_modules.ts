import Audit from "@/types/Audit";
import { defineStore } from "pinia";

export const useAuditModule = defineStore("audit", {
  state: () => ({
    audit: [] as Audit[],
    isLoading: false,
  }),
});
