"use client";
import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { ContryData } from "../@types/Types";
import axios from "axios";

interface VotationContextData {
  agree: ArrayID[],
  disagree: ArrayID[],
  abst: ArrayID[],
  members: ContryData[],
  SelectChange: (index: number, newPosition: ContryData['state']) => void,
}

const VotationContext = createContext(
  {} as VotationContextData);

interface VotationProviderProps {
  children: ReactNode,
}

type ArrayID = {
  id: number,
}

export function VotationContextProvider({ children }: VotationProviderProps) {
  const [members, setMembers] = useState<ContryData[] | any[]>([]);
  const [agree, setAgree] = useState<ArrayID[]>([]);
  const [disagree, setDisagree] = useState<ArrayID[]>([]);
  const [abst, setAbts] = useState<ArrayID[]>([]);

  useEffect(() => {
    async function getMembers() {
      const response = await axios.get("https://api-rg.onrender.com/members");
      const members = response.data;
      setMembers(members);
    }
    getMembers();
  }, [abst, agree, disagree]);

  async function SelectChange(index: number, newState: ContryData['state']) {
    const updatedContries: ContryData[] = [...members];
    updatedContries[index] = { ...updatedContries[index], state: newState };
    // const status = updatedContries[index].state;
    // const idMember = updatedContries[index].id;

    if (updatedContries[index].state === "Concorda") {
      const newId = updatedContries[index].id;
      setAgree((prev) => [...prev, { id: newId}] );
    }

    if (updatedContries[index].state === "Discorda") {
      const newId = updatedContries[index].id;
      setDisagree((prev) => [...prev, { id: newId }]);
    }

    if (updatedContries[index].state === "Em abstenção") {
      const newId = updatedContries[index].id;
      setAbts((prev) => [...prev, { id: newId }]);
      console.log(abst);
    }
  }

  return (
    <VotationContext.Provider value={{ SelectChange, members, abst, agree, disagree }}>
      {children}
    </VotationContext.Provider>
  )
}

export function UseVotation() {
  return useContext(VotationContext);
}