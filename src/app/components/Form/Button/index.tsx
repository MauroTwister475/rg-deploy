import { ComponentProps, ReactNode } from "react";
import { twM } from "@/app/utils/twMerge";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode,
  className?: string,
  isSubmitting?: boolean,
}

export function Button({ children, className, isSubmitting, ...restProps }: ButtonProps) {
  return (
    <button 
      className={twM(`w-full rounded-md py-2 mt-4 bg-main-500 ${!isSubmitting && "hover:bg-blue-700"} transition-colors text-white font-medium`, className)}
      {...restProps}
    > 
      {children}
    </button>
  )
}
