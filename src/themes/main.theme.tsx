import { MainProps } from "./props/main";

import { FooterPrimary } from "@/components/footer/primary";
import SidebarNavigation from "@/components/navigation/sidebar";
import SidebarMobileNavigation from "@/components/navigation/sidebar-mobile";

function MainTheme({ children }: Readonly<MainProps>) {
  return (
    <div className="w-full bg-yellow-50">
      <SidebarMobileNavigation />
      <div className="mx-auto flex md:overflow-hidden">
        <SidebarNavigation />
        <main className="min-h-screen w-full md:max-h-lvh overflow-y-scroll">
          <div className="min-h-lvh">{children}</div>
          <FooterPrimary />
        </main>
      </div>
    </div>
  );
}

export default MainTheme;
