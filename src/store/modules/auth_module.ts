import Teacher from "@/types/Teacher";
import { defineStore } from "pinia";

export const useAuthModule = defineStore("auth", {
  state: () => ({
    type: 1 as number,
    teacher: {} as Teacher,
    accessToken: localStorage.getItem("accessToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
    isLoading: false,
  }),
});
