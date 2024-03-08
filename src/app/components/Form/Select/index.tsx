import { ChangeEvent, ComponentProps, ReactNode } from "react";

type SelectProps = ComponentProps<"select"> & {
  id: string;
  label?: string;
  children: ReactNode,
};

export function Select({ id, children, label, ...rest }: SelectProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="text-[14px] text-gray-500 font-semibold"
      >
        {label}
      </label>
      <select
        id={id}
        {...rest}
        className='bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2 focus:border-blue-600'
      >
        {children}
      </select>
    </div>
  );
}
