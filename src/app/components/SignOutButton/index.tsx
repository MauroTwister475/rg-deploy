"use client";
import { twM } from "@/app/utils/twMerge";
import { deleteCookie } from "cookies-next";

interface SignOutButtonProps {
  children: React.ReactNode,
  className?: string,
}
export function SignOutButton({ children, className }: SignOutButtonProps) {

  function SignOut() {
    deleteCookie("RG.Token");
    deleteCookie("RG.user");
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