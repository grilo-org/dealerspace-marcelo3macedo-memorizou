"use client";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import { Card } from "@/interfaces/card";

export default function CardFront({ card }: { card: Card }) {
  const t = useTranslations("session.active");

  return (
    <article className="p-8 flex items-center justify-center flex-col hover:opacity-80 hover:cursor-pointer">
      <div className="bg-white rounded-lg py-4 w-full min-h-60 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl text-center">{card.title}</h1>
      </div>
      <div>
        <button className="flex items-center justify-center my-4 mx-auto">
          <ArrowPathRoundedSquareIcon className="size-8 text-gray-500" />
          <p className="text-center text-sm md:text-md italic text-gray-500 px-2">
            {t("action.reveal")}
          </p>
        </button>
        <p className="text-center text-xs md:text-sm text-gray-500">
          {t("tip")}
        </p>
      </div>
    </article>
  );
}
