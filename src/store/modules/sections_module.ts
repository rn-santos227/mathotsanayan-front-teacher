import Section from "@/types/Section";
import { defineStore } from "pinia";

export const useSectionsModule = defineStore("sections", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
    sections: [] as Section[],
  }),
});
