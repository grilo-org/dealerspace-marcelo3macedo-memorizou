"use client";
import { useEffect } from "react";

import { notebooks as apiNotebooks } from "@/api/users";
import useUser from "@/store/useUser";

const useNotebooksUser = (pageNum: number, limitNum: number) => {
  const { notebooks, setNotebooks } = useUser((state: any) => ({
    notebooks: state.notebooks,
    setNotebooks: state.setNotebooks,
  }));

  useEffect(() => {
    const fetch = async () => {
      const data = await apiNotebooks(pageNum, limitNum);
      setNotebooks(data);
    };

    if (!notebooks) {
      fetch();
    }
  }, [notebooks, pageNum, limitNum, setNotebooks]);

  return {
    notebooks,
  };
};

export { useNotebooksUser };
