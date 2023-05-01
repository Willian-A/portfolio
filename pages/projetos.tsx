import Head from "next/head";
import Default from "../layouts/Default";
import { ReactElement, useRef } from "react";
import ReadMore from "@/components/readMore";

export default function Projetos() {
  const ReadMoreFunctions = useRef<{ changeHelperTextOpacity: VoidFunction }>(
    null
  );

  return (
    <>
      <Head>
        <title>Willian Almeida</title>
      </Head>
      <ReadMore ref={ReadMoreFunctions} />
      <div
        className="row-start-2 row-span-2 col-end-4 col-span-2 text-right overflow-hidden"
        onMouseEnter={() =>
          ReadMoreFunctions &&
          ReadMoreFunctions.current?.changeHelperTextOpacity()
        }
        onMouseLeave={() =>
          ReadMoreFunctions &&
          ReadMoreFunctions.current?.changeHelperTextOpacity()
        }
      >
        <div className="h-full overflow-scroll">
          <div className="mr-3">
            <div>
              <h2>Nec orci ornare consequat:</h2>
              <div className="mt-4">
                <h3 className="mb-2">Manduma pindureta</h3>
                <p className="mb-1">
                  Mussum Ipsum, cacilds vidis litro abertis. A ordem dos
                  tratores não altera o pão duris
                </p>
                <p className="font-medium text-white-500">
                  Nec orci ornare consequat
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2">Manduma pindureta</h3>
                <p className="mb-1">
                  Mussum Ipsum, cacilds vidis litro abertis. A ordem dos
                  tratores não altera o pão duris
                </p>
                <p className="font-medium text-white-500">
                  Nec orci ornare consequat
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2">Manduma pindureta</h3>
                <p className="mb-1">
                  Mussum Ipsum, cacilds vidis litro abertis. A ordem dos
                  tratores não altera o pão duris
                </p>
                <p className="font-medium text-white-500">
                  Nec orci ornare consequat
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-2">Manduma pindureta</h3>
                <p className="mb-1">
                  Mussum Ipsum, cacilds vidis litro abertis. A ordem dos
                  tratores não altera o pão duris
                </p>
                <p className="font-medium text-white-500">
                  Nec orci ornare consequat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Projetos.getLayout = function getLayout(page: ReactElement) {
  return <Default navBar={2}>{page}</Default>;
};
