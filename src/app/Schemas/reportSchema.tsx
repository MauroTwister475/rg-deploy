 import { z } from "zod";

export const reportFormSchema = z.object({
  title: z.string().nonempty(), 
  theme: z.string().nonempty(), 
  data: z.string().nonempty(), 
  participation_of_angola: z.string().nonempty(), 
  decision: z.string().nonempty(), 
  point: z.string().nonempty(), 
  number_meeting: z.string().nonempty(), 
  resume: z.string().nonempty(), 
  reference: z.string().nonempty(), 
  cod_document: z.string().nonempty(), 
  atribuition: z.string().nonempty(), 
  comment: z.string().nonempty(),
});

export type ReportFormData = z.infer<typeof reportFormSchema>;

export const loginFormSchema = z.object({
  email: z.string()
  .nonempty("Campo obrigatório")
  .email("Informe um email válido."), 
  password: z.string().
  nonempty("Campo obrigatório"), 
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
