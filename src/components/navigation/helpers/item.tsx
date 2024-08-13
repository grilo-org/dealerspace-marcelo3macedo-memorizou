import Link from "next/link";

import { ItemSidebarProps } from "./props/item";

export default function Item({ Icon, label, link }: ItemSidebarProps) {
  return (
    <Link
      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
      href={link}
    >
      <Icon className="w-4 h-4 text-white" />
      <span className="mx-2 text-sm font-medium">{label}</span>
    </Link>
  );
}
