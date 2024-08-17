import { create } from "zustand";
import { persist } from "zustand/middleware";

const useModal = create(
  persist(
    (set) => ({
      selected: "",
      setSelected: (selected: string) => set({ selected }),
    }),
    {
      name: "store-modal",
      getStorage: () => localStorage,
    },
  ),
);

export default useModal;
