"use client";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

import { useMessageNotification } from "../notification/message";

import { create } from "@/api/users";
import { NewUser } from "@/interfaces/user";
import { NOTIFICATION_ERROR } from "@/lib/constants/notification";

const useCreateUser = () => {
  const { alertHandler } = useMessageNotification();
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
    try {
      await create(values);
      router.push("/login/signIn");
      setSubmitting(false);
      resetForm();
    } catch (e: any) {
      alertHandler(NOTIFICATION_ERROR, e.message);
    }
  };

  return {
    initialValues,
    onSubmit,
  };
};

export { useCreateUser };
