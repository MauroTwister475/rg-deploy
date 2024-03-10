import { NAVBAR_LINKS } from "@/app/constants/Links";
import { NextLink } from "../NextLink";
import { LogOut } from "lucide-react";
import { SignOutButton } from "../SignOutButton";

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
      <SignOutButton className="lg:flex gap-2 text-blue-600 hidden">
        <LogOut className="text-blue-600" />
        <span>Sair</span>
      </SignOutButton>
    </div>
  )
}