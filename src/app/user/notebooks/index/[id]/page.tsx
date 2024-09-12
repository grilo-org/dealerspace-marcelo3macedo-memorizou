"use client";
import { useEffect, useState } from "react";

import { index } from "@/api/notebooks";
import SectionsGallery from "@/components/gallery/sections";
import LoadingBase from "@/components/loading/base";
import Header from "@/components/notebook/header/main";
import { useEditNotebook } from "@/hooks/notebooks/edit";
import { NotebookIndexProps } from "@/interfaces/notebook";
import MainTheme from "@/themes/main.theme";

export default function IndexNotebookPage({
  params,
}: Readonly<NotebookIndexProps>) {
  const { id } = params || {};
  const [loading, setLoading] = useState(false);
  const { editing, setEditing } = useEditNotebook();

  useEffect(() => {
    const fetchNotebook = async () => {
      const notebookData = await index(id);
      setEditing(notebookData);
      setLoading(false);
    };

    setLoading(true);
    fetchNotebook();
  }, [id, setEditing]);

  if (loading) {
    return (
      <MainTheme>
        <LoadingBase />
      </MainTheme>
    );
  }

  return (
    <MainTheme>
      <Header />
      <SectionsGallery sections={editing?.sections} />
    </MainTheme>
  );
}
