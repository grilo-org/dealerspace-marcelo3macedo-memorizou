import { useTranslations } from "next-intl";

import NewSectionContent from "./newSection";
import SectionContent from "./section";
import SectionsModals from "../modals/sections/main";

import { Section } from "@/interfaces/section";

export default function SectionsGallery({ sections }: { sections: any }) {
  const t = useTranslations("sections");

  if (!sections) return <></>;

  return (
    <div className="p-4">
      {sections.length > 0 ? (
        <div className="bg-slate-500 p-4 rounded-t-lg">
          <p className="text-white font-bold">
            {t("title")} ({sections.length})
          </p>
        </div>
      ) : (
        <></>
      )}
      <div>
        <div className="max-h-96 md:overflow-y-scroll bg-white border-slate-100 border-2 rounded-b-xl">
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
