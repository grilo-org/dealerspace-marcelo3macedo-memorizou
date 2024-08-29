import { MainProps } from "./props/main";

function SessionTheme({ children }: Readonly<MainProps>) {
  return (
    <div className="w-full">
      <div className="mx-auto flex bg-indigo-100">
        <main className="min-h-screen w-full">{children}</main>
      </div>
    </div>
  );
}

export default SessionTheme;
