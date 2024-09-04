import { MainProps } from "./props/main";

import SidebarNavigation from "@/components/navigation/sidebar";
import SidebarMobileNavigation from "@/components/navigation/sidebar-mobile";

function MainTheme({ children }: Readonly<MainProps>) {
  return (
    <div className="w-full bg-yellow-50">
      <SidebarMobileNavigation />
      <div className="mx-auto flex overflow-hidden">
        <SidebarNavigation />
        <main className="min-h-screen w-full max-h-lvh overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainTheme;
