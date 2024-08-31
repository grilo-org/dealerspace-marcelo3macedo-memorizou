"use client";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import { useMessageNotification } from "@/hooks/notification/message";
import { NOTIFICATION_ERROR } from "@/lib/constants/notification";

export default function ErrorNotification() {
  const t = useTranslations("notification.type");
  const { type, message } = useMessageNotification();

  if (type !== NOTIFICATION_ERROR) return <></>;

  return (
    <div className="fixed bottom-5 right-5 flex w-full max-w-sm overflow-hidden bg-slate-100 rounded-lg shadow-md">
      <div className="flex items-center justify-center w-12 bg-red-500">
        <ExclamationCircleIcon className="w-6 h-6 text-white fill-current" />
      </div>

      <div className="px-4 py-4 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-red-500">{t("error")}</span>
          <p className="text-sm text-gray-600">{t(message)}</p>
        </div>
      </div>
    </div>
  );
}
