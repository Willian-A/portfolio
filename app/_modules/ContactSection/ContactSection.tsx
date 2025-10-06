"use client";

import { toast } from "sonner";

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Section } from "@/components/Section/Section";

export function ContactSection() {
  return (
    <Section className="section" title="contato" variant="dark" id="contato">
      <p className="text-accent mb-4">
        # gostou do que viu? <br />
        # quer conversar sobre algo? <br />
        # tem algum projeto legal pra mim? <br /># entre em contato
      </p>
      <Input placeholder="seu e-mail" type="email" className="mb-2" />
      <Input placeholder="mensagem" type="text" className="mb-6" />
      <Button
        type="submit"
        className=" justify-start"
        size="lg"
        onClick={() =>
          toast.success("Obrigado por mandar uma mensagem!", {
            description: "Assim que possível, irei te responde por e-mail.",
          })
        }
      >
        ENVIAR
      </Button>
    </Section>
  );
}
