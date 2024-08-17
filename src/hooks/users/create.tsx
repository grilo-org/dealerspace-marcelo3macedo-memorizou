"use client";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

import { create, signIn } from "@/api/users";
import { NewUser, User } from "@/interfaces/user";

const useCreateUser = () => {
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: NewUser,
    { setSubmitting, resetForm }: FormikHelpers<NewUser>,
  ) => {
    await create(values);
    router.push("/login/signIn");
    setSubmitting(false);
    resetForm();
  };

  return {
    initialValues,
    onSubmit,
  };
};

export { useCreateUser };
