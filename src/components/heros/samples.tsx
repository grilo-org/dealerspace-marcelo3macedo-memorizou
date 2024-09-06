import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { useHeroNavigation } from "@/hooks/hero/navigation";

export default function SamplesHero() {
  const t = useTranslations("hero.samples");
  const { items } = useHeroNavigation();

  return (
    <div>
      <h2 className="mt-10 w-full text-center text-2xl font-semibold text-slate-900 md:text-3xl">
        {t("title")}
      </h2>
      <p className="mt-4 text-slate-500 text-center">{t("description")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 mx-6">
        {items.map((i) => (
          <Link key={i.id} href={`/notebooks/byName/${i.title}`}>
            <div>
              <Image
                src={i.imageUrl}
                alt=""
                width={400}
                height={500}
                className="-ml-4 -mt-6 h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-200 object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full text-center">
        <div className="w-52 mx-auto py-4">
          <Link href={"/notebooks/list"}>
            <span className="w-52 mt-4 block rounded-md border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:opacity-85">
              {t("seeMore")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
