import { ReactNode } from "react";
import { twM } from "@/app/utils/twMerge"

interface PageRootProps {
  children: ReactNode,
  classeName?: string,
}

export function PageRoot({ children, classeName }: PageRootProps) {
  return (
    <section className={twM('flex-1 lg:mt-6 w-[85rem]', classeName)}>
      {children}
    </section>
  );
}
