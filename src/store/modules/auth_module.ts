import Password from "@/interfaces/Password";
import Teacher from "@/types/Teacher";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAuthModule = defineStore("auth", {
  state: () => ({
    type: 2 as number,
    teacher: {} as Teacher,
    accessToken: localStorage.getItem("accessToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
    isLoading: false,
  }),

  actions: {
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    },

    setToken(token: string): void {
      this.accessToken = token;
      this.isAuthenticated = true;
      localStorage.setItem("accessToken", token);
    },

    async login(email: string, password: string): Promise<void> {
      try {
        this.isLoading = true;
        const response = await fetch(api.AUTH.LOGIN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        const { token, teacher } = data;
        if (token) {
          this.setTeacher(teacher);
          this.setToken(token);
        }
      } catch (error) {
        console.error("Error logging in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async fetchUserData(): Promise<void> {
      if (!this.isAuthenticated) return;
      try {
        const response = await authenticatedFetch(api.AUTH.USER);
        const data = await response.json();
        const { teacher } = data;
        this.setTeacher(teacher);
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },

    async changePassword(payload: Password): Promise<boolean> {
      try {
        this.isLoading = true;
        await authenticatedFetch(api.AUTH.PASSWORD, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        return true;
      } catch (error) {
        console.error("Error Course in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async logout(): Promise<void> {
      try {
        this.isLoading = true;
        await authenticatedFetch(api.AUTH.LOGOUT);
        this.accessToken = null;
        this.isAuthenticated = false;
        localStorage.removeItem("accessToken");
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getStudent(): Teacher {
      return this.teacher;
    },
  },
});
