import { BoltIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";

import dog from "@/assets/images/profiles/dog.jpg";

export default function InfosHelper() {
  const t = useTranslations("header");

  return (
    <div>
      <button className="flex items-center select-none hover:opacity-90 hover:cursor-pointer mt-2 mb-6">
        <div>
          <div className="rounded-full border-slate-400 border-2">
            <Image
              src={dog.src}
              width={80}
              height={80}
              alt="Perfil"
              className="h-14 w-14 rounded-full"
            />
          </div>
        </div>
        <div className="px-2 text-left">
          <h4 className="text-xs text-white">{t("hello")},</h4>
          <h2 className="text-md font-bold text-white">{"name"}</h2>

          <div className="flex items-center">
            <BoltIcon className="w-4 h-4 text-yellow-100" />
            <h2 className="text-sm mx-1 text-white">
              {"points"} {t("points")}
            </h2>
          </div>
        </div>
      </button>
      <div className="flex justify-around py-2 mb-8">
        <div>
          <h4 className="text-xs text-white">{t("menu.daysStrike")}</h4>
          <h4 className="mt-2 text-2xl text-white">0</h4>
        </div>
        <div>
          <h4 className="text-xs text-white">{t("menu.studies")}</h4>
          <h4 className="mt-2 text-2xl text-white">0</h4>
        </div>
        <div>
          <h4 className="text-xs text-white">{t("menu.cardsViewed")}</h4>
          <h4 className="mt-2 text-2xl text-white">0</h4>
        </div>
      </div>
    </div>
  );
}
