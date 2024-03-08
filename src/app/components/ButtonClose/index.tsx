import { X } from 'lucide-react';

interface ButtonCloseProps {
  setIsOpen: (isOpen: boolean) => void,
}

export function ButtonClose({ setIsOpen }: ButtonCloseProps) {
  return (
    <button type='button' onClick={() => setIsOpen(false)}>
      <X className='text-zinc-400 button-close'/>
    </button>
  )
}
