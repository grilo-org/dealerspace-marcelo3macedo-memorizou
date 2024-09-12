import { useTranslations } from "next-intl";

import CardContent from "./card";
import NewCardContent from "./newCard";
import SectionsModals from "../modals/sections/main";

import { useEditSection } from "@/hooks/sections/edit";
import { Card } from "@/interfaces/card";

export default function CardsGallery() {
  const t = useTranslations("cards");
  const { editing } = useEditSection();

  if (!editing.cards) return <></>;

  return (
    <div>
      <div className="bg-slate-300 p-4 rounded-t-lg border-b-slate-400 border-2">
        <p className="text-slate-800 font-bold">
          {t("section")}: {editing.title} - {t("title")} ({editing.cards.length}
          )
        </p>
      </div>
      <div>
        <NewCardContent sectionId={editing.id} />
        <div>
          {editing.cards
            .sort(
              (a: Card, b: Card) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .map((c: Card) => (
              <CardContent key={c.id} card={c} />
            ))}
        </div>
      </div>
      <SectionsModals />
    </div>
  );
}
