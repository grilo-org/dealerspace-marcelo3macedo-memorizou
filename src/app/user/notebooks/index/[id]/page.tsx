"use client";
import { useEffect } from "react";

import { index } from "@/api/notebooks";
import SectionsGallery from "@/components/gallery/sections";
import Header from "@/components/notebook/header/main";
import { useEditNotebook } from "@/hooks/notebooks/edit";
import { NotebookIndexProps } from "@/interfaces/notebook";
import MainTheme from "@/themes/main.theme";

export default function IndexNotebookPage({
  params,
}: Readonly<NotebookIndexProps>) {
  const { id } = params || {};
  const { editing, setEditing } = useEditNotebook();

  useEffect(() => {
    const fetchNotebook = async () => {
      const notebookData = await index(id);
      setEditing(notebookData);
    };

    fetchNotebook();
  }, [id, setEditing]);

  return (
    <MainTheme>
      <Header />
      <SectionsGallery sections={editing?.sections} />
    </MainTheme>
  );
}
