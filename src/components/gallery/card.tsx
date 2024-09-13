import { XMarkIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { useCreateCard } from "@/hooks/cards/create";
import { useRemoveCard } from "@/hooks/cards/remove";
import { Card } from "@/interfaces/card";
import { createCardSchema } from "@/schemas/cards";
import { validate } from "@/utils/formValidate";

export default function CardContent({ card }: { readonly card: Card }) {
  const { initialValues, onSubmit } = useCreateCard();
  const { onDelete } = useRemoveCard();
  const t_cards = useTranslations("cards");

  if (card && card.id) {
    initialValues.id = card.id;
    initialValues.title = card.title;
    initialValues.content = card.content;
    initialValues.sectionId = card.sectionId;
  }

  return (
    <div className="flex items-center justify-between max-w-full">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validate={(values) => validate(values, createCardSchema)}
        onSubmit={onSubmit}
      >
        {({ submitForm }) => (
          <Form className="w-full">
            <Field type="hidden" name="sectionId" />
            <div className="bg-white md:flex items-start justify-between border-slate-100 rounded-lg border-2 my-2 w-full">
              <div className="w-full p-4">
                <p className="font-bold text-slate-500">{t_cards("front")}</p>
                <Field
                  as="textarea"
                  name="title"
                  rows="4"
                  className="block text-sm w-full py-2 px-2 mt-2 text-gray-700 border-slate-100 border-2"
                  onBlur={() => {
                    submitForm();
                  }}
                />
              </div>
              <div className="w-full p-4">
                <p className="font-bold text-slate-500">{t_cards("back")}</p>
                <Field
                  as="textarea"
                  name="content"
                  rows="4"
                  className="block text-sm w-full py-2 px-2 mt-2 text-gray-700 border-slate-100 border-2"
                  onBlur={() => {
                    submitForm();
                  }}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="w-14">
        <button
          className="w-full hover:opacity-80 hover:cursor-pointer my-2"
          onClick={() => {
            onDelete(card.id);
          }}
        >
          <div className="flex justify-center">
            <XMarkIcon className="w-6 h-6 text-slate-400" />
          </div>
        </button>
      </div>
    </div>
  );
}
