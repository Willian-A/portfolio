import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="row-start-2">
        <section className="flex flex-col gap-8 items-center text-center sm:items-start sm:text-left">
          <div className="flex flex-col gap-4 items-center sm:flex-row">
            <Image src="/logo.png" alt="Hefestos Logo" width={32} height={32} />
            <h4>
              This is Hefestos Boilerplate, a personal boilerplate for my
              projects, feel free to use it.
            </h4>
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Button>
              <Link href="example">Check some components</Link>
            </Button>
            <Button variant="link">
              <a
                href="https://github.com/Willian-A/hefestos-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check the repo
              </a>
            </Button>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Willian-A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          My Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/_willian.almeida/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          My Instagram
        </a>
      </footer>
    </div>
  );
}
