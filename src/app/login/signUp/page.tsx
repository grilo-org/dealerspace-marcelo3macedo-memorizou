import Image from "next/image";
import { useTranslations } from "next-intl";

import background from "@/assets/images/background.jpeg";
import logo from "@/assets/images/logo.png";
import CreateUserForm from "@/components/forms/createUser";
import SubmitLoginForm from "@/components/forms/submitLogin";

export default function SignUpPage() {
  const t = useTranslations("signIn");

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

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              {t("title")}
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              {t("description")}
            </p>

            <CreateUserForm />
          </div>
        </main>
      </div>
    </section>
  );
}
