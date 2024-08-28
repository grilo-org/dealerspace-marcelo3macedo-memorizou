import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStudy = create(
  persist(
    (set) => ({
      flip: false,
      setFlip: (flip: boolean) => set({ flip }),
      index: 0,
      setIndex: (index: number) => set({ index }),
      responses: [],
      setResponses: (responses: string[]) => set({ responses }),
    }),
    {
      name: "store-study",
      getStorage: () => localStorage,
    },
  ),
);

export default useStudy;
