import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface DefaultProps {
  children: ReactNode;
  navBar: 0 | 1 | 2 | 3;
}

export default function Default({ children, navBar }: DefaultProps) {
  const router = useRouter();
  return (
    <div className="h-full grid gap-5 grid-rows-3 grid-cols-3">
      <aside className="row-span-2 grid gap-5 grid-rows-3 grid-cols-3">
        <div className="col-span-3">
          <h1 className="mb-1">Willian Almeida</h1>
          <p className="font-normal">Desenvolvedor Front-end</p>
        </div>
        <nav className="flex flex-col">
          <Link
            href="/"
            className={`duration-300 ${navBar === 0 ? "font-normal" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className={`duration-300 ${navBar === 1 ? "font-normal" : ""}`}
          >
            Sobre
          </Link>
          <Link
            href="/projetos"
            className={`duration-300 ${navBar === 2 ? "font-normal" : ""}`}
          >
            Projetos
          </Link>
          <Link
            href="/contato"
            className={`duration-300 ${navBar === 3 ? "font-normal" : ""}`}
          >
            Contato
          </Link>
        </nav>
      </aside>
      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
        className="row-span-3 col-span-2 grid gap-5 grid-rows-3 grid-cols-3 animate-slideUpEnter"
      >
        {children}
      </motion.main>
    </div>
  );
}
