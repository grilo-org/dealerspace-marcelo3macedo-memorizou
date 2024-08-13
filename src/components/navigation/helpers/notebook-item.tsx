import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { Notebook } from "@/interfaces/notebook";

export default function NotebookItem({ notebook }: { notebook: Notebook }) {
  return (
    <Link
      href={`/notebooks/${notebook.id}`}
      className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
    >
      <div className="flex items-center gap-x-2 ">
        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
        <span>{notebook.title}</span>
      </div>

      <ChevronRightIcon className="w-4 h-4 text-white" />
    </Link>
  );
}
