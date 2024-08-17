import { BackwardIcon } from "@heroicons/react/24/solid";

import { useEditSection } from "@/hooks/sections/edit";

export default function BackAction() {
  const { backAction } = useEditSection();

  return (
    <button
      className="hover:opacity-80 hover:cursor-pointer"
      onClick={() => {
        backAction();
      }}
    >
      <div className="flex items-center bg-slate-400 rounded-xl px-4 my-4">
        <BackwardIcon className="w-6 h-6 text-white" />
        <p className="px-2 py-2 text-sm text-white font-bold">
          Voltar para seções
        </p>
      </div>
    </button>
  );
}
