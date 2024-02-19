import Question from "@/types/Question";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useQuestionsModule = defineStore("questions", {
  state: () => ({
    questions: [] as Question[],
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setQuestions(questions: Question[]): void {
      this.questions = questions;
    },

    async read(id: number) {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(`${api.QUESTIONS.READ}${id}`);
        const data = await response.json();
        const { questions } = data;
        this.setQuestions(questions);
        return true;
      } catch (error) {
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getQuestions(): Question[] {
      return this.questions;
    },
  },
});
