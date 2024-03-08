import { twM } from "@/app/utils/twMerge";

interface ButtonCloseProps {
  setIsOpen: (isOpen: boolean) => void,
  className?: string,
}

export function ButtonCloseModal({ setIsOpen, className }: ButtonCloseProps) {
  return (
    <button 
      className={twM("w-max px-3 py-2 rounded-md bg-main-500 hover:bg-blue-700 transition-colors text-white font-medium mt-2", className)} 
      type='button' 
      onClick={() => setIsOpen(false)}
    >
      Fechar
    </button>
  )
}
