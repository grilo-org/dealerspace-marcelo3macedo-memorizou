"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { useLoginUser } from "@/hooks/users/login";
import { signInUserComponentSchema } from "@/schemas/users";
import { validate } from "@/utils/formValidate";

export default function SubmitLoginForm() {
  const t = useTranslations("forms.signIn");
  const t_actions = useTranslations("forms.actions");
  const { initialValues, onSubmit } = useLoginUser();

  const schema = signInUserComponentSchema(t);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={(values) => validate(values, schema)}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <div>
            <h4 className="text-gray-700">{t("email")}</h4>
            <Field
              type="text"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 mt-2"
            />
          </div>

          <div>
            <h4 className="text-gray-700">{t("password")}</h4>
            <Field
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600 mt-2"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-24 py-3 my-4 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring active:text-blue-500"
            type="submit"
          >
            {t_actions("login")}
          </button>
        </div>
      </Form>
    </Formik>
  );
}
