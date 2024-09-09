"use client";
import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { notebooks as apiNotebooks } from "@/api/users";
import { validate } from "@/helpers/requests/validateError";
import useUser from "@/store/useUser";

const useNotebooksUser = (pageNum: number, limitNum: number) => {
  const router = useRouter();
  const { notebooks, setNotebooks } = useUser((state: any) => ({
    notebooks: state.notebooks,
    setNotebooks: state.setNotebooks,
  }));

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await apiNotebooks(pageNum, limitNum);
        setNotebooks(data);
      } catch (e) {
        validate(e as Error, router);
      }
    };

    fetch();
  }, [pageNum, limitNum, setNotebooks, router]);

  return {
    notebooks,
  };
};

export { useNotebooksUser };
