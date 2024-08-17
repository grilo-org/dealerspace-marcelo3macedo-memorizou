"use client";
import { useTranslations } from "next-intl";

import BaseModal from "../base";

import { useModalFeatures } from "@/hooks/modals";

export default function RemoveSectionModal() {
  const t = useTranslations("notebooks.modal.remove");
  const t_actions = useTranslations("notebooks.actions");
  const { selected, setSelected } = useModalFeatures();

  if (selected !== "remove-notebook") return <></>;

  const closeAction = () => {
    setSelected("");
  };

  return (
    <BaseModal closeAction={closeAction}>
      <div>
        <div className="text-center">
          <h3
            className="text-xl font-medium leading-6 text-gray-800 capitalize"
            id="modal-title"
          >
            {t("title")}
          </h3>
          <p className="mt-4 text-gray-600">{t("confirm")}</p>
        </div>
      </div>

      <div className="mt-8 sm:flex sm:items-center sm:justify-center">
        <button
          onClick={closeAction}
          className="w-full px-14 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2  hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
        >
          {t_actions("cancel")}
        </button>

        <button className="px-14 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          {t_actions("save")}
        </button>
      </div>
    </BaseModal>
  );
}
