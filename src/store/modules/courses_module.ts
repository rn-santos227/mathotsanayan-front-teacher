import Course from "@/types/Course";
import { defineStore } from "pinia";

export const useCoursesModule = defineStore("courses", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
    courses: [] as Course[],
  }),

  actions: {
    setCourses(courses: Course[]): void {
      this.courses = courses;
    },

    addCourse(course: Course): void {
      this.courses.push(course);
    },

    updateCourse(course: Course): void {
      const index = this.courses.findIndex((item) => item.id === course.id);
      if (index !== -1) {
        this.courses[index] = course;
      }
    },

    deleteCourse(course: Course): void {
      this.courses = this.courses.filter((item) => item.id !== course.id);
    },
  },

  getters: {
    getCourses(): Course[] {
      return this.courses;
    },
  },
});
