import { useTranslations } from "next-intl";

import { useHeroNavigation } from "@/hooks/hero/navigation";

export default function SamplesHero() {
  const t = useTranslations("hero.samples");
  const { items } = useHeroNavigation();

  return (
    <div>
      <h2 className="mt-10 w-full text-center text-2xl font-semibold text-slate-500 md:text-3xl">
        {t("title")}
      </h2>
      <p className="mt-4 text-gray-500 text-center">{t("description")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 mx-6">
        {items.map((i) => (
          <a
            key={i.id}
            href="#"
            className="relative block bg-white rounded-tr-3xl border border-gray-100"
          >
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="-ml-4 -mt-6 h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-200 object-cover"
            />

            <div className="p-4 text-center">
              <strong className="text-xl font-medium text-gray-700">
                {i.title}
              </strong>

              <p className="mt-2 text-pretty text-gray-700">{i.description}</p>

              <span className="mt-4 block rounded-md border border-slate-900 bg-slate-600 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:opacity-85">
                Ver mais
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
