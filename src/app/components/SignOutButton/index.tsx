"use client";
import { twM } from "@/app/utils/twMerge";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

interface SignOutButtonProps {
  children: React.ReactNode,
  className?: string,
}
export function SignOutButton({ children, className }: SignOutButtonProps) {
  const { refresh } = useRouter();

  function SignOut() {
    deleteCookie("SG.Token");
    deleteCookie("SG.user");

    location!.href = "/";
    return Response.redirect(location!.href);
  }

  return (
    <button 
      className={twM('', className)}
      onClick={SignOut}
    >
      {children}
    </button>
  )
}