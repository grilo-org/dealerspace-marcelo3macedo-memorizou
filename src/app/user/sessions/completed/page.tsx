import CompletedAction from "@/components/session/completed/action";
import CompletedHeader from "@/components/session/completed/header";
import SessionTheme from "@/themes/session.theme";

export default function SessionFinishedPage() {
  return (
    <SessionTheme>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-md min-h-[400px] min-w-[400px] text-center">
          <CompletedHeader />
          <CompletedAction />
        </div>
      </div>
    </SessionTheme>
  );
}
