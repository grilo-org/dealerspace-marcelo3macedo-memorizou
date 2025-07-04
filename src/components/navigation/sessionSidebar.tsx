import { useTranslations } from "next-intl";

import { useStudySession } from "@/hooks/sessions/study";
import { Session } from "@/interfaces/session";

export default function SessionSidebarNavigation({
  session,
}: {
  session: Session;
}) {
  const t = useTranslations("forms.actions");
  const t_session = useTranslations("session");
  const { index, backStudy } = useStudySession();

  return (
    <article className="flex justify-between items-center md:block w-full md:w-96 md:min-h-screen bg-cyan-900 p-4">
      <button
        onClick={backStudy}
        className="px-8 py-2.5 leading-5 text-cyan-800 text-sm font-bold transition-colors duration-300 transform bg-slate-200 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        {t("back")}
      </button>
      <div className="md:pt-8">
        <h4 className="text-cyan-100 font-bold text-sm">
          {t_session("title")}
        </h4>
        <h2 className="text-white font-bold text-2xl">
          {session.notebook.title}
        </h2>
      </div>
      <div className="py-4">
        <h4 className="text-cyan-100 font-bold text-sm">
          {t_session("cards")}
        </h4>
        <h2 className="text-white font-bold text-2xl">
          {index + 1} / {session.sessionCards.length}
        </h2>
      </div>
    </article>
  );
}
