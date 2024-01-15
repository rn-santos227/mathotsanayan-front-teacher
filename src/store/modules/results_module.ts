import Result from "@/types/Result";
import Page from "@/interfaces/Page";
import Search from "@/interfaces/Search";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useResultsModule = defineStore("results", {
  state: () => ({
    results: [] as Result[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setResults(results: Result[]) {
      this.results = results;
    },

    setPage(page: Page) {
      this.page = page;
    },

    deleteResult(result: Result): void {
      this.results = this.results.filter((item) => item.id !== result.id);
    },

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.RESULTS.READ}?page=${page}`
        );
        const res = await response.json();
        const { data } = res.results;

        this.setPage(res.results);
        this.setResults(data);
        return true;
      } catch (error) {
        console.error("Error Results in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async search(payload: Search): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.RESULTS.SEARCH}?category=${payload.category}&search=${payload.search}`
        );
        const data = await response.json();
        const { results } = data;
        this.page.current_page = 1;
        this.page.total = 1;
        this.page.per_page = results.length;
        this.setResults(results);
        return true;
      } catch (error) {
        console.error("Error Results in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async delete(payload: Result): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.RESULTS.INVALIDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { result } = data;
        this.deleteResult(result);
        return true;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getResults(): Result[] {
      return this.results;
    },
  },
});
