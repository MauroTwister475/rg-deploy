"use client";
import { useContext } from "react";
import { ModalContext } from "@/app/contexts/modalContext";

export function useModal() {
  return useContext(ModalContext);
}