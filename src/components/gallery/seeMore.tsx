"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { SeeMoreProps } from "@/interfaces/gallery";

export function SeeMoreGallery({ page, total, limit }: Readonly<SeeMoreProps>) {
  const t = useTranslations("gallery");
  const pathname = usePathname();
  const totalPages = Math.ceil(total / limit);
  const searchParams = useSearchParams();
  const searchParamsObject = searchParams
    ? Object.fromEntries(searchParams.entries())
    : {};

  const createPageLink = (pageNum: number) => {
    const newQuery = { ...searchParamsObject, page: pageNum.toString() };
    return { pathname, query: newQuery };
  };

  return (
    <div className="flex justify-center my-8 space-x-2">
      <Link
        href={createPageLink(page - 1)}
        className={`flex items-center px-4 py-2 mx-1 rounded-md ${
          page === 1
            ? "text-gray-500 bg-white cursor-not-allowed "
            : "text-gray-700 transition-colors duration-300 transform bg-white hover:bg-gray-900 hover:text-white"
        }`}
      >
        {t("previous")}
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Link
          key={pageNum}
          href={createPageLink(pageNum)}
          className={`items-center hidden sm:flex px-4 py-2 mx-1 rounded-md ${
            pageNum === page
              ? "bg-gray-900 text-white"
              : "text-gray-700 transition-colors duration-300 transform bg-white hover:bg-gray-900 hover:text-white"
          }`}
        >
          {pageNum}
        </Link>
      ))}

      <Link
        href={createPageLink(page + 1)}
        className={`flex items-center px-4 py-2 mx-1 rounded-md ${
          page === totalPages
            ? "text-gray-500 bg-white cursor-not-allowed "
            : "text-gray-700 transition-colors duration-300 transform bg-white  hover:text-white"
        }`}
      >
        {t("next")}
      </Link>
    </div>
  );
}
