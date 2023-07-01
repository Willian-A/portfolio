import Default from "../layouts/Default";
import { ReactElement } from "react";
import Input from "@/components/input";
import Button from "@/components/button";

export default function Contato() {
  return (
    <div className="flex items-center justify-center row-span-3 col-start-2 col-span-2 text-right">
      <div className="flex flex-col w-[320px]">
        <p className="text-center mb-4">
          Preencha o formulário para trabalharmos juntos e transformar suas
          ideias em realidade.
        </p>
        <form className="flex flex-col">
          <Input className="mb-1" placeholder="Nome" />
          <Input className="mb-1" placeholder="Email" />
          <Input className="mb-3" placeholder="Mensagem" isTextarea />
          <Button>Enviar</Button>
        </form>
      </div>
    </div>
  );
}

Contato.getLayout = function getLayout(page: ReactElement) {
  return <Default navBar={3}>{page}</Default>;
};
