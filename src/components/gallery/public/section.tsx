import { useTranslations } from "next-intl";

import { Section } from "@/interfaces/section";

export default function SectionContent({
  section,
}: {
  readonly section: Section;
}) {
  const t = useTranslations("sections");

  return (
    <div className="p-4 border-b-slate-100 border-b-2 flex items-center justify-between">
      <div>
        <p className="text-slate-800">{section.title}</p>
        <p className="text-sm py-1 text-slate-800">
          {section._count?.cards} {t("availableCards")}
        </p>
      </div>
      <div className="flex"></div>
    </div>
  );
}
