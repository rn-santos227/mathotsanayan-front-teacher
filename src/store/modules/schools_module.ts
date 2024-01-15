import School from "@/types/School";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useSchoolsModule = defineStore("schools", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
    schools: [] as School[],
  }),

  actions: {
    setSchools(schools: School[]): void {
      this.schools = schools;
    },

    addSchool(school: School): void {
      this.schools.unshift(school);
    },

    updateSchool(school: School): void {
      const index = this.schools.findIndex((item) => item.id === school.id);
      if (index !== -1) {
        this.schools[index] = school;
      }
    },

    deleteSchool(school: School): void {
      this.schools = this.schools.filter((item) => item.id !== school.id);
    },

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.SCHOOLS.READ);
        const data = await response.json();
        const { schools } = data;
        this.setSchools(schools);

        return true;
      } catch (error) {
        console.error("Error School in:", error);

        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getSchools(): School[] {
      return this.schools;
    },
  },
});
