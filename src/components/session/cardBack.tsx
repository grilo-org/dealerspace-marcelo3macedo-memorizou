"use client";
import { useTranslations } from "next-intl";

import OptionsAction from "./action/options";

import { Card } from "@/interfaces/card";

export default function CardBack({ card }: { card: Card }) {
  const t = useTranslations("session");

  return (
    <article className="p-2 md:p-8 flex items-center justify-center flex-col">
      <div className="bg-white rounded-lg py-4 w-full min-h-60 flex flex-col items-center justify-center">
        <h3 className="text-lg my-6 md:my-10 text-gray-500 italic text-center">
          {card.title}
        </h3>
        <h1 className="text-2xl md:text-4xl my-6 md:my-10 text-center">
          {card.content}
        </h1>
      </div>
      <OptionsAction />
      <p className="text-center text-xs md:text-sm text-gray-500">
        {t("next")}
      </p>
    </article>
  );
}
