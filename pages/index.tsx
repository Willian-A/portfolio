import Default from "../layouts/Default";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div className="row-start-3 col-end-4 col-span-2 text-right">
      <p className="mb-3">
        Sou Willian de Almeida Santos, um Desenvolvedor Web apaixonado por criar
        soluções digitais incríveis. Aqui você encontrará uma amostra do meu
        trabalho e da minha dedicação em transformar ideias em realidade.
      </p>
      <p className="mb-3">
        Com minha experiência em desenvolvimento front-end e back-end, estou
        sempre buscando inovar e me aprimorar nas tecnologias mais recentes.
        Tenho habilidades em HTML, CSS, JavaScript, React e muitas outras
        ferramentas que me permitem criar sites e aplicativos modernos,
        responsivos e visualmente atraentes. Seja um projeto pequeno ou uma
        aplicação complexa, estou pronto para enfrentar qualquer desafio e
        encontrar as melhores soluções para atender às suas necessidades. Minha
        abordagem é centrada no usuário, sempre focada em oferecer uma
        experiência excepcional e funcional.
      </p>
      <p>
        Navegue pelo meu portfólio e confira os projetos nos quais trabalhei. Se
        você estiver procurando por um desenvolvedor web confiável, comprometido
        e apaixonado por tecnologia, entre em contato comigo. Estou ansioso para
        colaborar com você e ajudar a transformar suas ideias em realidade
        digital.
      </p>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default navBar={0}>{page}</Default>;
};
