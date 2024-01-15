import Section from "@/types/Section";
import { defineStore } from "pinia";

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
  },

  getters: {
    getSections(): Section[] {
      return this.sections;
    },
  },
});
