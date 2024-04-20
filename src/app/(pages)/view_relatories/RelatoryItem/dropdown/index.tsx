import {MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RelatoryProps } from "@/app/@types/Types";
import { ButtonLook } from "./button-look";
import { ButtonEdit } from "./button-edit";
import { ButtonDelete } from "./button-delete";
import { useRelatoryDataStore } from "@/app/stores/relatoryDataStore";

interface DropdownMenuOptionsProps {
  relatory: RelatoryProps
}

export function DropdownMenuOptions({ relatory }: DropdownMenuOptionsProps) {
  console.log(relatory);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreHorizontal className="text-gray-400 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-max">
        <DropdownMenuItem className="w-full">
          <ButtonLook id={relatory.id} />
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full">
          <ButtonEdit id={relatory.id} />
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full text-red-500">
          <ButtonDelete relatory={relatory} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
