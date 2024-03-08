"use client"
import { usePathname } from "next/navigation"
import { ReactNode } from 'react';

interface MarginWitdhWrapperProps {
  children: ReactNode;
}

export function MarginWidthWrapper({ children }:MarginWitdhWrapperProps) {
    const path = usePathname();

  return (
    <div className={`w-full h-full flex flex-col min-h-screen ${path.includes("print") && "w-screen h-[200rem] bg-white"}`}>
      {children}
    </div>
  );
}