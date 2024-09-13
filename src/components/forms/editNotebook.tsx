"use client";
import { Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { useModalFeatures } from "@/hooks/modals";
import { useEditNotebook } from "@/hooks/notebooks/edit";
import { useInfosUser } from "@/hooks/users/infos";
import { editNotebookSchema } from "@/schemas/notebooks";
import { validate } from "@/utils/formValidate";

export default function EditNotebookForm() {
  const t = useTranslations("forms.notebook");
  const t_actions = useTranslations("notebooks.actions");
  const { setSelected } = useModalFeatures();
  const { initialValues, onSubmit } = useEditNotebook();
  const { infos } = useInfosUser();

  if (infos && infos.id) {
    initialValues.userId = infos.id;
  }

  const closeAction = () => {
    setSelected("");
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={(values) => validate(values, editNotebookSchema)}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <div>
            <h4 className="text-gray-700 text-md">{t("title")}</h4>
            <Field
              type="text"
              name="title"
              placeholder={t("titlePlaceholder")}
              className="block w-full text-sm px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <h4 className="text-gray-700 text-md">{t("content")}</h4>
            <Field
              type="text"
              name="content"
              placeholder={t("contentPlaceholder")}
              className="block w-full text-sm px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="mt-10 sm:flex sm:items-center sm:justify-between">
          <div></div>
          <div className="sm:flex sm:items-center">
            <button
              onClick={closeAction}
              className="w-full px-14 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2  hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
            >
              {t_actions("cancel")}
            </button>

            <button
              type="submit"
              className="w-full px-14 py-2 mt-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              {t_actions("save")}
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
