import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

import { useActionsNotebook } from "@/hooks/notebooks/actions";

export default function MoreActions() {
  const t = useTranslations("notebooks.actions");
  const { showMenu, setShowMenu, editAction, removeAction } =
    useActionsNotebook();

  return (
    <div className="relative inline-block ">
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="relative z-10 block p-2 text-gray-700 bg-slate-100 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none"
      >
        <EllipsisHorizontalIcon className="w-6 h-6 text-slate-800" />
      </button>

      {showMenu ? (
        <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl ">
          <button
            className="w-full block px-4 py-3 text-sm text-slate-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            onClick={editAction}
          >
            {t("edit")}
          </button>

          <button
            className="w-full block px-4 py-3 text-sm text-slate-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            onClick={removeAction}
          >
            {t("remove")}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
