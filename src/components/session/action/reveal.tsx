import { useTranslations } from "next-intl";

import { useStudySession } from "@/hooks/sessions/study";

export default function RevealAction() {
  const t = useTranslations("forms.actions");
  const { changeFlip } = useStudySession();

  return (
    <div className="text-center">
      <button
        className="mx-auto text-center my-8 px-8 py-4 leading-5 w-96 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        onClick={() => {
          changeFlip();
        }}
      >
        {t("reveal")}
      </button>
    </div>
  );
}
