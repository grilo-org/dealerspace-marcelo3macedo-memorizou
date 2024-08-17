"use client";

import { remove } from "@/api/sections";
import { Section } from "@/interfaces/section";
import useNotebook from "@/store/useNotebook";

const useRemoveSection = () => {
  const { editing, setEditing } = useNotebook((state: any) => ({
    editing: state.editing,
    setEditing: state.setEditing,
  }));

  const removeAction = async (id: string) => {
    await remove(id);
    editing.sections = editing.sections.filter(
      (section: Section) => section.id !== id,
    );
    setEditing(editing);
  };

  return {
    removeAction,
  };
};

export { useRemoveSection };
