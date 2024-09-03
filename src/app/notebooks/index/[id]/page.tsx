import { use } from "react";

import { Metadata } from "next";

import { index } from "@/api/notebooks";
import CloneAction from "@/components/gallery/public/clone";
import SectionsGallery from "@/components/gallery/public/sections";
import PublicHeader from "@/components/notebook/header/public";
import { NotebookIndexProps } from "@/interfaces/notebook";
import MainTheme from "@/themes/main.theme";

export default function IndexNotebookPage({
  params,
}: Readonly<NotebookIndexProps>) {
  const { id } = params || {};
  const data = use(index(id));

  return (
    <MainTheme>
      <PublicHeader title={data.title} />
      <CloneAction id={data.id} />
      <SectionsGallery sections={data?.sections} />
    </MainTheme>
  );
}

export async function generateMetadata({
  params,
}: Readonly<NotebookIndexProps>): Promise<Metadata> {
  const { id } = params || {};
  const data = await index(id);

  return {
    title: data.title,
    description: data.content,
  };
}
