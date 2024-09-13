import { use } from "react";

import { useTranslations } from "next-intl";
import { ParsedUrlQuery } from "querystring";

import { list } from "@/api/notebooks";
import BreadcrumbComponent from "@/components/common/breadcrumb";
import MultilineText from "@/components/common/multilineText";
import Title from "@/components/common/title";
import FilterGallery from "@/components/gallery/filter";
import NotebooksGallery from "@/components/gallery/notebooks";
import MainTheme from "@/themes/main.theme";
import { parseQueryParams } from "@/utils/fetch";

export default function ListNotebookPage({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const t = useTranslations("notebooks");
  const {
    page: pageNum,
    limit: limitNum,
    theme,
  } = parseQueryParams(searchParams);
  const data = use(list(pageNum, limitNum, theme));

  return (
    <MainTheme>
      <BreadcrumbComponent pageName={t("title")} />
      <div className="container my-4 md:my-8 mx-auto px-4">
        <Title>{t("title")}</Title>
        <MultilineText>{t("description")}</MultilineText>
      </div>
      <FilterGallery data={data} themeSelected={theme} />
      <NotebooksGallery data={data} isPublic={true} />
    </MainTheme>
  );
}
