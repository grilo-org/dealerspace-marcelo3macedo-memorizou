"use client";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

import NotebookItem from "./notebook-item";

import { useInfosUser } from "@/hooks/users/infos";
import { Notebook } from "@/interfaces/notebook";

export default function NotebookSidebar() {
  const t = useTranslations("header.menu");
  const { infos } = useInfosUser();
  const { notebooks } = infos || {};

  if (!notebooks) return <></>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-800 dark:text-white">
          {t("recents")}
        </h2>

        <button className="hover:opacity-80 hover:cursor-pointer">
          <PlusCircleIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      <nav className="mt-4 -mx-3 space-y-3 ">
        {notebooks.map((n: Notebook) => (
          <NotebookItem key={n.id} notebook={n} />
        ))}
      </nav>
    </div>
  );
}
