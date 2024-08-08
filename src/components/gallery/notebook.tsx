import { Notebook } from "@/interfaces/notebook";
import Link from "next/link";

export default function NotebookContent({
  notebook,
}: {
  readonly notebook: Notebook;
}) {
  return (
    <Link
      key={notebook.title}
      href={notebook.id}
      className="mb-12 lg:mb-0 overflow-hidden rounded-md relative"
    >
      <div className="relative z-20 max-w-lg p-6 mx-auto bg-white rounded-md shadow ">
        <h2 className="font-semibold text-gray-800 hover:underline md:text-xl">
          {notebook.title}
        </h2>

        <p className="mt-3 text-sm h-10 overflow-hidden text-gray-500">
          {notebook.content}
        </p>
      </div>
    </Link>
  );
}
