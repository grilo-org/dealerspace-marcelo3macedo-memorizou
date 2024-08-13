import { use } from "react";

import { useTranslations } from "next-intl";
import { ParsedUrlQuery } from "querystring";

import { list } from "@/api/notebooks";
import MultilineText from "@/components/common/multilineText";
import Title from "@/components/common/title";
import NotebooksGallery from "@/components/gallery/notebooks";
import MainTheme from "@/themes/main.theme";
import { parseQueryParams } from "@/utils/fetch";

export default function ListNotebookPage({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const t = useTranslations("notebooks");
  const { page: pageNum, limit: limitNum } = parseQueryParams(searchParams);
  const data = use(list(pageNum, limitNum));

  return (
    <MainTheme>
      <div className="container my-4 md:my-8 mx-auto">
        <Title>{t("title")}</Title>
        <MultilineText>{t("description")}</MultilineText>
      </div>
      <NotebooksGallery data={data} />
    </MainTheme>
  );
}
