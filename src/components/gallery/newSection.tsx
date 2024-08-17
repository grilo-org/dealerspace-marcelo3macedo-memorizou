import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import { useModalFeatures } from "@/hooks/modals";

export default function NewSectionContent() {
  const t = useTranslations("sections");
  const { setSelected } = useModalFeatures();

  const openModal = () => {
    setSelected("new-section");
  };

  return (
    <button
      className="hover:opacity-80 hover:cursor-pointer w-full"
      onClick={openModal}
    >
      <div className="p-4 border-b-slate-100 border-t-2 mt-2 flex items-center hover:bg-slate-50">
        <div>
          <PlusCircleIcon className="w-10 h-10 text-orange-300" />
        </div>
        <div className="flex px-4">
          <p className="text-slate-800">{t("addNew")}</p>
        </div>
      </div>
    </button>
  );
}
