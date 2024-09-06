import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useTranslations } from "next-intl";

import MainTheme from "@/themes/main.theme";

export default function NotFoundMain() {
  const t = useTranslations("notFound");

  return (
    <MainTheme>
      <section className="bg-white">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50">
              <ExclamationCircleIcon className="w-8 h-8 text-gray-900" />
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-gray-500">{t("description")}</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Link
                href={"/"}
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-900 rounded-lg shrink-0 sm:w-auto hover:bg-gray-900 "
              >
                {t("actions.goHome")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainTheme>
  );
}
