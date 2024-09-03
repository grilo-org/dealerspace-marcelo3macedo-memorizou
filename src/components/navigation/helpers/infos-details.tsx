"use client";
import { useTranslations } from "next-intl";

export default function InfosDetailsHelper({ details }: { details: any }) {
  const t = useTranslations("header");

  if (!details) return <></>;

  return (
    <div>
      <div className="flex justify-around py-2 mb-8">
        <div>
          <h4 className="text-xs text-white">{t("menu.daysStrike")}</h4>
          <h4 className="mt-2 text-2xl text-white">{details.daysStrike}</h4>
        </div>
        <div>
          <h4 className="text-xs text-white">{t("menu.studies")}</h4>
          <h4 className="mt-2 text-2xl text-white">
            {details.notebookStudied}
          </h4>
        </div>
        <div>
          <h4 className="text-xs text-white">{t("menu.cardsViewed")}</h4>
          <h4 className="mt-2 text-2xl text-white">{details.cardsViewed}</h4>
        </div>
      </div>
    </div>
  );
}
