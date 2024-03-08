import { twM } from "@/app/utils/twMerge";
import { ReactNode } from "react";

interface ModalContentWrapperProps {
  children: ReactNode,
  className?: string,
}
export function ModalContentWrapper({ children, className }: ModalContentWrapperProps) {
  return (
    <div className={twM("w-full h-auto flex", className)}>
      {children}
    </div>
  )
}
