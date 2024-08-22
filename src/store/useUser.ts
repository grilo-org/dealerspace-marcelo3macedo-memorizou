import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
  persist(
    (set) => ({
      token: "",
      setToken: (token: string) => set({ token }),
      infos: null,
      setInfos: (infos: any) => set({ infos }),
      notebooks: null,
      setNotebooks: (notebooks: any) => set({ notebooks }),
    }),
    {
      name: "store-user",
      getStorage: () => localStorage,
    },
  ),
);

export default useUser;
