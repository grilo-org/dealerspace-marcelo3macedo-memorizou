import Link from "next/link";
import { useTranslations } from "next-intl";

import { Notebook } from "@/interfaces/notebook";
import { getDistanceToDate } from "@/utils/dateParser";

export default function NotebookContent({
  notebook,
  isPublic,
}: {
  readonly notebook: Notebook;
  readonly isPublic: Boolean;
}) {
  const t = useTranslations("notebooks");
  const url = isPublic
    ? `/notebooks/index/${notebook.id}`
    : `/user/notebooks/index/${notebook.id}`;

  return (
    <Link href={url}>
      <div className="w-full px-8 py-4 bg-white rounded-lg shadow-md">
        <p className="text-xl font-bold text-gray-700 hover:text-gray-600">
          {notebook.title}
        </p>
        <p className="mt-2 text-gray-600">{notebook.content}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-light text-gray-600">
            {t("createdWhen")} {getDistanceToDate(notebook.createdAt)}
          </span>
          <span className="text-sm font-light text-indigo-600">
            {notebook.subtheme &&
              notebook.subtheme.theme &&
              notebook.subtheme.theme.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
