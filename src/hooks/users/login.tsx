"use client";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

import { signIn } from "@/api/users";
import { User } from "@/interfaces/user";
import useUser from "@/store/useUser";

const useLoginUser = () => {
  const { setToken } = useUser((state: any) => ({
    setToken: state.setToken,
  }));
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: User,
    { setSubmitting, resetForm }: FormikHelpers<User>,
  ) => {
    const { token } = await signIn(values);
    setToken(token);
    router.push("/");
    setSubmitting(false);
    resetForm();
  };

  return {
    initialValues,
    onSubmit,
  };
};

export { useLoginUser };
