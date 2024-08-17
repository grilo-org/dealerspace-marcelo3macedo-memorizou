"use client";

import { useRouter } from "next/navigation";

import useSection from "@/store/useSection";

const useEditSection = () => {
  const router = useRouter();
  const { editing, setEditing } = useSection((state: any) => ({
    editing: state.editing,
    setEditing: state.setEditing,
  }));

  const editAction = async (id: string) => {
    router.push(`/sections/index/${id}`);
  };

  const backAction = async () => {
    router.push(`/notebooks/index/${editing.notebookId}`);
  };

  return {
    backAction,
    editAction,
    editing,
    setEditing,
  };
};

export { useEditSection };
