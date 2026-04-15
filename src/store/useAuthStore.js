import { create } from "zustand";
import { axiosInstance } from "../lib/axios";


export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLoggingIng: false,
  isUpdateingProfile: false,

  isLoading: true,

  checkCurrentUser: async () => {
    try {
      const res = await axiosInstance.get("/auth/current-user");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in chrckCurrentUser", error.message);
      set({authUser:null})
    } finally {
      set({ isLoading: false });
    }
  },
}));
