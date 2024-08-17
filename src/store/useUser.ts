import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
  persist(
    (set) => ({
      token: "",
      setToken: (token: string) => set({ token }),
    }),
    {
      name: "store-user",
      getStorage: () => localStorage,
    },
  ),
);

export default useUser;
