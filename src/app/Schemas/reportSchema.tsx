 import { z } from "zod";

export const reportFormSchema = z.object({
  theme: z.string().nonempty(),
  title: z.string().nonempty(),
  point: z.string().nonempty(),
  reference: z.string().nonempty(),
  atribuition: z.string().nonempty(),
  cod_document: z.string().nonempty(),
  Angola_participation: z.string().nonempty(),
  decision: z.string().nonempty(),
  summary: z.string().nonempty(),
  meeting_number: z.string().nonempty(),
  comment: z.string().nonempty(),
  create_at: z.string().nonempty(),
  votoscontra: z.string().nonempty(),
  votosfavor: z.string().nonempty(),
  votosemabstencao: z.string().nonempty(),
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
