"use client";
import { useTranslations } from "next-intl";

import CreateUserForm from "@/components/forms/createUser";
import { useLoginUser } from "@/hooks/users/login";
import LoginTheme from "@/themes/login.theme";

export default function SignUpPage() {
  const t = useTranslations("signIn");
  const { goToSignIn } = useLoginUser();

  return (
    <LoginTheme>
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        {t("title")}
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">{t("description")}</p>

      <CreateUserForm />

      <div className="flex items-end justify-end">
        <button
          onClick={goToSignIn}
          className="mt-4 leading-5 text-slate-700 transition-colors duration-300 transform rounded-md focus:outline-none hover:underline"
        >
          {t("alreadyHaveAnAccount")}
        </button>
      </div>
    </LoginTheme>
  );
}
