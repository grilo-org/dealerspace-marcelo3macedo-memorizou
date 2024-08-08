import { list } from "@/api/notebooks";
import CreateNotebookForm from "@/components/forms/createNotebook";
import MainTheme from "@/themes/main.theme";
import { parseQueryParams } from "@/utils/fetch";
import { useTranslations } from "next-intl";
import { ParsedUrlQuery } from "querystring";
import { use } from "react";

export default function CreateNotebookPage({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const t = useTranslations("notebooks");
  const { page: pageNum, limit: limitNum } = parseQueryParams(searchParams);
  const data = use(list(pageNum, limitNum));

  return (
    <MainTheme>
      <div className="container my-4 md:my-8 mx-auto px-2">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            {t("title")}
          </h1>

          <p className="max-w-lg mx-auto text-lg mt-4 text-gray-500">
            {t("description")}
          </p>
        </div>
        <CreateNotebookForm />
      </div>
    </MainTheme>
  );
}
