"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { useCreateNotebook } from "@/hooks/notebooks/create";
import { useInfosUser } from "@/hooks/users/infos";
import { createNotebookSchema } from "@/schemas/notebooks";
import { validate } from "@/utils/formValidate";

export default function CreateNotebookForm() {
  const t = useTranslations("forms.notebook");
  const t_actions = useTranslations("forms.actions");
  const { initialValues, onSubmit } = useCreateNotebook();
  const { infos } = useInfosUser();

  if (infos && infos.id) {
    initialValues.userId = infos.id;
  }

  return (
    <section className="p-2">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        {t("header")}
      </h2>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validate={(values) => validate(values, createNotebookSchema)}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <Field type="hidden" name="userId" />
            <div>
              <h4 className="text-gray-700">{t("title")}</h4>
              <Field
                type="text"
                name="title"
                placeholder={t("titlePlaceholder")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-600 mt-2"
              />
            </div>

            <div>
              <h4 className="text-gray-700">{t("content")}</h4>
              <Field
                type="text"
                name="content"
                placeholder={t("contentPlaceholder")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-red-600 mt-2"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              type="submit"
            >
              {t_actions("save")}
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
