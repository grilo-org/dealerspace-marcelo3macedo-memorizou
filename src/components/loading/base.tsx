import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export default function LoadingBase() {
  const t = useTranslations("loading");

  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <ArrowPathIcon className="size-16 animate-spin" />
      <p className="text-lg my-2">{t("message")}</p>
    </div>
  );
}
