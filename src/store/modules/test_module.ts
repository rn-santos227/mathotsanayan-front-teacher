import Answer from "@/types/Answer";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useTestModule = defineStore("test", {
  state: () => ({
    isLoading: false,
  }),

  actions: {
    async submit(payload: Answer) {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          api.TEST.SUBMIT + payload.question,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const data = await response.json();
        const { correct, solution } = data;

        return { correct, solution };
      } catch (error) {
        console.error("Error Test in:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
