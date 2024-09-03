"use client";
import { useRouter } from "next/navigation";

import { clone } from "@/api/notebooks";
import { CloneNotebook } from "@/interfaces/notebook";

const useCloneNotebook = () => {
  const router = useRouter();
  const initialValues = {
    title: "",
    content: "",
    userId: "",
  };

  const onSubmit = async (values: CloneNotebook) => {
    const { id } = await clone(values);
    router.push(`/user/notebooks/index/${id}`);
  };

  return {
    initialValues,
    onSubmit,
  };
};

export { useCloneNotebook };
