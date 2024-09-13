import NotebookContent from "./notebook";
import { SeeMoreGallery } from "./seeMore";

import { NotebookResponse } from "@/interfaces/notebook";

export default function NotebooksGallery({
  data,
  isPublic,
}: {
  readonly data: NotebookResponse;
  readonly isPublic: Boolean;
}) {
  if (!data || !data.notebooks) return <></>;

  return (
    <article>
      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 px-4">
        {data.notebooks.map((notebook) => (
          <NotebookContent
            key={notebook.id}
            notebook={notebook}
            isPublic={isPublic}
          />
        ))}
      </div>
      <SeeMoreGallery page={data.page} total={data.total} limit={data.limit} />
    </article>
  );
}
