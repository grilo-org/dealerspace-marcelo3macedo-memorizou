"use client";
import { useTranslations } from "next-intl";

import BaseModal from "../base";

import CreateSectionForm from "@/components/forms/createSection";
import { useModalFeatures } from "@/hooks/modals";

export default function NewSectionModal() {
  const t = useTranslations("sections.modal.new");
  const t_actions = useTranslations("notebooks.actions");
  const { selected, setSelected } = useModalFeatures();

  if (selected !== "new-section") return <></>;

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
        <CreateSectionForm />
      </div>
    </BaseModal>
  );
}
