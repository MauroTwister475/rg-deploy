"use client";
import { ContryData } from "@/app/@types/Types";
import { UseVotation } from "@/app/hooks/useVotation";

export function ContryItem() {
  const { SelectChange, members } = UseVotation();

  function renderContries() {
    return members.length > 0 ? members?.map((contry, index) => (
      <div
        className="w-full shadow2 h-12 rounded-md bg-white border p-4 flex items-center justify-between"
        key={index}
      >
        <span className="text-gray-500">
          {contry.name}
        </span>
        <select
          className="w-48 bg-white text-gray-900 text-sm rounded-md outline-none px-2.5 py-1 border-none"
          onChange={(e) => SelectChange(index, e.target.value as ContryData['state'])}
        >
          <option value="unselecte" disabled selected>
            Escolha uma opção
          </option>
          <option value="Concorda">Concorda</option>
          <option value="Discorda">Discorda</option>
          <option value="Em abstenção">Em abstenção</option>
        </select>
      </div>
    ))
      : <h1>Carregando lista de membros...</h1>
  }

  return (
    <>
      {renderContries()}
    </>
  );
}