import * as z from "zod";

export const relatorySchema = z.object({
  theme: z.string().nonempty(),
  title: z.string().nonempty(),
  point: z.string().nonempty(),
  reference: z.string().nonempty(),
  atribuition: z.string().nonempty(),
  cod_document: z.string().nonempty(),
  Angola_participation: z.string().nonempty(),
  decision: z.string().nonempty(),
  summary: z.string().nonempty(),
  create_at: z.string().nonempty(),
  meeting_number: z.string().nonempty(),
  comment: z.string().optional(),
  author: z.string().nonempty(),
  tendencies: z.string().optional(),
});

export type RelatorySchemType = z.infer<typeof relatorySchema>;
