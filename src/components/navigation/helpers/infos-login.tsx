import { useTranslations } from "next-intl";

import { useLoginUser } from "@/hooks/users/login";

export default function InfosLoginHelper() {
  const t = useTranslations("menu.actions");
  const { goToSignIn } = useLoginUser();

  return (
    <div className="mb-8 w-full text-center">
      <button
        onClick={goToSignIn}
        className="text-sm mt-8 px-14 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        {t("doLogin")}
      </button>
    </div>
  );
}
