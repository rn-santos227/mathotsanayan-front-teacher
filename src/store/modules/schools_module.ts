import School from "@/types/School";
import { defineStore } from "pinia";

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
  },

  getters: {
    getSchools(): School[] {
      return this.schools;
    },
  },
});
