"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { NotebookResponse } from "@/interfaces/notebook";

export default function FilterGallery({
  data,
  themeSelected,
}: {
  readonly data: NotebookResponse;
  readonly themeSelected: string;
}) {
  const [theme, setTheme] = useState(themeSelected);
  const router = useRouter();
  const t = useTranslations("notebooks");
  if (!data || !data.themes) return <></>;

  const handleSelectChange = (e: any) => {
    setTheme(e.target.value);
  };

  const handleButtonClick = () => {
    router.push("/notebooks/list?theme=" + theme);
  };

  return (
    <div className="bg-white mx-4 rounded-lg p-4 flex items-end">
      <div>
        <label className="block text-sm font-medium text-gray-900">
          {t("themes")}
        </label>

        <select
          name="theme"
          id="theme"
          value={theme}
          onChange={handleSelectChange}
          className="mt-1.5 p-2 w-64 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="">{t("actions.select")}</option>
          {data.themes.map((t, i) => (
            <option key={i} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-4">
        <button
          onClick={handleButtonClick}
          className="inline-flex text-center items-center justify-center px-6 py-2 text-sm text-white duration-300 bg-gray-900 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
        >
          {t("actions.filter")}
        </button>
      </div>
    </div>
  );
}
