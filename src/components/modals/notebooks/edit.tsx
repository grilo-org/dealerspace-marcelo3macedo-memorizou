"use client";
import { useTranslations } from "next-intl";

import BaseModal from "../base";

import EditNotebookForm from "@/components/forms/editNotebook";
import { useModalFeatures } from "@/hooks/modals";

export default function EditNotebookModal() {
  const t = useTranslations("notebooks.modal.edit");
  const { selected, setSelected } = useModalFeatures();

  if (selected !== "edit-notebook") return <></>;

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
        </div>
        <EditNotebookForm />
      </div>
    </BaseModal>
  );
}
