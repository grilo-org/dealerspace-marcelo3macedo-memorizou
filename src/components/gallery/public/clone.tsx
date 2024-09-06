"use client";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import { useCloneNotebook } from "@/hooks/notebooks/clone";

export default function CloneAction({ id }: { readonly id: string }) {
  const t = useTranslations("sections");
  const { onSubmit } = useCloneNotebook();

  return (
    <button
      className="hover:opacity-80 hover:cursor-pointer overflow-hidden"
      onClick={() => {
        onSubmit({ id });
      }}
    >
      <div className="mx-4 px-8 py-2 flex items-center bg-gray-400 rounded-xl mt-8">
        <div>
          <PlusCircleIcon className="w-6 h-6 text-white" />
        </div>
        <div className="flex px-4">
          <p className="text-white font-bold text-sm">{t("clone")}</p>
        </div>
      </div>
    </button>
  );
}
