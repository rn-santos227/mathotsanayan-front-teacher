import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useImageModule = defineStore("image", {
  state: () => ({
    isLoading: false,
  }),

  actions: {
    async image(image: string): Promise<string> {
      try {
        this.isLoading = true;
        const payload = {
          image: image,
        };
        const response = await authenticatedFetch(api.IMAGE.IMAGE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { url } = data;
        return url;
      } catch (error) {
        console.error("Error Course in:", error);
        return "";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
