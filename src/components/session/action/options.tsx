import { useTranslations } from "next-intl";

import { useStudySession } from "@/hooks/sessions/study";
import { Option } from "@/interfaces/option";

export default function OptionsAction() {
  const t = useTranslations("session.options");
  const { options, selectOption } = useStudySession();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full my-4">
      {options.map((o: Option) => (
        <div key={o.id} className="px-1 w-full">
          <button
            className="mx-auto text-center my-2 md:my-8 px-2 py-4 leading-5 w-full text-sm text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={() => {
              selectOption(o.id);
            }}
          >
            {t(o.name)}
          </button>
        </div>
      ))}
    </div>
  );
}
