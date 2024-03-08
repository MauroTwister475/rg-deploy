"use client";
import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { ContryData } from "../@types/Types";
import { api, localApi } from '../api/axios/api';
import { ErrorMessage } from "../utils/FeedBack/Messages";

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
  id: string,
}

export function VotationContextProvider({ children }: VotationProviderProps) {
  const [members, setMembers] = useState<ContryData[] | any[]>([]);
  const [agree, setAgree] = useState<ArrayID[]>([]);
  const [disagree, setDisagree] = useState<ArrayID[]>([]);
  const [abst, setAbts] = useState<ArrayID[]>([]);

  useEffect(() => {
    async function getMembers() {
      const response = await localApi.get("/api/members/view");
      const members = response.data;
      setMembers(members?.members);
    }
    getMembers();
    console.log({ agree, disagree, abst });
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
      setDisagree((prev) => [...prev, { id: newId}]);
    }

    if (updatedContries[index].state === "Em abstenção") {
      const newId = updatedContries[index].id;
      setAbts((prev) => [...prev, { id: newId}]);
      console.log(abst);
    }

    console.log({ agree, disagree, abst });

    // try {
    //   await api.post(`/votation`, {

    //   });
    // } catch(error) {
    //   ErrorMessage("Algo ocorreu mal. Tente novamente!");
    // }
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