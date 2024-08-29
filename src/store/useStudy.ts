import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Option } from "@/interfaces/option";

const useStudy = create(
  persist(
    (set) => ({
      flip: false,
      setFlip: (flip: boolean) => set({ flip }),
      index: 0,
      setIndex: (index: number) => set({ index }),
      responses: [],
      setResponses: (responses: string[]) => set({ responses }),
      options: [],
      setOptions: (options: Option[]) => set({ options }),
    }),
    {
      name: "store-study",
      getStorage: () => localStorage,
    },
  ),
);

export default useStudy;
