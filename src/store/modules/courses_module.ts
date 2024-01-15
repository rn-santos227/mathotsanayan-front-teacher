import Course from "@/types/Course";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

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

    async create(payload: Course): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.COURSES.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { course } = data;
        this.addCourse(course);
        return true;
      } catch (error) {
        console.error("Error Course in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.COURSES.READ);
        const data = await response.json();
        const { courses } = data;
        this.setCourses(courses);
        return true;
      } catch (error) {
        console.error("Error Course in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async update(payload: Course): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.COURSES.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { course } = data;
        this.updateCourse(course);
        return true;
      } catch (error) {
        console.error("Error Course in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: Course): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.COURSES.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { course } = data;
        this.deleteCourse(course);
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
    getCourses(): Course[] {
      return this.courses;
    },
  },
});
