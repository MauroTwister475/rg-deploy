import { ReactNode, SelectHTMLAttributes, forwardRef } from 'react';
import { twM } from '@/app/utils/twMerge';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label?: string;
  className?: string;
  children: ReactNode;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, className, name, children, ...rest }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
        <label className="text-sm">{label}</label>
        <select
          id={id}
          ref={ref}
          {...rest}
          className={twM('w-full rounded-md border border-gray-300 bg-white outline-none px-3 py-2 text-sm text-black outline-gray-light focus:border-blue-600', className)}
        >
          {children}
        </select>
      </div>
    );
  },
);

Select.displayName = 'SelectForm';
