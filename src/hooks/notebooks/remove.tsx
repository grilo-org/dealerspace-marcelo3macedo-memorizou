"use client";
import { useRouter } from "next/navigation";

import { useModalFeatures } from "../modals";

import { remove } from "@/api/notebooks";
import useNotebook from "@/store/useNotebook";

const useRemoveNotebook = () => {
  const router = useRouter();
  const { editing } = useNotebook((state: any) => ({
    editing: state.editing,
  }));
  const { setSelected } = useModalFeatures();

  const onRemove = async () => {
    const id = editing && editing.id;
    await remove(id);
    setSelected("");
    router.push(`/user/notebooks`);
  };

  return {
    onRemove,
  };
};

export { useRemoveNotebook };
