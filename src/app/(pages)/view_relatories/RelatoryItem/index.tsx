"use client";
import Link from "next/link"
import { Eye, Printer } from "lucide-react"
import { ReactNode } from "react";
import { api } from "@/app/api/axios/api";
import { usePrintStore } from "@/app/hooks/usePrint";

interface RelatoryItemProps {
  id: number,
  Icon: ReactNode,
  title: string,
  create_at: any,
}

export function RelatoryItem({ id, title, Icon, create_at }: RelatoryItemProps) {
  const { onSetPrinting, isPrinting  } = usePrintStore()

  function handlePrint() {
    setTimeout(() => {
      window.print()
    }, 3500);
    // onSetPrinting(true);
  }
  console.log("IMPRIMIR: ", +isPrinting)
  
  return (
    <div className="w-full shadow-sm h-14 rounded-lg bg-white border px-6 flex items-center justify-between">
      <span className="text-gray-500 flex items-center gap-2">
        {Icon}{title}
      </span>
      <span className="text-gray-500">
        {create_at}
      </span>
      <div className="w-max flex items-center gap-4 text-gray-500">
        <Link href={`/print/${id}`}>
          <Eye size={20} />
        </Link>
        <Link href={`/print/${id}`} onClick={handlePrint}>
          <Printer size={18} />
        </Link>
      </div>
    </div>
  )
}
