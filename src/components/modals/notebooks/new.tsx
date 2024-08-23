"use client";
import { useTranslations } from "next-intl";

import BaseModal from "../base";

import CreateNotebookForm from "@/components/forms/createNotebook";
import { useModalFeatures } from "@/hooks/modals";

export default function NewNotebookModal() {
  const t = useTranslations("notebooks.modal.new");
  const { selected, setSelected } = useModalFeatures();

  if (selected !== "new-notebook") return <></>;

  const closeAction = () => {
    setSelected("");
  };

  return (
    <BaseModal closeAction={closeAction}>
      <div>
        <CreateNotebookForm />
      </div>
    </BaseModal>
  );
}
