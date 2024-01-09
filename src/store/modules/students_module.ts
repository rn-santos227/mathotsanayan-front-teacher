import { defineStore } from "pinia";

export const useStudentsModule = defineStore("students", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
  }),
});
