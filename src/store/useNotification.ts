import { create } from "zustand";
import { persist } from "zustand/middleware";

const useNotification = create(
  persist(
    (set) => ({
      type: "",
      message: "",
      setType: (type: string) => set({ type }),
      setMessage: (message: string) => set({ message }),
    }),
    {
      name: "store-notification",
      getStorage: () => localStorage,
    },
  ),
);

export default useNotification;
