import Head from "next/head";
import Default from "../layouts/Default";
import { ReactElement } from "react";
import Input from "@/components/input";
import Button from "@/components/button";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Willian Almeida</title>
      </Head>
      <div className="flex items-center justify-center row-span-3 col-start-2 col-span-2 text-right">
        <div className="flex flex-col w-[250px] ">
          <p className="text-center mb-2">
            Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus
            quis, vehicula ac nisi
          </p>
          <form className="flex flex-col">
            <Input className="mb-1" placeholder="Nome" />
            <Input className="mb-1" placeholder="Email" />
            <Input className="mb-3" placeholder="Mensagem" isTextarea />
            <Button>Enviar</Button>
          </form>
        </div>
      </div>
    </>
  );
}

Contato.getLayout = function getLayout(page: ReactElement) {
  return <Default navBar={3}>{page}</Default>;
};
