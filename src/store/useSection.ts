import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Section } from "@/interfaces/section";

const useSection = create(
  persist(
    (set) => ({
      editing: null,
      setEditing: (editing: Section) => set({ editing }),
    }),
    {
      name: "store-section",
      getStorage: () => localStorage,
    },
  ),
);

export default useSection;
