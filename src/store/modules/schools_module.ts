import School from "@/types/School";
import { defineStore } from "pinia";

export const useSchoolsModule = defineStore("schools", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
    schools: [] as School[],
  }),
});
