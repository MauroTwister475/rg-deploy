"use client";
import { Avatar } from "./Avatar";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();
  
  return (
    <header className={`w-full h-16 py-2 bg-white flex items-center justify-between px-12 shadowHeader ${path.includes("print") && 'hidden'} ${path.includes("new_relatory") && 'hidden'}`}>
      {/* <Avatar />  */}
      {/* <h1>M</h1> */}
    </header>
  )
}
