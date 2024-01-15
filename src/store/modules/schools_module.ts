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

    async create(payload: School): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.SCHOOLS.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { school } = data;
        this.addSchool(school);

        return true;
      } catch (error) {
        console.error("Error School in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
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

    async update(payload: School): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.SCHOOLS.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { school } = data;
        this.updateSchool(school);
        return true;
      } catch (error) {
        console.error("Error School in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: School): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.SCHOOLS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { school } = data;
        this.deleteSchool(school);
        return true;
      } catch (error) {
        console.error("Error School in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getSchools(): School[] {
      return this.schools;
    },
  },
});
