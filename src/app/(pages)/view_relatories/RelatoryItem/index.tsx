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
      </div>
    </div>
  )
}
