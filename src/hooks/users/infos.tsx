"use client";
import { useEffect } from "react";

import { index } from "@/api/users";
import useUser from "@/store/useUser";

const useInfosUser = () => {
  const { infos, token, setInfos } = useUser((state: any) => ({
    token: state.token,
    infos: state.infos,
    setInfos: state.setInfos,
  }));

  useEffect(() => {
    const fetch = async () => {
      const data = await index();
      setInfos(data);
    };

    if (!infos && token) {
      fetch();
    }
  }, [token, infos, setInfos]);

  return {
    infos,
  };
};

export { useInfosUser };
