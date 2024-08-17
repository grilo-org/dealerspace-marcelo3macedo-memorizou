"use client";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

import { useModalFeatures } from "../modals";

import { create } from "@/api/sections";
import { NewSection } from "@/interfaces/section";

const useCreateSection = () => {
  const { setSelected } = useModalFeatures();
  const router = useRouter();
  const initialValues = {
    notebookId: "",
    title: "",
    description: "",
  };

  const onSubmit = async (
    values: NewSection,
    { setSubmitting, resetForm }: FormikHelpers<NewSection>,
  ) => {
    const { id } = await create(values);
    router.push(`/sections/index/${id}`);
    setSelected("");
    setSubmitting(false);
    resetForm();
  };

  return {
    initialValues,
    setSelected,
    onSubmit,
  };
};

export { useCreateSection };
