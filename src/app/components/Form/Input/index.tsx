import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twM } from "@/app/utils/twMerge"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string,
  type: string,
  className?: string,
  children?: ReactNode,
  label?: string,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type, className, children, label, ...rest }, ref) => {

    return (
      <div className="w-full flex flex-col">
        <label
          htmlFor={id}
          className="text-[14px] text-gray-500 font-semibold"
        >
          {label}
        </label>
        <input
          className={twM('w-full h-10 bg-gray-300/10 border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-main-500 py-2.5 px-4 transition-all', className)}
          name={name}
          id={id}
          type={type}
          ref={ref}
          {...rest}
        />
        {children}
      </div>
    )
  })

Input.displayName = 'Input';