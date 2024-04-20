import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="h-screen flex px-8 overflow-auto bg-zinc-body" id="WHITEB">
      {children}
    </div>
  );
}
