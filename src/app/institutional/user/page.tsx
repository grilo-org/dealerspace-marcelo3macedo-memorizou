"use client";
import { useTranslations } from "next-intl";

import MultilineText from "@/components/common/multilineText";
import Title from "@/components/common/title";
import UserInfoForm from "@/components/forms/userInfo";
import { useInfosUser } from "@/hooks/users/infos";
import MainTheme from "@/themes/main.theme";

export default function AboutUsPage() {
  const t = useTranslations("user");
  const { infos } = useInfosUser();

  return (
    <MainTheme>
      <div className="container my-4 md:my-8 mx-auto px-2">
        <Title>{t("title")}</Title>
        <MultilineText>{t("description")}</MultilineText>
        <UserInfoForm infos={infos} />
      </div>
    </MainTheme>
  );
}
