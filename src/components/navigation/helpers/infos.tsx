"use client";
import { BoltIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslations } from "next-intl";

import InfosDetailsHelper from "./infos-details";
import InfosLoginHelper from "./infos-login";

import dog from "@/assets/images/profiles/dog.jpg";
import { useInfosUser } from "@/hooks/users/infos";

export default function InfosHelper() {
  const t = useTranslations("header");
  const { infos } = useInfosUser();

  if (!infos) {
    return <InfosLoginHelper />;
  }

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
          <h2 className="text-md font-bold text-white">{infos?.name}</h2>

          <div className="flex items-center">
            <BoltIcon className="w-4 h-4 text-yellow-100" />
            <h2 className="text-sm mx-1 text-white">
              {infos?.details?.points} {t("points")}
            </h2>
          </div>
        </div>
      </button>
      <InfosDetailsHelper details={infos?.details} />
    </div>
  );
}
