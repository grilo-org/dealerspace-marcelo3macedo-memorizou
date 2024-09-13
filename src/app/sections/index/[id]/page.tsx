"use client";
import { useEffect } from "react";

import { index } from "@/api/sections";
import CardsGallery from "@/components/gallery/cards";
import Header from "@/components/notebook/header/main";
import BackAction from "@/components/sections/backAction";
import { useEditNotebook } from "@/hooks/notebooks/edit";
import { useEditSection } from "@/hooks/sections/edit";
import { SectionIndexProps } from "@/interfaces/section";
import MainTheme from "@/themes/main.theme";

export default function IndexSectionsPage({
  params,
}: Readonly<SectionIndexProps>) {
  const { id } = params || {};
  const { setEditing } = useEditSection();
  const { setEditing: setEditingNotebook } = useEditNotebook();

  useEffect(() => {
    const fetchSections = async () => {
      const sectionData = await index(id);
      setEditing(sectionData);
      setEditingNotebook(sectionData.notebook);
    };

    fetchSections();
  }, [id, setEditing, setEditingNotebook]);

  return (
    <MainTheme>
      <Header />
      <div className="px-4">
        <BackAction />
        <CardsGallery />
      </div>
    </MainTheme>
  );
}
