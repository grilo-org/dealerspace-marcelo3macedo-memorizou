import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const BreadcrumbComponent = ({ pageName }: { pageName: string }) => {
  return (
    <nav className="px-4 my-8">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <Link href="/" className="block transition hover:text-gray-700">
            <span className="sr-only"> Home </span>
            <HomeIcon className="size-4" />
          </Link>
        </li>

        <li>
          <ChevronRightIcon className="size-4" />
        </li>

        <li>
          <p className="block transition hover:text-gray-700">{pageName}</p>
        </li>
      </ol>
    </nav>
  );
};

export default BreadcrumbComponent;
