"use client";
import { usePathname } from "next/navigation";
// import { Avatar } from "./Avatar";

export function Header() {
  const path = usePathname();
  
  return (
    <header className={`w-full top-0 fixed h-14 z-10 px-6 py-2 bg-white flex items-center justify-between shadowHeader ${path.includes("print") && 'hidden'} ${path.includes("new_relatory") && 'hidden'}`}>
      {/* <Avatar />  */}
    </header>
  )
}
