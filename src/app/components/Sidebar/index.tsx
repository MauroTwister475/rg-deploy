import { NAVBAR_LINKS } from "@/app/constants/Links";
import { NextLink } from "../NextLink";
import { LogOut } from "lucide-react";
import Link from "next/link";

export function SideBar() {

  return (
    <div className={`bg-main-500 h-screen navbar flex flex-col justify-between items-center p-4`}>
      <div className="text-white flex gap">
        <img src="./logo unesco.png" alt='logo unesco' />
      </div>
      <ul className="mt-[-3rem] flex flex-col gap-4 overflow-hidden mb-40">
        {NAVBAR_LINKS.map(link => (
          <NextLink 
            key={link.href}
            href={link.href} 
            text={link.text} 
            icon={link.icon}
          />
        ))}
      </ul>
      <Link href="/" prefetch className="flex gap-2 text-white">
        <LogOut className=""/> 
        <span>Sair</span>
      </Link>
    </div>
  )
}