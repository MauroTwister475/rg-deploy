"use client";
import Link from "next/link";
import { twM } from "@/app/utils/twMerge";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NextLinkProps {
  href: string;
  className?: string;
  text: string | ReactNode;
  icon?: ReactNode;
}

export function NextLink({ href, text, icon, className }: NextLinkProps) {
  const path = usePathname();
  const activelink = path === href;

  return (
    <Link
      href={href}
      data-activelink={activelink}
      className={twM(`w-full flex items-center gap-2 text-white data-[activelink=true]:text-main-500 data-[activelink=true]:bg-white p-4 rounded-md`, className)}
    >
      {icon} <span>{text}</span>
    </Link>
  );
}
