import Section from "@/types/Section";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useSectionsModule = defineStore("sections", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
    sections: [] as Section[],
  }),

  actions: {
    setSections(sections: Section[]) {
      this.sections = sections;
    },

    addSection(section: Section) {
      this.sections.unshift(section);
    },

    updateSection(section: Section) {
      const index = this.sections.findIndex((item) => item.id === section.id);
      if (index !== -1) {
        this.sections[index] = section;
      }
    },

    deleteSection(section: Section) {
      this.sections = this.sections.filter((item) => item.id !== section.id);
    },

    async create(payload: Section): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.SECTIONS.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { section } = data;
        this.addSection(section);
        return true;
      } catch (error) {
        console.error("Error Section in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.SECTIONS.READ);
        const data = await response.json();
        const { sections } = data;
        this.setSections(sections);
        return true;
      } catch (error) {
        console.error("Error Section in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async update(payload: Section): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.SECTIONS.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const data = await response.json();
        const { section } = data;
        this.updateSection(section);
        return true;
      } catch (error) {
        console.error("Error Section in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: Section): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.SECTIONS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { section } = data;
        this.deleteSection(section);
        return true;
      } catch (error) {
        console.error("Error Section in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getSections(): Section[] {
      return this.sections;
    },
  },
});
