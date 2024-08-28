import { useEffect } from "react";

import { index } from "@/api/session";
import useSession from "@/store/useSession";
import useStudy from "@/store/useStudy";

const useIndexSession = (id: string) => {
  const { session, setSession } = useSession((state: any) => ({
    session: state.session,
    setSession: state.setSession,
  }));
  const { setFlip, setIndex, setResponses } = useStudy((state: any) => ({
    setIndex: state.setIndex,
    setFlip: state.setFlip,
    setResponses: state.setResponses,
  }));

  useEffect(() => {
    const fetch = async () => {
      const data = await index(id);
      setSession(data);
      setFlip(false);
      setIndex(0);
      setResponses([]);
    };

    fetch();
  }, [id, setSession, setFlip, setIndex, setResponses]);

  return { session };
};

export { useIndexSession };
