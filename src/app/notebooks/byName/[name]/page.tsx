import { use } from "react";

import { Metadata } from "next";

import { getByName } from "@/api/notebooks";
import CloneAction from "@/components/gallery/public/clone";
import SectionsGallery from "@/components/gallery/public/sections";
import PublicHeader from "@/components/notebook/header/public";
import NotFoundMain from "@/components/notFound/main";
import { NotebookByNameProps } from "@/interfaces/notebook";
import MainTheme from "@/themes/main.theme";

export default function ByNameNotebookPage({
  params,
}: Readonly<NotebookByNameProps>) {
  try {
    const { name } = params || {};
    const data = use(getByName(name));

    return (
      <MainTheme>
        <PublicHeader title={data.title} />
        <CloneAction id={data.id} />
        <SectionsGallery sections={data?.sections} />
      </MainTheme>
    );
  } catch (e) {
    return <NotFoundMain />;
  }
}

export async function generateMetadata({
  params,
}: Readonly<NotebookByNameProps>): Promise<Metadata> {
  try {
    const { name } = params || {};
    const data = await getByName(name);

    return {
      title: data.title,
      description: data.content,
    };
  } catch (e) {
    return {
      title: "",
      description: "",
    };
  }
}
