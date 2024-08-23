import Link from "next/link";
import { useTranslations } from "next-intl";

import { getDistanceToDate } from "@/utils/dateParser";

export default function UserInfoForm({ infos }: { infos: any }) {
  const t = useTranslations("forms.userInfo");
  const t_actions = useTranslations("forms.actions");
  if (!infos) return <></>;

  return (
    <div className="grid grid-cols-1 gap-6 mt-8 max-w-2xl">
      <div>
        <h4 className="text-gray-700">{t("name")}</h4>
        <input
          type="text"
          name="name"
          value={infos.name}
          placeholder={t("namePlaceholder")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <h4 className="text-gray-700">{t("email")}</h4>
        <input
          type="text"
          name="email"
          value={infos.email}
          placeholder={t("emailPlaceholder")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <h4 className="text-gray-700">{t("createdAt")}</h4>
        <input
          type="text"
          name="title"
          value={getDistanceToDate(infos.createdAt)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <Link
          href={"/login/signIn"}
          className="inline-block shrink-0 rounded-md border text-md border-blue-600 bg-blue-600 px-20 py-3 font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          {t_actions("exit")}
        </Link>
      </div>
    </div>
  );
}
