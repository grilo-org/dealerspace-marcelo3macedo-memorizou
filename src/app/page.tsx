"use client";
import { useRouter } from "next/navigation";

import MainTheme from "@/themes/main.theme";

export default function Home() {
  const router = useRouter();

  function goNotebooks() {
    router.push("/user/notebooks");
  }

  return (
    <MainTheme>
      <button
        onClick={goNotebooks}
        className="mt-8 px-14 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        Ir para meus cadernos
      </button>
    </MainTheme>
  );
}
