import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twM } from "@/app/utils/twMerge"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string,
  label?: string,
  type: string,
  className?: string,
  placeholder?: string,
  children?: ReactNode,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, name, type, className, placeholder, children, ...rest }, ref) => {

    return (
      <div className="w-full flex flex-col justify-start items-start">
        <label htmlFor={id} className="text-sm mb-1">{label}</label>
        <input
          className={twM('w-full h-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:border-main-500 py-2.5 px-4 transition-all', className)}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {children}
      </div>
    )
  })

Input.displayName = 'Input';