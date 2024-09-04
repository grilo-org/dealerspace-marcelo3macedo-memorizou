import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import logo from "@/assets/images/logo.png";
import { useFooterNavigation } from "@/hooks/hero/footer";
export function FooterPrimary() {
  const t = useTranslations("footer");
  const { items } = useFooterNavigation();

  return (
    <footer className="bg-slate-600">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1">
          <div className="py-8">
            <div className="hidden text-teal-600 lg:block">
              <Image className="w-auto h-14" src={logo} alt="" />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-slate-100 font-bold">
                  {t("institutional.title")}
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {items.institutional.map((i) => (
                    <li key={i.id}>
                      <Link
                        href={i.link}
                        className="text-gray-100 transition hover:opacity-75"
                      >
                        {t(`institutional.${i.name}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-slate-100 font-bold">
                  {t("helpfulLinks.title")}
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {items.helpfulLinks.map((i) => (
                    <li key={i.id}>
                      <Link
                        href={i.link}
                        className="text-gray-100 transition hover:opacity-75"
                      >
                        {t(`helpfulLinks.${i.name}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-300 pt-4">
              <p className="text-xs text-slate-300 text-center">
                {t("copyright")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
