"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { Report } from "../@types/Types";

interface FormDataContextProps {
  formData: Report,
  setFormData: React.Dispatch<React.SetStateAction<Report>>;
  resetFormData: () => void;
}

const FormDataContext = createContext<FormDataContextProps>(
  {} as FormDataContextProps);

interface FormDataProviderProps {
  children: ReactNode;
}

export function FormDataProvider({ children }: FormDataProviderProps) {
  const [formData, setFormData] = useState<Report>({
    theme: '',
    title: '',
    point: '',
    reference: '',
    atribuition: '',
    cod_document: '',
    Angola_participation: '',
    decision: '',
    summary: '',
    meeting_number: '',
    comment: '',
    create_at: '',
    votoscontra: null,
    votosfavor: null,
    votosemabstencao: null,
    author: '',
    tendencies: ''
  });

  function resetFormData() {
    setFormData({
      theme: '',
      title: '',
      point: '',
      reference: '',
      atribuition: '',
      cod_document: '',
      Angola_participation: '',
      decision: '',
      summary: '',
      meeting_number: '',
      comment: '',
      create_at: '',
      votoscontra: null,
      votosfavor: null,
      votosemabstencao: null,
      author: '',
      tendencies: '',
    });
  }

  return (
    <FormDataContext.Provider  value={{ formData, setFormData, resetFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
