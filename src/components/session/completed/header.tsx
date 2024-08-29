import Image from "next/image";
import { useTranslations } from "next-intl";

import congrats from "@/assets/images/sessions/happyBoy.png";

export default function CompletedHeader() {
  const t = useTranslations("session.completed");

  return (
    <div className="p-8">
      <Image
        src={congrats.src}
        width={250}
        height={200}
        alt=""
        className="mx-auto py-4"
      />
      <h2 className="font-bold text-2xl">{t("congrats")}</h2>
    </div>
  );
}
