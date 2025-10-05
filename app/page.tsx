import clsx from "clsx";
import { NavLink } from "./_components/navLink";

import { NavLinkPaths } from "./_shared/_types/pathNames";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ path: NavLinkPaths }>;
}) {
  const path = (await searchParams).path;

  return (
    <div className="relative grid grid-cols-10 grid-rows-12 h-[96vh] w-full bg-bg-900/80 border border-bg-600 m-auto">
      <div className="absolute z-50 -top-1 -left-1">
        <div className="w-4 h-0.5 bg-bg-400"></div>
        <div className="w-0.5 h-4 bg-bg-400"></div>
      </div>

      <div className="absolute z-50 -top-1 -right-1 flex flex-col items-end">
        <div className="w-4 h-0.5 bg-bg-400"></div>
        <div className="w-0.5 h-4 bg-bg-400"></div>
      </div>

      <div className="absolute z-50 -bottom-1 -left-1 flex flex-col">
        <div className="w-0.5 h-4 bg-bg-400"></div>
        <div className="w-4 h-0.5 bg-bg-400"></div>
      </div>

      <div className="absolute z-50 -bottom-1 -right-1 flex flex-col items-end">
        <div className="w-0.5 h-4 bg-bg-400"></div>
        <div className="w-4 h-0.5 bg-bg-400"></div>
      </div>
      <header className="border-b border-bg-600 col-span-10 row-span-1 w-full px-6 flex items-center">
        <div className="flex items-center gap-4">
          <h2 className="">Lorem ipsum dolor sit amet</h2>
          <h2 className="text-text-600">/</h2>
          <h2 className="text-text-600">Lorem ipsum dolor sit amet</h2>
        </div>
      </header>
      <main className="flex flex-col gap-8 col-span-7 row-span-10 p-6">
        {(path === "about" || path === "knowledge") && (
          <>
            <div className="flex flex-col gap-3 mb-8">
              <h2
                className={clsx("transition-colors duration-300", {
                  "text-accent-primary": path === "about",
                })}
              >
                /quem sou eu
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fermentum congue urna sed pretium. Nam id tortor
                ipsum. Nunc nibh ex, interdum sed tortor nec, luctus vehicula
                neque. Vestibulum a neque erat. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Vestibulum accumsan tortor sed mi condimentum, at lobortis elit
                faucibus. Mauris hendrerit consectetur elementum. In pretium,
                ipsum ac molestie elementum, sem ex imperdiet nulla, sit amet
                bibendum leo ante at ante. Sed pellentesque tellus id quam
                vestibulum, eu lobortis libero ornare. Etiam sed porttitor quam.
                Praesent faucibus nisl vitae consectetur placerat. Mauris
                rhoncus sem mi, nec placerat erat varius ut. Ut non felis sed
                sem maximus tincidunt sed eget nisl. Phasellus scelerisque metus
                nec lectus viverra ultrices aliquet dapibus nibh. Nulla suscipit
                lorem gravida tempor venenatis. Vivamus vehicula mollis quam, ut
                ultricies lectus lobortis at. In consequat leo ac libero egestas
                laoreet auctor quis libero. Aliquam efficitur blandit urna quis
                suscipit. Nulla a molestie lectus, sit amet ultrices arcu. Ut
                rhoncus orci porta nunc lobortis tincidunt.
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <h2
                className={clsx("transition-colors duration-300", {
                  "text-accent-primary": path === "knowledge",
                })}
              >
                /Meus conhecimentos
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fermentum congue urna sed pretium. Nam id tortor
                ipsum. Nunc nibh ex, interdum sed tortor nec, luctus vehicula
                neque. Vestibulum a neque erat. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Vestibulum accumsan tortor sed mi condimentum, at lobortis elit
                faucibus.
              </p>
              <div className="grid grid-cols-5 gap-3">
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
                <div className="w-full h-20 bg-bg-primary/60 border border-bg-600/30 rounded-sm clip-path-button"></div>
              </div>
            </div>
          </>
        )}
        {(path === "experiences" || path === "projects") && (
          <>
            <div className="flex flex-col gap-3 mb-8">
              <h2
                className={clsx("transition-colors duration-300", {
                  "text-accent-primary": path === "experiences",
                })}
              >
                /minhas experiencias
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fermentum congue urna sed pretium. Nam id tortor
                ipsum. Nunc nibh ex, interdum sed tortor nec, luctus vehicula
                neque. Vestibulum a neque erat. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Vestibulum accumsan tortor sed mi condimentum, at lobortis elit
                faucibus. Mauris hendrerit consectetur elementum. In pretium,
                ipsum ac molestie elementum, sem ex imperdiet nulla, sit amet
                bibendum leo ante at ante. Sed pellentesque tellus id quam
                vestibulum, eu lobortis libero ornare. Etiam sed porttitor quam.
                Praesent faucibus nisl vitae consectetur placerat. Mauris
                rhoncus sem mi, nec placerat erat varius ut. Ut non felis sed
                sem maximus tincidunt sed eget nisl. Phasellus scelerisque metus
                nec lectus viverra ultrices aliquet dapibus nibh. Nulla suscipit
                lorem gravida tempor venenatis. Vivamus vehicula mollis quam, ut
                ultricies lectus lobortis at. In consequat leo ac libero egestas
                laoreet auctor quis libero. Aliquam efficitur blandit urna quis
                suscipit. Nulla a molestie lectus, sit amet ultrices arcu. Ut
                rhoncus orci porta nunc lobortis tincidunt.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2
                className={clsx("transition-colors duration-300", {
                  "text-accent-primary": path === "projects",
                })}
              >
                /meus projetos
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fermentum congue urna sed pretium. Nam id tortor
                ipsum. Nunc nibh ex, interdum sed tortor nec, luctus vehicula
                neque. Vestibulum a neque erat. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Vestibulum accumsan tortor sed mi condimentum, at lobortis elit
                faucibus. Mauris hendrerit consectetur elementum. In pretium,
                ipsum ac molestie elementum, sem ex imperdiet nulla, sit amet
                bibendum leo ante at ante. Sed pellentesque tellus id quam
                vestibulum, eu lobortis libero ornare. Etiam sed porttitor quam.
                Praesent faucibus nisl vitae consectetur placerat. Mauris
                rhoncus sem mi, nec placerat erat varius ut. Ut non felis sed
                sem maximus tincidunt sed eget nisl. Phasellus scelerisque metus
                nec lectus viverra ultrices aliquet dapibus nibh. Nulla suscipit
                lorem gravida tempor venenatis. Vivamus vehicula mollis quam, ut
                ultricies lectus lobortis at. In consequat leo ac libero egestas
                laoreet auctor quis libero. Aliquam efficitur blandit urna quis
                suscipit. Nulla a molestie lectus, sit amet ultrices arcu. Ut
                rhoncus orci porta nunc lobortis tincidunt.
              </p>
            </div>
          </>
        )}
      </main>
      <aside className="relative grid grid-rows-12 border-l border-bg-600 col-span-3 row-span-10">
        <div className="row-span-1 border-b border-bg-600 p-3 flex justify-center items-center">
          <h2>Lorem ipsum dolor sit amet</h2>
        </div>
        <div className="relative row-span-11 px-6 py-4">
          <div className="absolute -top-2 -left-2">
            <div className="relative w-4 h-4">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-bg-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-bg-400 transform -translate-x-1/2"></div>
            </div>
          </div>

          <div className="absolute -top-2 -right-2">
            <div className="relative w-4 h-4">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-bg-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-bg-400 transform -translate-x-1/2"></div>
            </div>
          </div>

          <div className="absolute -bottom-2 -left-2">
            <div className="relative w-4 h-4">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-bg-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-bg-400 transform -translate-x-1/2"></div>
            </div>
          </div>

          <div className="absolute -bottom-2 -right-2">
            <div className="relative w-4 h-4">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-bg-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-bg-400 transform -translate-x-1/2"></div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fermentum congue urna sed pretium. Nam id tortor ipsum. Nunc nibh
            ex, interdum sed tortor nec, luctus vehicula neque. Vestibulum a
            neque erat. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vestibulum accumsan tortor
            sed mi condimentum, at lobortis elit faucibus. Mauris hendrerit
            consectetur elementum. In pretium, ipsum ac molestie elementum, sem
            ex imperdiet nulla, sit amet bibendum leo ante at ante. Sed
            pellentesque tellus id quam vestibulum, eu lobortis libero ornare.
            Etiam sed porttitor quam. Praesent faucibus nisl vitae consectetur
            placerat. Mauris rhoncus sem mi, nec placerat erat varius ut. Ut non
            felis sed sem maximus tincidunt sed eget nisl. Phasellus scelerisque
            metus nec lectus viverra ultrices aliquet dapibus nibh. Nulla
            suscipit lorem gravida tempor venenatis. Vivamus vehicula mollis
            quam, ut ultricies lectus lobortis at. In consequat leo ac libero
            egestas laoreet auctor quis libero. Aliquam efficitur blandit urna
            quis suscipit. Nulla a molestie lectus, sit amet ultrices arcu. Ut
            rhoncus orci porta nunc lobortis tincidunt.
          </p>
        </div>
      </aside>
      <nav className="col-span-12 row-span-1 grid grid-cols-10 border-t border-bg-600">
        <div className="col-span-5 flex items-center justify-between border-bg-600 h-full px-4">
          <NavLink linkValue="about" label="quem sou eu" />
          <NavLink linkValue="knowledge" label="meus conhecimentos" />
          <NavLink linkValue="experiences" label="minhas experiencias" />
          <NavLink linkValue="projects" label="meus projetos" />
        </div>
        <div className="col-span-2 flex items-center justify-between gap-4 border-l border-bg-600 h-full px-6"></div>
        <div className="col-span-3 flex items-center justify-between gap-4 border-l border-bg-600 h-full px-6">
          <h3>Gostou do que viu?</h3>
          <button className="primary">Entre em contato</button>
        </div>
      </nav>
    </div>
  );
}
