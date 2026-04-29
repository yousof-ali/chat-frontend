import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLoggingIng: false,
  isUpdateingProfile: false,

  isLoading: true,

  checkCurrentUser: async () => {
    try {
      const res = await axiosInstance.get("/auth/current-user");
      set({ authUser: res.data.data });
    } catch (error) {
      console.log("Error in chrckCurrentUser", error.message);
      set({ authUser: null });
    } finally {
      set({ isLoading: false });
    }
  },

  signUpUser: async (data) => {
    try {
      set({ isSigninUp: true });
      const res = await axiosInstance.post("/auth/sign-up", data);
      set({ authUser: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error in signUpUser", error);
      toast.error(error.response.data.message || error.message);
    } finally {
      set({ isSigninUp: false });
    }
  },

  loginUser: async (data) => {
    try {
      set({ isLoggingIng: true });
      const res = await axiosInstance.post("/auth/sign-in", data);
      set({ authUser: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error in loginUser", error);
      toast.error(error.response.data.message || error.message);
    } finally {
      set({ isLoggingIng: false });
    }
  },

  updateProfilePic: async (data) => {
    try {
      set({isUpdateingProfile:true})
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data.data });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error in loginUser", error);
      toast.error(error.response.data.message || error.message);
    } finally {
      set({ isUpdateingProfile: false });
    }
  },
}));
