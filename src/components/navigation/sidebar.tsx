import Image from "next/image";
import Link from "next/link";

import InfosHelper from "./helpers/infos";
import ItemSidebar from "./helpers/item-sidebar";
import NavSidebar from "./helpers/nav-sidebar";
import NotebookSidebar from "./helpers/notebooks";

import logo from "@/assets/images/logo.png";
import { useHeaderNavigation } from "@/hooks/navigation/header";

export default function SidebarNavigation() {
  const { items } = useHeaderNavigation();

  return (
    <aside className="hidden sm:flex flex-col w-80 h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-gray-900 border-gray-700">
      <Link href="/">
        <Image className="w-auto h-14" src={logo} alt="" />
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <div>
          <InfosHelper />
          <NavSidebar items={items} />
        </div>
        <NotebookSidebar />
      </div>
      <ItemSidebar />
    </aside>
  );
}
