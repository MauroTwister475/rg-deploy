import { ReactNode } from "react";
import { twM } from "@/app/utils/twMerge"

interface PageRootProps {
  children: ReactNode,
  classeName?: string,
}

export function PageRoot({ children, classeName }: PageRootProps) {
  return (
    <section className={twM('flex-1 w-[85rem]', classeName)}>
      {children}
    </section>
  );
}
// prop data will be an object that will contain the info necessary to display in the screen
