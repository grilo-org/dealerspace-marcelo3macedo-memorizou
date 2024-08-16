import { create } from "zustand";
import { persist } from "zustand/middleware";

import { NewNotebook } from "@/interfaces/notebook";

const useNotebook = create(
  persist(
    (set) => ({
      editing: null,
      setEditing: (editing: NewNotebook) => set({ editing }),
    }),
    {
      name: "store-notebook",
      getStorage: () => localStorage,
    },
  ),
);

export default useNotebook;
