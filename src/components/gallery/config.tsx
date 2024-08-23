import Link from "next/link";
import { useTranslations } from "next-intl";

import { ConfigSidebarProps } from "../navigation/helpers/props/config";

export default function ConfigContent({
  label,
  description,
  Icon,
  link,
}: ConfigSidebarProps) {
  const t = useTranslations("configs");

  return (
    <Link
      key={label}
      className="block select-none rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
      href={link}
    >
      <span className="inline-block rounded-lg bg-gray-50 p-3">
        <Icon className="w-4 h-4 text-gray-600" />
      </span>

      <h2 className="mt-2 font-bold">{t(label)}</h2>

      <p className="text-sm sm:mt-1 sm:text-gray-600">{t(description)}</p>
    </Link>
  );
}
