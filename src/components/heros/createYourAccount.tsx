import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CreateYourAccount() {
  const t = useTranslations("hero.createYourAccount");

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 my-8 xl:gap-8 md:grid-cols-2">
          <Link href="/login/signUp">
            <div className="p-8 space-y-3 border-2 bg-white border-slate-100 rounded-xl hover:cursor-pointer hover:opacity-80">
              <span className="inline-block text-slate-500 ">
                <UserPlusIcon className="w-10 h-10" />
              </span>

              <h1 className="text-lg font-semibold text-gray-700 capitalize">
                {t("actions.signUp")}
              </h1>
            </div>
          </Link>

          <Link href="/login/signIn">
            <div className="p-8 space-y-3 border-2 bg-white border-slate-100 rounded-xl hover:cursor-pointer hover:opacity-80">
              <span className="inline-block text-slate-500">
                <UserIcon className="w-10 h-10" />
              </span>

              <h1 className="text-lg font-semibold text-gray-700 capitalize">
                {t("actions.alreadyHaveAccount")}
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
