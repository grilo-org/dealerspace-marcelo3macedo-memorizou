"use client";

import { useEditSection } from "../sections/edit";

import { remove } from "@/api/cards";
import { Card } from "@/interfaces/card";

const useRemoveCard = () => {
  const { editing, setEditing } = useEditSection();

  const onDelete = (id: string) => {
    remove(id);
    editing.cards = editing.cards.filter((card: Card) => card.id !== id);
    setEditing(editing);
  };

  return {
    onDelete,
  };
};

export { useRemoveCard };
