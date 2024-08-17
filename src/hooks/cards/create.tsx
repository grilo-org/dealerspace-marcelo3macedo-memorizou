"use client";
import { FormikHelpers } from "formik";

import { useEditSection } from "../sections/edit";

import { create, update } from "@/api/cards";
import { Card, NewCard } from "@/interfaces/card";

const useCreateCard = () => {
  const { editing, setEditing } = useEditSection();
  const initialValues = {
    id: "",
    title: "",
    content: "",
    sectionId: "",
  };

  const onSubmit = async (
    values: NewCard,
    { setSubmitting, resetForm }: FormikHelpers<NewCard>,
  ) => {
    const data = values.id ? await update(values) : await create(values);

    if (!values.id) {
      editing.cards.push(data);
    } else {
      editing.cards = editing.cards.map((card: Card) =>
        card.id === values.id ? { ...card, ...data } : card,
      );
    }

    setEditing(editing);
    setSubmitting(false);
    resetForm({ values: initialValues });
  };

  return {
    initialValues,
    onSubmit,
  };
};

export { useCreateCard };
