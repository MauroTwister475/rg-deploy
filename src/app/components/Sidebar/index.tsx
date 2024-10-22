import { NAVBAR_LINKS } from "@/app/constants/Links";
import { NextLink } from "../NextLink";
import { LogOut } from "lucide-react";
import { SignOutButton } from "../SignOutButton";
import logo from "@/app/assets/logo unesco.png"
import Image from "next/image";

export function SideBar() {
  return (
    <div className={`bg-main-500 h-screen navbar flex flex-col justify-between items-center p-4`}>
      <div className="text-white flex gap">
        <Image src={logo} alt='logo unesco' />
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
      <SignOutButton className="lg:flex gap-2 text-white hidden">
        <LogOut className="text-white" />
        <span className="text-white">Sair</span>
      </SignOutButton>
    </div>
  )
}