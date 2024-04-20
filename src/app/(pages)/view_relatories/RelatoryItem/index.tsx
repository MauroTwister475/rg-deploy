"use client";
import { ReactNode } from "react";
import { DropdownMenuOptions } from "./dropdown";
import { TableCell, TableRow } from "@/components/ui/table";

interface RelatoryItemProps {
  id: number;
  Icon: ReactNode;
  theme: string;
  create_at: any;
}

export function RelatoryItem({
  id,
  theme,
  Icon,
  create_at,
}: RelatoryItemProps) {
  return (
    <TableRow className="outline-none bg-white shadow-sm rounded-lg border border-gray-400">
      <TableCell>
        <span className="w-full text-start text-gray-500 flex items-center gap-2">
          {Icon}
          {theme}
        </span>
      </TableCell>
      <TableCell>
        <span className="w-[50%] text-gray-500">
          {new Date(create_at).toLocaleString("BR", {
            dateStyle: "short",
          })}
        </span>
      </TableCell>
      <TableCell>
        <div className="w-full text-end flex justify-end text-gray-500">
          <DropdownMenuOptions relatory={{ create_at, id, theme }} />
        </div>
      </TableCell>
    </TableRow>
  );
}