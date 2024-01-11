import Student from "@/types/Student";
import { defineStore } from "pinia";

export const useStudentsModule = defineStore("students", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
    students: [] as Student[],
  }),

  getters: {
    getSections(): Student[] {
      return this.students;
    },
  },
});
