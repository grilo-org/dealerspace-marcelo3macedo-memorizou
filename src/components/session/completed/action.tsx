"use client";
import { useTranslations } from "next-intl";

import { useCompletedSession } from "@/hooks/sessions/completed";

export default function CompletedAction() {
  const t = useTranslations("session.completed.action");
  const { backHome } = useCompletedSession();

  return (
    <div className="p-8">
      <button
        onClick={backHome}
        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        {t("backHome")}
      </button>
    </div>
  );
}
