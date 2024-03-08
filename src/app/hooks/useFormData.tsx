"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import { Report } from "../@types/Types";

interface FormDataContextProps {
  formData: Report,
  setFormData: React.Dispatch<React.SetStateAction<Report>>;
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
  });

  return (
    <FormDataContext.Provider  value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
