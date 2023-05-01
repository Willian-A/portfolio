import Link from "next/link";
import { ReactNode } from "react";

interface DefaultProps {
  children: ReactNode;
  navBar: 0 | 1 | 2 | 3;
}

export default function Default({ children, navBar }: DefaultProps) {
  return (
    <div className="h-full grid gap-5 grid-rows-3 grid-cols-3">
      <aside className="row-span-2 grid gap-5 grid-rows-3 grid-cols-3">
        <div className="col-span-3">
          <h1>Willian Almeida</h1>
          <p className="font-normal">Desenvolvedor Front-end</p>
        </div>
        <nav className="flex flex-col">
          <Link href="/" className={navBar === 0 ? "font-normal" : ""}>
            Home
          </Link>
          <Link href="/sobre" className={navBar === 1 ? "font-normal" : ""}>
            Sobre
          </Link>
          <Link href="/projetos" className={navBar === 2 ? "font-normal" : ""}>
            Projetos
          </Link>
          <Link href="/contato" className={navBar === 3 ? "font-normal" : ""}>
            Contato
          </Link>
        </nav>
      </aside>
      <main className="row-span-3 col-span-2 grid gap-5 grid-rows-3 grid-cols-3 animate-slideUpEnter">
        {children}
      </main>
    </div>
  );
}
