import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="h-screen flex px-8 overflow-auto bg-shape-100" id="WHITEB">
      {children}
    </div>
  );
}
