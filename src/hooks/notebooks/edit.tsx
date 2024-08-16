"use client";

import { useEffect } from "react";

import { FormikHelpers } from "formik";

import { useModalFeatures } from "../modals";

import { update } from "@/api/notebooks";
import { EditNotebook } from "@/interfaces/notebook";
import useNotebook from "@/store/useNotebook";

const useEditNotebook = () => {
  const { setSelected } = useModalFeatures();
  const { editing, setEditing } = useNotebook((state: any) => ({
    editing: state.editing,
    setEditing: state.setEditing,
  }));

  const initialValues = {
    id: "",
    title: "",
    content: "",
  };

  if (editing) {
    initialValues.id = editing.id;
    initialValues.title = editing.title;
    initialValues.content = editing.content;
  }

  const onSubmit = async (
    values: EditNotebook,
    { setSubmitting, resetForm }: FormikHelpers<EditNotebook>,
  ) => {
    const newNotebook = await update(values);
    setEditing(newNotebook);

    setSubmitting(false);
    resetForm();
    setSelected("");
  };

  return {
    initialValues,
    editing,
    setEditing,
    onSubmit,
  };
};

export { useEditNotebook };
