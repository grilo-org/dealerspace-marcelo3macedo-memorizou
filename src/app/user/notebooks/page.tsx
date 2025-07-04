"use client";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { ParsedUrlQuery } from "querystring";

import BreadcrumbComponent from "@/components/common/breadcrumb";
import ButtonAction from "@/components/common/buttonAction";
import MultilineText from "@/components/common/multilineText";
import Title from "@/components/common/title";
import NotebooksGallery from "@/components/gallery/notebooks";
import NotebookModals from "@/components/modals/notebooks/main";
import { useModalFeatures } from "@/hooks/modals";
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
  const { setSelected } = useModalFeatures();

  return (
    <MainTheme>
      <BreadcrumbComponent pageName={t("title")} />
      <div className="container my-4 md:my-8 mx-auto px-4">
        <Title>{t("title")}</Title>
        <MultilineText>{t("description")}</MultilineText>
      </div>
      <div className="my-4 px-4">
        <ButtonAction
          onclick={() => {
            setSelected("new-notebook");
          }}
        >
          {t_actions("add")}
        </ButtonAction>
      </div>
      <NotebooksGallery data={notebooks} isPublic={false} />
      <NotebookModals />
    </MainTheme>
  );
}
