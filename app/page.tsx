import Image from "next/image";

import {
  Button,
  CMD,
  Input,
  Navbar,
  Section,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components";

const TECH_ICONS = [
  "css3",
  "cypress",
  "docker",
  "figma",
  "git",
  "github",
  "gitlab",
  "html5",
  "js",
  "mongodb",
  "mysql",
  "nextjs",
  "nodejs",
  "php",
  "python",
  "reactjs",
  "sass",
  "storybook",
  "threejs",
  "typescript",
];

const PROJECT_LIST = [
  {
    id: 1,
    name: "Project 1",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
  {
    id: 4,
    name: "Project 4",
    descriptions: [
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Etiam consequat imperdiet enim ut varius. Sed nunc dolor, scelerisque quis dignissim vel, hendrerit facilisis augue.  Nunc massa arcu, varius sed quam non, commodo elementum odio. Nullam  vehicula justo et maximus commodo. Ut sed malesuada turpis.",
      "Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut. Suspendisse sagittis feugiat nisi, quis iaculis sem sodales et. Vivamus  tempus condimentum nunc eu faucibus. Cras facilisis ullamcorper felis,  in commodo neque porta ut.",
    ],
    techs: ["react", "next.js", "tailwind css", "typescript", "zod", "axios"],
    images: [
      {
        url: "https://placehold.co/275x230",
      },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Navbar
        navigationItems={[
          { label: "home", href: null },
          { label: "sobre mim", href: "#sobre-mim" },
          { label: "projetos", href: "#projetos" },
          { label: "tecnologias", href: "#tecnologias" },
          { label: "contato", href: "#contato" },
        ]}
      />
      <main className="md:ml-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 overflow-x-show">
        <span className="absolute right-[5%] top-[35%] bg-accent rounded-3xl w-[165px] h-[285px]"></span>
        <span className="absolute -left-[5%] md:left-[45%] -bottom-[190%] md:-bottom-[58vh] bg-accent rounded-3xl w-[235px] h-[235px]"></span>
        <span className="hidden md:block absolute left-[5.5%] opacity-50 -bottom-[55vh] text-text-accent-light text-3xl font-bold">
          security protocol 1459-3 101
        </span>
        <div className="col-span-2 flex flex-col gap-4 md:gap-8">
          <div className="p-2 md:p-0">
            <h1 className="font-semibold text-4xl">willian de almeida</h1>
            <p className="text-text-secondary font-medium text-xl">
              # desenvolvedor web
            </p>
          </div>
          <Section
            className="h-[300px] p-0 md:p-0 rounded-none md:rounded-2xl"
            variant="dark"
            showVersionTag={false}
          >
            <div className="p-4 md:pl-8 absolute top-6 md:-left-4 bg-accent/75 glass rounded-none z-40 md:rounded-2xl">
              <div className="md:max-w-[550px]">
                <p className="mb-4">
                  Olá, eu sou o <b>Willian, desenvolvedor web</b> focado na área
                  de <b>front-end</b>. Apesar do foco em front-end, já trabalhei
                  como <b>desenvolvedor full-stack</b>.
                </p>
                <p>
                  Sou extremamente <b>curioso</b> e não largo problemas e bugs{" "}
                  <b>até que sejam resolvidos.</b> Além disso, costumo ser a
                  pessoa que deixa o clima das reuniões mais leve e
                  descontraído, tudo isso sem tirar o profissionalismo da
                  conversa.
                </p>
              </div>
            </div>
            <div className="relative w-full h-full p-4 flex justify-end items-end text-right rounded-none overflow-hidden z-10 opacity-75 md:rounded-2xl">
              <p className="relative z-40 text-text-accent-dark leading-[1.5] text-xs font-tt_interphases_mono">
                Message-Id:{" "}
                {`<3.0.6.32.19990707142016.007ab5d0@mail.bungie.com>`} <br />
                X-Sender: cortana@mail.bungie.com (Unverified)
                <br /> X-Mailer: QUALCOMM Windows Eudora Light Version 3.0.6
                (32)
                <br /> Date: Wed, 07 Jul 1999 14:20:16 -0500 <br />
                To: Hamish.Sinclair@tcd.ie From: Cortana{" "}
                {`<cortana@bungie.com>`}
                <br />
                Subject: Cortana Saves Sinners! (And Redeems Them for Valuable
                Cash Prizes)
                <br /> Mime-Version: 1.0 Content-Type: text/plain;
                {`charset="us-ascii"`} <br />
                X-UIDL: c6a5409b6a9998aa957a76a002e5df09
              </p>
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/bg.gif"
                alt="background"
                fill
              />
            </div>
          </Section>
          <Section
            title="sobre mim"
            description="um pouco mais sobre mim"
            className="text-text-secondary"
            id="sobre-mim"
          >
            <p className="mb-4">
              Trabalho como <b>desenvolvedor web há mais de quatro anos.</b>{" "}
              Tenho conhecimentos sobre{" "}
              <b>
                padrões de código, gestão de entregas, arquitetura de software,
                testes end-to-end, configuração de servidores, pipelines com
                GitHub Actions, configuração de VPS
              </b>{" "}
              e outros.
            </p>
            <p className="mb-4">
              Já trabalhei como <b>fullstack</b> utilizando{" "}
              <b>React, Node.js e MySQL</b> na criação de sites para o cadastro
              do público em eventos. Atualmente, trabalho como desenvolvedor
              front-end, mas atuo em todas as áreas do{" "}
              <b>
                desenvolvimento, desde o planejamento, desenvolvimento e
                coordenação até a entrega de features para o cliente e correções
                pós-entrega.
              </b>{" "}
              Também costumo ser a pessoa que mantém a equipe descontraída, já
              que gosto de conversar sobre assuntos aleatórios, curiosidades e
              bobeiras.
            </p>
            <p className="mb-4">
              Acredito que o{" "}
              <b>desenvolvimento deve ser feito com um objetivo;</b>
              portanto,{" "}
              <b>as tecnologias são apenas meios para esse objetivo.</b> Para
              mim,{" "}
              <b>
                pouco importa a linguagem ou framework, desde que sejam a melhor
                escolha e facilitem o trabalho em direção ao objetivoas
                tecnologias são apenas meios para esse objetivo definido.
              </b>{" "}
              Além disso, acredito fortemente que a{" "}
              <b>
                documentação, organização dos projetos e boa gestão da equipe
              </b>{" "}
              são a melhor forma de garantir uma boa entrega.
            </p>
          </Section>
          <Section
            title="projetos"
            description="projetos que já trabalhei ou fiz parte"
            id="projetos"
            className="section relative"
          >
            <Tabs defaultValue="Project 1" className="mt-4">
              <TabsList className="w-full gap-1 md:gap-2">
                {PROJECT_LIST.map((project) => (
                  <TabsTrigger
                    key={project.id}
                    value={project.name}
                    className="relative mb-2 transition-opacity"
                  >
                    <img
                      className="rounded"
                      src={project.images[0].url}
                      alt={`Cover image from ${project.name}`}
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
              {PROJECT_LIST.map((project) => (
                <TabsContent value={project.name} key={project.id}>
                  <div className="px-1">
                    <h3 className="mb-2">{project.name}</h3>
                    <p className="text-text-secondary mb-3">
                      {project.descriptions[0]}
                    </p>
                    <p className="text-text-secondary mb-4">
                      {project.descriptions[1]}
                    </p>
                    <h4 className="mb-1">tecnologias usadas</h4>
                    <p className="font-light">{project.techs.join(" - ")}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Section>
        </div>
        <div className="col-span-2 md:col-span-1 gap-4 md:gap-8 flex flex-col">
          <CMD />
          <Section
            className="section"
            title="tecnologias"
            description="tecnologias e ferramentas que já  utilizei"
            id="tecnologias"
          >
            <div className="grid grid-cols-4 gap-4">
              {TECH_ICONS.map((icon) => (
                <Image
                  key={icon}
                  src={`/tech_icons/${icon}.svg`}
                  alt={icon}
                  className="m-auto hover:scale-110 transition-all"
                  height={64}
                  width={64}
                />
              ))}
            </div>
          </Section>
          <Section
            className="section"
            title="contato"
            variant="dark"
            id="contato"
          >
            <p className="text-accent mb-4">
              # gostou do que viu? <br />
              # quer conversar sobre algo? <br />
              # tem algum projeto legal pra mim? <br /># entre em contato
            </p>
            <Input placeholder="seu e-mail" type="email" className="mb-2" />
            <Input placeholder="mensagem" type="text" className="mb-6" />
            <Button type="submit" className=" justify-start" size="lg">
              ENVIAR
            </Button>
          </Section>
        </div>
      </main>
    </div>
  );
}
