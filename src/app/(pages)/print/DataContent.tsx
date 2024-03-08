import { ReactNode } from "react";
import { twM } from "@/app/utils/twMerge";

interface DataContentProps {
  children: ReactNode,
  content?: string,
  className?: string,
}

export function DataContent({ children, className, content }: DataContentProps) {
  return (
    <div className={twM('w-full text-justify', className)}>
      <strong>{content} </strong>
      {children}
    </div>
  );
}
