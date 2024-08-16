import { FolderIcon } from "@heroicons/react/24/solid";

import Actions from "./actions";

import { useEditNotebook } from "@/hooks/notebooks/edit";

export default function Header() {
  const { editing } = useEditNotebook();
  const { title } = editing || {};

  return (
    <div className="flex items-center py-6 px-4">
      <FolderIcon className="w-14 h-14 text-gray-800" />
      <div className="px-6">
        <h1 className="text-2xl mb-2 font-semibold text-gray-800 lg:text-3xl">
          {title}
        </h1>
        <Actions />
      </div>
    </div>
  );
}
