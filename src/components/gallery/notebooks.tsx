import NotebookContent from "./notebook";
import { SeeMoreGallery } from "./seeMore";

import { NotebookResponse } from "@/interfaces/notebook";
import { checkHasMorePages } from "@/utils/paginate";

export default function NotebooksGallery({
  data,
}: {
  readonly data: NotebookResponse;
}) {
  const hasMorePage = checkHasMorePages(data.page, data.limit, data.total);

  return (
    <article>
      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 px-4">
        {data.notebooks.map((notebook) => (
          <NotebookContent key={notebook.id} notebook={notebook} />
        ))}
      </div>
      {hasMorePage ? <SeeMoreGallery page={data.page} /> : <></>}
    </article>
  );
}
