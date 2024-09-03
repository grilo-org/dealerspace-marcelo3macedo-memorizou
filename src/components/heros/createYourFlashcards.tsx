import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import happyBoy from "@/assets/images/sessions/happyBoy.png";

export default function CreateYourFlashcardsHero() {
  const t = useTranslations("hero.createYourFlashcards");

  return (
    <section className="lg:py-4 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white lg:mx-0  py-4 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-2/3">
          <h2 className="text-2xl font-semibold text-slate-500 md:text-3xl">
            {t("title")}
          </h2>

          <p className="mt-4 text-gray-500 ">{t("description")}</p>

          <div className="inline-flex w-full mt-6">
            <Link
              href="/login/signIn"
              className="inline-flex text-center items-center justify-center px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              {t("actions.enter")}
            </Link>
            <Link
              href="/login/signUp"
              className="inline-flex text-center items-center justify-center mx-4 px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              {t("actions.signUp")}
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="h-64 bg-cover lg:h-full flex items-center justify-center lg:justify-end">
            <Image
              src={happyBoy.src}
              width={500}
              height={500}
              alt="Perfil"
              className="h-60 w-60 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
