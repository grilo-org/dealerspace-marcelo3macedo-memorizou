import HeaderNavigation from "@/components/navigation/header";
import { MainProps } from "./props/main";
import FooterNavigation from "@/components/navigation/footer";

function MainTheme({ children }: Readonly<MainProps>) {
  return (
    <div className="w-full bg-yellow-50">
      <div className="mx-auto">
        <HeaderNavigation />
        <main className="min-h-screen">{children}</main>
        <FooterNavigation />
      </div>
    </div>
  );
}

export default MainTheme;
