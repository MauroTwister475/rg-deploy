"use client";
import { ReactNode } from "react";
import { DropdownMenuOptions } from "./dropdown";

interface RelatoryItemProps {
  id: number,
  Icon: ReactNode,
  theme: string,
  create_at: any,
}

export function RelatoryItem({ id, theme, Icon, create_at }: RelatoryItemProps) {
  return (
    <div className="w-full text-center shadow-sm bg-white px-6 h-12 rounded-md bg-red border p-4 flex items-center justify-between">
      <span className="w-full text-start text-gray-500 flex items-center gap-2">
        {Icon}{theme}
      </span>
      <span className="w-[50%] text-gray-500">
        {new Date(create_at).toLocaleString("BR", {
          dateStyle: "short",
        })}
      </span>
      <div className="w-full text-end flex justify-end text-gray-500">
        <DropdownMenuOptions relatory={{ create_at, id, theme }} />
      </div>
    </div>
  ) 
    
  
}
