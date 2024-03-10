"use client";
import { ReactNode, useRef } from "react";
import Link from "next/link"
import { Eye, Printer } from "lucide-react"

interface RelatoryItemProps {
  id: number,
  Icon: ReactNode,
  title: string,
  create_at: any,
}

export function RelatoryItem({ id, title, Icon, create_at }: RelatoryItemProps) {
  return (
    <div className="w-full text-center shadow-sm bg-white px-6 h-12 rounded-md bg-red border p-4 flex items-center justify-between">
      <span className="w-full text-start text-gray-500 flex items-center gap-2">
        {Icon}{title}
      </span>
      <span className="w-[50%] text-gray-500">
        {create_at}
      </span>
      <div className="w-full text-end flex justify-end text-gray-500">
        <Link href={`/print/${id}`}>
          <Eye size={20} />
        </Link>
      </div>
    </div>
  )
}
