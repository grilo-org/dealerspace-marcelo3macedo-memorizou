import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import Item from "./item";

export default function ItemSidebar() {
  const t = useTranslations("header.menu");

  return (
    <div className="mt-8">
      <Item Icon={Cog6ToothIcon} label={t("settings")} link="/configs" />
    </div>
  );
}
