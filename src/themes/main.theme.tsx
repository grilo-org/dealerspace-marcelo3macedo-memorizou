import { MainProps } from "./props/main";

import SidebarNavigation from "@/components/navigation/sidebar";
import SidebarMobileNavigation from "@/components/navigation/sidebar-mobile";

function MainTheme({ children }: Readonly<MainProps>) {
  return (
    <div className="w-full bg-yellow-50">
      <SidebarMobileNavigation />
      <div className="mx-auto flex">
        <SidebarNavigation />
        <main className="min-h-screen px-4 w-full">{children}</main>
      </div>
    </div>
  );
}

export default MainTheme;
