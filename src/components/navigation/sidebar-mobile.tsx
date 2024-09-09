"use client";
import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import InfosHelper from "./helpers/infos";
import ItemSidebar from "./helpers/item-sidebar";
import NavSidebar from "./helpers/nav-sidebar";
import NotebookSidebar from "./helpers/notebooks";

import logo from "@/assets/images/logo.png";
import { useHeaderNavigation } from "@/hooks/navigation/header";

export default function SidebarMobileNavigation() {
  const [visible, setVisible] = useState(false);
  const { items } = useHeaderNavigation();

  return (
    <div className="sm:hidden">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
        className="bg-gray-900 border-gray-700 w-full flex justify-between p-4"
      >
        <div />
        {visible ? (
          <XMarkIcon className="text-white w-10 h-10" />
        ) : (
          <Bars3Icon className="text-white w-10 h-10" />
        )}
      </button>
      {visible ? (
        <aside className="fixed z-20 sm:hidden flex-col w-full h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-gray-900 border-gray-700">
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
      ) : (
        <></>
      )}
    </div>
  );
}
