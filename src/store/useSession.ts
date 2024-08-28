import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Session } from "@/interfaces/session";

const useSession = create(
  persist(
    (set) => ({
      session: null,
      setSession: (session: Session) => set({ session }),
    }),
    {
      name: "store-session",
      getStorage: () => localStorage,
    },
  ),
);

export default useSession;
