import { ReactNode } from "react";

interface HeaderModalProps {
  children: ReactNode,
}

export  function HeaderModal({ children }: HeaderModalProps) {
  return (
    <div className="w-full text-lg font-semibold text-gray-600 pt-4 flex items-center justify-between">
      {children}
    </div>
  );
}
