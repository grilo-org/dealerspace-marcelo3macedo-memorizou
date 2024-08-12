import { MainProps } from "./props/main";

import SidebarNavigation from "@/components/navigation/sidebar";

function MainTheme({ children }: Readonly<MainProps>) {
  return (
    <div className="w-full bg-yellow-50">
      <div className="mx-auto flex">
        <SidebarNavigation />
        <main className="min-h-screen px-4">{children}</main>
      </div>
    </div>
  );
}

export default MainTheme;
