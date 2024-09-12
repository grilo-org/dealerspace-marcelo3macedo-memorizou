"use client";
import LoadingBase from "@/components/loading/base";
import SessionSidebarNavigation from "@/components/navigation/sessionSidebar";
import SessionCard from "@/components/session/card";
import { useIndexSession } from "@/hooks/sessions";
import { SessionIndexProps } from "@/interfaces/session";
import SessionTheme from "@/themes/session.theme";

export default function IndexSessionPage({
  params,
}: Readonly<SessionIndexProps>) {
  const { id } = params || {};
  const { session, loading } = useIndexSession(id);

  if (!session || loading) return <LoadingBase />;

  return (
    <SessionTheme>
      <div className="md:flex">
        <SessionSidebarNavigation session={session} />
        <div className="px-4 w-full">
          <SessionCard />
        </div>
      </div>
    </SessionTheme>
  );
}
