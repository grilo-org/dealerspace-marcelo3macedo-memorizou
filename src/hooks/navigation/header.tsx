import { FolderPlusIcon, HomeIcon, PhotoIcon } from "@heroicons/react/24/solid";

import { ItemSidebarProps } from "@/components/navigation/helpers/props/item";
import { Notebook } from "@/interfaces/notebook";

const useHeaderNavigation = () => {
  const items = [
    {
      Icon: HomeIcon,
      label: "Início",
      link: "/",
    },
    {
      Icon: FolderPlusIcon,
      label: "Meus cadernos",
      link: "/user/notebooks",
    },
    {
      Icon: PhotoIcon,
      label: "Galeria",
      link: "/notebooks/list",
    },
  ] as ItemSidebarProps[];
  const notebooks = [
    {
      id: "1",
      title: "test",
      content: "teste",
    },
    {
      id: "2",
      title: "test",
      content: "teste",
    },
    {
      id: "3",
      title: "test",
      content: "teste",
    },
  ] as Notebook[];

  return {
    notebooks,
    items,
  };
};

export { useHeaderNavigation };
