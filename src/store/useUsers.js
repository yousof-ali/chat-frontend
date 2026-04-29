import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useUsers = create((set) => ({
  users: {},
  loadingUser:false,

  getUser: async () => {
    try {
      set({ loadingUser: true });
      const res = await axiosInstance.get("/home/all-users");
      set({ users: res.data.data });
    } catch (error) {
      console.log("Error in loginUser", error);
    } finally {
      set({ loadingUser: false });
    }
  },
}));
