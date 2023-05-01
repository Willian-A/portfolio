import Head from "next/head";
import Default from "../layouts/Default";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Willian Almeida</title>
      </Head>
      <p className="row-start-3 col-end-4 col-span-2 text-right">
        Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
        pessoas mais interessantis.Interagi no mé, cursus quis, vehicula ac
        nisi.Detraxit consequat et quo num tendi nada.In elementis mé pra quem é
        amistosis quis leo. Interessantiss quisso pudia ce receita de bolis,
        mais bolis eu num gostis.Quem manda na minha terra sou euzis!Suco de
        cevadiss deixa as pessoas mais interessantis.Quem num gosta di mé, boa
        gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e
        fazendo pose.Não sou faixa preta cumpadi, sou preto inteiris,
        inteiris.Atirei o pau no gatis, per gatis num morreus.Interagi no mé,
        cursus quis, vehicula ac nisi.
      </p>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default navBar={0}>{page}</Default>;
};
