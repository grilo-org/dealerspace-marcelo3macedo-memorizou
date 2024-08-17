import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import { useEditSection } from "@/hooks/sections/edit";
import { useRemoveSection } from "@/hooks/sections/remove";
import { Section } from "@/interfaces/section";

export default function SectionContent({
  section,
}: {
  readonly section: Section;
}) {
  const t = useTranslations("sections");
  const { editAction } = useEditSection();
  const { removeAction } = useRemoveSection();

  return (
    <div className="p-4 border-b-slate-100 border-b-2 flex items-center justify-between">
      <div>
        <p className="text-slate-800">{section.title}</p>
        <p className="text-sm py-1 text-slate-800">
          {section._count?.cards} {t("availableCards")}
        </p>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            removeAction(section.id);
          }}
        >
          <div className="px-2">
            <XMarkIcon className="w-6 h-6 text-slate-400" />
          </div>
        </button>
        <button
          onClick={() => {
            editAction(section.id);
          }}
        >
          <div className="px-2">
            <PencilIcon className="w-6 h-6 text-slate-400" />
          </div>
        </button>
      </div>
    </div>
  );
}
