import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

import {
  contactFormSchema,
  ContactFormSchemaType,
} from "@/modules/ContactSection/_schemas/contactForm.schema";

export function useContactForm() {
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormSchemaType) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 400) {
          toast.error(
            "Dados inválidos. Verifique os campos e tente novamente."
          );
        } else if (response.status === 500) {
          toast.error("Erro interno do servidor. Tente novamente mais tarde.");
        } else if (response.status >= 400 && response.status < 500) {
          toast.error("Erro na requisição. Verifique os dados enviados.");
        } else if (response.status >= 500) {
          toast.error("Erro no servidor. Tente novamente mais tarde.");
        } else {
          toast.error("Erro inesperado. Tente novamente.");
        }
        return;
      }

      const { name } = await response.json();

      toast.success(`Obrigado ${name}!`, {
        description: "Assim que possível, irei te responde por e-mail.",
      });
    } catch (error) {
      toast.error("Erro de conexão. Verifique sua internet e tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isValid,
    isLoading,
  };
}
