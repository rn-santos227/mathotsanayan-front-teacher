import Answer from "@/types/Answer";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAnswersModule = defineStore("answers", {
  state: () => ({
    answers: [] as Answer[],
    isLoading: true,
  }),

  actions: {
    setAnswers(answers: Answer[]) {
      this.answers = answers;
    },

    async read(id: number): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(`${api.ANSWERS.READ}${id}`);
        const data = await response.json();
        const { answers } = data;
        this.setAnswers(answers);
        return true;
      } catch (error) {
        console.error("Error Answer in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getAnswers(): Answer[] {
      return this.answers;
    },
  },
});
