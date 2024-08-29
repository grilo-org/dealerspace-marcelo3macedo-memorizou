import { useEffect } from "react";

import { list } from "@/api/difficulty";
import { index } from "@/api/session";
import { Session } from "@/interfaces/session";
import useSession from "@/store/useSession";
import useStudy from "@/store/useStudy";

const useIndexSession = (id: string) => {
  const { session, setSession } = useSession((state: any) => ({
    session: state.session,
    setSession: state.setSession,
  }));
  const { setFlip, setIndex, setResponses, setOptions } = useStudy(
    (state: any) => ({
      setIndex: state.setIndex,
      setFlip: state.setFlip,
      setResponses: state.setResponses,
      setOptions: state.setOptions,
    }),
  );

  useEffect(() => {
    const initSession = (session: Session) => {
      setSession(session);
      setFlip(false);
      setIndex(0);
      setResponses([]);
    };

    const fetch = async () => {
      const session = await index(id);
      const difficuties = await list();
      initSession(session);
      setOptions(difficuties);
    };

    fetch();
  }, [id, setSession, setFlip, setIndex, setResponses, setOptions]);

  return { session };
};

export { useIndexSession };
