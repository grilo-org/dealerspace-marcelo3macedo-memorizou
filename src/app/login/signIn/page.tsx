"use client";
import { useTranslations } from "next-intl";

import SubmitLoginForm from "@/components/forms/submitLogin";
import { useLoginUser } from "@/hooks/users/login";
import LoginTheme from "@/themes/login.theme";

export default function SignInPage() {
  const t = useTranslations("signIn");
  const { goToSignUp } = useLoginUser();

  return (
    <LoginTheme>
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 leading-relaxed text-gray-500">{t("description")}</p>

      <SubmitLoginForm />

      <div className="flex items-end justify-end">
        <button
          onClick={goToSignUp}
          className="mt-4 leading-5 text-slate-700 transition-colors duration-300 transform rounded-md focus:outline-none hover:underline"
        >
          {t("notHaveAnAccount")}
        </button>
      </div>
    </LoginTheme>
  );
}
