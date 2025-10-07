import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string("Nome é obrigatório")
    .min(3, "Nome é muito curto")
    .max(28, "Nome é muito grande"),
  email: z.email({ message: "Email inválido" }),
  message: z.string("Mensagem é obrigatória").min(5, "Mensagem é muito curta"),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
