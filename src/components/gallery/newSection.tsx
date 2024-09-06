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
      className="hover:opacity-80 hover:cursor-pointer overflow-hidden"
      onClick={openModal}
    >
      <div className="px-8 py-2 flex items-center bg-gray-400 rounded-xl mt-8">
        <div>
          <PlusCircleIcon className="w-6 h-6 text-white" />
        </div>
        <div className="flex px-4">
          <p className="text-white font-bold text-sm">{t("addNew")}</p>
        </div>
      </div>
    </button>
  );
}
