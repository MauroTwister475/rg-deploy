"use client"
import { Trash2 } from "lucide-react";
import { useDeleteModalStore } from "@/app/stores/useDeleteModalStore";
import { useRelatoryDataStore } from "@/app/stores/relatoryDataStore";
import { RelatoryProps } from "@/app/@types/Types";

interface ButtonDeleteOptionsProps {
  relatory: RelatoryProps
}
export function ButtonDelete({ relatory }: ButtonDeleteOptionsProps) {
  const { onSetIsOpen } = useDeleteModalStore();
  const { onSetData } = useRelatoryDataStore();
  
  function handleClick() {
    onSetIsOpen();
    onSetData(relatory);
  }

  return (
    <button className="flex text-red-500 items-center justify-center"
      onClick={handleClick}
    >
      <Trash2 className="mr-2 h-4 w-4 " />
      <span>Apagar</span>
    </button>
  );
}