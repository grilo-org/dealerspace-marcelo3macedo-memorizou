"use client";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

import { useMessageNotification } from "../notification/message";

import { signIn } from "@/api/users";
import { User } from "@/interfaces/user";
import { NOTIFICATION_ERROR } from "@/lib/constants/notification";
import useUser from "@/store/useUser";

const useLoginUser = () => {
  const { alertHandler } = useMessageNotification();
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
    try {
      const { token } = await signIn(values);
      setToken(token);
      router.push("/");
      setSubmitting(false);
      resetForm();
    } catch (e: any) {
      alertHandler(NOTIFICATION_ERROR, e.message);
    }
  };

  const goToSignUp = () => {
    router.push("/login/signUp");
  };

  const goToSignIn = () => {
    router.push("/login/signIn");
  };

  return {
    initialValues,
    onSubmit,
    goToSignUp,
    goToSignIn,
  };
};

export { useLoginUser };
