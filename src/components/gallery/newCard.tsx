"use client";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { useCreateCard } from "@/hooks/cards/create";
import { createCardSchema } from "@/schemas/cards";
import { validate } from "@/utils/formValidate";

export default function NewCardContent({ sectionId }: { sectionId: string }) {
  const t = useTranslations("forms.actions");
  const t_cards = useTranslations("cards");
  const { initialValues, onSubmit } = useCreateCard();

  initialValues.sectionId = sectionId;

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={(values) => validate(values, createCardSchema)}
      onSubmit={onSubmit}
    >
      <Form>
        <Field type="hidden" name="sectionId" />
        <div className="flex items-center justify-between max-w-full">
          <div className="md:flex items-start justify-between border-slate-100 rounded-lg border-2 my-2 w-full">
            <div className="w-full p-4">
              <p className="font-bold text-slate-300">{t_cards("front")}</p>
              <Field
                as="textarea"
                name="title"
                rows="4"
                className="block w-full py-2 px-2 mt-2 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="w-full p-4">
              <p className="font-bold text-slate-300">{t_cards("back")}</p>
              <Field
                as="textarea"
                name="content"
                rows="4"
                className="block w-full py-2 px-2 mt-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-32">
            <button className="w-full hover:opacity-80 hover:cursor-pointer my-2  focus:outline-none focus:bg-slate-50 focus:ring-2 rounded-md">
              <div className="flex justify-center items-center flex-col">
                <PlusCircleIcon className="w-10 h-10 text-orange-400" />
                <p>{t("add")}</p>
              </div>
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
