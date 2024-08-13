import { use } from "react";

import {
  FolderIcon,
  PencilIcon,
  PlayCircleIcon,
  PlayIcon,
  PlusCircleIcon,
  ShareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import { index } from "@/api/notebooks";
import Header from "@/components/notebook/header/main";
import { NotebookIndexProps } from "@/interfaces/notebook";
import MainTheme from "@/themes/main.theme";

export default function IndexNotebookPage({
  params,
}: Readonly<NotebookIndexProps>) {
  const { id } = params || {};
  const { title, content } = use(index(id));

  return (
    <MainTheme>
      <Header title={title} />

      <div>
        <div className="bg-slate-300 p-4 rounded-t-lg border-b-slate-400 border-2">
          <p className="text-slate-800 font-bold">Seções (2)</p>
        </div>
        <div>
          <div className="p-4 border-b-slate-100 border-b-2 flex items-center justify-between">
            <div>
              <p className="text-slate-800">Nome da seção</p>
              <p className="text-sm py-1 text-slate-800">
                10 cartões disponíveis
              </p>
            </div>
            <div className="flex">
              <div className="px-2">
                <XMarkIcon className="w-6 h-6 text-slate-400" />
              </div>
              <div className="px-2">
                <PencilIcon className="w-6 h-6 text-slate-400" />
              </div>
              <div className="px-2">
                <PlayCircleIcon className="w-6 h-6 text-slate-400" />
              </div>
            </div>
          </div>
          <div className="p-4 border-b-slate-100 border-b-2 flex items-center">
            <div>
              <PlusCircleIcon className="w-10 h-10 text-slate-400" />
            </div>
            <div className="flex px-4">
              <p className="text-slate-800">Adicionar nova seção</p>
            </div>
          </div>
        </div>
      </div>
    </MainTheme>
  );
}
