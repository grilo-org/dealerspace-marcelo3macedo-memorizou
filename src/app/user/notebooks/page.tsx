"use client";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { ParsedUrlQuery } from "querystring";

import ButtonAction from "@/components/common/buttonAction";
import MultilineText from "@/components/common/multilineText";
import Title from "@/components/common/title";
import NotebooksGallery from "@/components/gallery/notebooks";
import { useNotebooksUser } from "@/hooks/users/notebooks";
import MainTheme from "@/themes/main.theme";
import { parseQueryParams } from "@/utils/fetch";

export default function UserNotebookPage({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const t = useTranslations("user.notebooks");
  const t_actions = useTranslations("forms.actions");
  const { page: pageNum, limit: limitNum } = parseQueryParams(searchParams);
  const { notebooks } = useNotebooksUser(pageNum, limitNum);

  return (
    <MainTheme>
      <div className="container my-4 md:my-8 mx-auto">
        <Title>{t("title")}</Title>
        <MultilineText>{t("description")}</MultilineText>
      </div>
      <div className="my-4">
        <ButtonAction
          onclick={() => {
            console.log("here");
          }}
        >
          Adicionar novo cardeno
        </ButtonAction>
      </div>
      <NotebooksGallery data={notebooks} isPublic={false} />
    </MainTheme>
  );
}
