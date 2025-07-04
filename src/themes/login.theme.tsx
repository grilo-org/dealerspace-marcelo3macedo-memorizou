import Image from "next/image";

import { MainProps } from "./props/main";

import background from "@/assets/images/background.jpeg";
import logo from "@/assets/images/logo.png";
import NotificationsMain from "@/components/notifications/main";

function LoginTheme({ children }: Readonly<MainProps>) {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src={background}
            width={3000}
            height={2000}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Image className="w-auto h-14" src={logo} alt="" />

            {children}
          </div>
        </main>
      </div>
      <NotificationsMain />
    </section>
  );
}

export default LoginTheme;
