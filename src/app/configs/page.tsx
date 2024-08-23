import { useTranslations } from "next-intl";

import MultilineText from "@/components/common/multilineText";
import Title from "@/components/common/title";
import ConfigContent from "@/components/gallery/config";
import { useConfigsNavigation } from "@/hooks/navigation/configs";
import MainTheme from "@/themes/main.theme";

export default function ConfigsPage() {
  const t = useTranslations("configs");
  const { items } = useConfigsNavigation();

  return (
    <MainTheme>
      <div className="container my-4 md:my-8 mx-auto">
        <Title>{t("title")}</Title>
        <MultilineText>{t("description")}</MultilineText>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          {items.map((i) => (
            <ConfigContent
              key={i.label}
              Icon={i.Icon}
              description={i.description}
              label={i.label}
              link={i.link}
            />
          ))}
        </div>
      </div>
    </MainTheme>
  );
}
