"use client";
import { createContext, useState, ReactNode } from "react";

interface ModalContextData {
  isOpen: boolean,
  onSetIsOpen: () => void,
}

export const ModalContext = createContext(
  {} as ModalContextData );

interface ModalProviderProps {
  children: ReactNode,
}

export function ModalContextProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onSetIsOpen() {
    setIsOpen((state) => !state);
  }

  return (
    <ModalContext.Provider value={{isOpen, onSetIsOpen }}>
      {children}
    </ModalContext.Provider>
  )
}