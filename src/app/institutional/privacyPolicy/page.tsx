import { useTranslations } from "next-intl";

import BreadcrumbComponent from "@/components/common/breadcrumb";
import MultilineText from "@/components/common/multilineText";
import Title from "@/components/common/title";
import MainTheme from "@/themes/main.theme";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacyPolicy");

  return (
    <MainTheme>
      <BreadcrumbComponent pageName={t("title")} />
      <div className="container my-4 md:my-8 mx-auto px-4">
        <Title>{t("title")}</Title>
        <MultilineText>{t("description")}</MultilineText>
      </div>
    </MainTheme>
  );
}
