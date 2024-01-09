import Course from "@/types/Course";
import { defineStore } from "pinia";

export const useCoursesModule = defineStore("courses", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
    courses: [] as Course[],
  }),
});
