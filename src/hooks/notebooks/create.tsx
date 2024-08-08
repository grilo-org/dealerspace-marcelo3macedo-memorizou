"use client";
import { create } from "@/api/notebooks";
import { NewNotebook } from "@/interfaces/notebook";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

const useCreateNotebook = () => {
  const router = useRouter();
  const initialValues = {
    title: "",
    content: "",
  };

  const onSubmit = async (
    values: NewNotebook,
    { setSubmitting, resetForm }: FormikHelpers<NewNotebook>,
  ) => {
    const { id } = await create(values);
    router.push(`/notebooks/edit/${id}`);
    setSubmitting(false);
    resetForm();
  };

  return {
    initialValues,
    onSubmit,
  };
};

export { useCreateNotebook };
