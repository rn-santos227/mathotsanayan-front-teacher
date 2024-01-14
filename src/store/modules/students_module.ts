import Student from "@/types/Student";
import Page from "@/interfaces/Page";
import Search from "@/interfaces/Search";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useStudentsModule = defineStore("students", {
  state: () => ({
    students: [] as Student[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setStudents(students: Student[]) {
      this.students = students;
    },

    setPage(page: Page) {
      this.page = page;
    },

    addStudent(student: Student) {
      this.students.unshift(student);
    },

    updateStudent(student: Student) {
      const index = this.students.findIndex((item) => item.id === student.id);
      if (index !== -1) {
        this.students[index] = student;
      }
    },

    deleteStudent(student: Student) {
      this.students = this.students.filter((item) => item.id !== student.id);
    },

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.STUDENTS.READ}?page=${page}`
        );
        const res = await response.json();
        const { data } = res.students;
        this.setPage(res.students);
        this.setStudents(data);
        return true;
      } catch (error) {
        console.error("Error Student in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async search(payload: Search): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.STUDENTS.SEARCH}?category=${payload.category}&search=${payload.search}`
        );
        const data = await response.json();
        const { students } = data;
        this.page.current_page = 1;
        this.page.total = 1;
        this.page.per_page = students.length;
        this.setStudents(students);
        return true;
      } catch (error) {
        console.error("Error Students in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getStudents(): Student[] {
      return this.students;
    },
  },
});
