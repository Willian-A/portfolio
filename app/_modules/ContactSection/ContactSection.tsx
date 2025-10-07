"use client";

import { toast } from "sonner";

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Section } from "@/components/Section/Section";

import { useContactForm } from "@/modules/ContactSection/_hooks/useContactForm";

export function ContactSection() {
  const { register, handleSubmit, errors, onSubmit, isValid, isLoading } =
    useContactForm();

  return (
    <Section className="section" title="contato" variant="dark" id="contato">
      <p className="text-accent mb-4">
        # gostou do que viu? <br />
        # quer conversar sobre algo? <br />
        # tem algum projeto legal pra mim? <br /># entre em contato
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="nome"
          type="name"
          helperText={errors.name?.message}
          error={!!errors.name?.message}
          disabled={isLoading}
          {...register("name")}
        />
        <Input
          placeholder="e-mail"
          type="email"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          disabled={isLoading}
          {...register("email")}
        />
        <Input
          placeholder="mensagem"
          type="text"
          className="mb-6"
          helperText={errors.message?.message}
          error={!!errors.message?.message}
          disabled={isLoading}
          {...register("message")}
        />
        <Button
          type="submit"
          className="w-full justify-start uppercase"
          size="lg"
          disabled={!isValid}
          isLoading={isLoading}
        >
          ENVIAR
        </Button>
      </form>
    </Section>
  );
}
