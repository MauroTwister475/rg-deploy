"use client";
import { ListReports } from "../ListTeacher";
import { DeleteModal } from "../RelatoryItem/dropdown/DeleteModal/delete-modal";
import { useDeleteModalStore } from "@/app/stores/useDeleteModalStore";

export function RelatoryList() {
  const { isOpen, onSetIsOpen } = useDeleteModalStore();

  return (
    <>
      <ListReports />
      <DeleteModal 
        isOpen={isOpen} 
        setIsOpen={onSetIsOpen} 
      />
    </>
  );
}
