import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SidebarGeneralHelper() {
  const t = useTranslations("header");

  return (
    <div className="relative select-none rounded-es-3xl rounded-br-3xl w-full px-6 py-4 bg-pink-300 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
      <div className="pt-4">
        <h3 className="font-bold text-xs uppercase">Institucional</h3>
        <div>
          <Link href="/institucional/sobre-nos">
            <h5 className="text-sm my-2 hover:cursor-pointer hover:opacity-80">
              {t("aboutUs")}
            </h5>
          </Link>
          <Link href="/institucional/contate-nos">
            <h5 className="text-sm my-2 hover:cursor-pointer hover:opacity-80">
              {t("contactUs")}
            </h5>
          </Link>
          <Link href="/institucional/politicas-privacidade">
            <h5 className="text-sm my-2 hover:cursor-pointer hover:opacity-80">
              {t("privacyPolicy")}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
