import { useTranslations } from "next-intl";

import NewSectionContent from "./newSection";
import SectionContent from "./section";
import SectionsModals from "../modals/sections/main";

import { Section } from "@/interfaces/section";

export default function SectionsGallery({ sections }: { sections: any }) {
  const t = useTranslations("sections");

  if (!sections) return <></>;

  return (
    <div>
      <div className="bg-slate-300 p-4 rounded-t-lg border-b-slate-400 border-2">
        <p className="text-slate-800 font-bold">
          {t("title")} ({sections.length})
        </p>
      </div>
      <div>
        <div className="max-h-96 overflow-y-scroll">
          {sections.map((s: Section) => (
            <SectionContent key={s.id} section={s} />
          ))}
        </div>
        <NewSectionContent />
      </div>
      <SectionsModals />
    </div>
  );
}
