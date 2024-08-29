"use client";
import { PlayCircleIcon, ShareIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import MoreActions from "./moreActions";

import NotebookModals from "@/components/modals/notebooks/main";
import { useActionsNotebook } from "@/hooks/notebooks/actions";

export default function Actions() {
  const t = useTranslations("notebooks.actions");
  const { studyAction } = useActionsNotebook();

  return (
    <div>
      <div className="flex items-center">
        <button
          className="hover:opacity-80 hover:cursor-pointer"
          onClick={studyAction}
        >
          <div className="flex items-center bg-indigo-400 rounded-xl px-4 my-2">
            <p className="px-16 py-2 text-white font-bold">{t("study")}</p>
            <PlayCircleIcon className="w-6 h-6 text-white" />
          </div>
        </button>
        <MoreActions />
      </div>
      <NotebookModals />
    </div>
  );
}
