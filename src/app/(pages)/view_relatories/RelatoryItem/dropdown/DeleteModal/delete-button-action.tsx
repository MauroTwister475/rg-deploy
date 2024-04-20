"use client";
import { URLBACK } from "@/app/constants/URL";
import { useRelatoryDataStore } from "@/app/stores/relatoryDataStore";
import { useDeleteModalStore } from "@/app/stores/useDeleteModalStore";
import { queryClient } from "@/app/libs/react-query";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { SucessMessage } from "@/app/utils/FeedBack/Messages";

export function DeleteButtonReport() {
  const [isLoading, setIsLoading] = useState(false);
  const { Relatory } = useRelatoryDataStore()
  const { onClose } = useDeleteModalStore()

  const deleteRelatoryMutation = useMutation({
    mutationFn: onDeleteRelatory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['relatory']});
    }
  });

  const handleDelete = (id: number) => {
    deleteRelatoryMutation.mutate(id as any);
  }

  async function onDeleteRelatory() { 
    setIsLoading(true);

    await axios.delete(`${URLBACK}/Report/${Relatory.id}`);
    SucessMessage("Relatorio apagado com successo!");
    onClose();
  }

  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
      onClick={() => handleDelete(Relatory.id)}
    >
      {isLoading ? "Apagando...": "apagar"}
    </button>
  )
}