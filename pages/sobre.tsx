import Default from "../layouts/Default";
import { ReactElement, useRef } from "react";
import ReadMore from "@/components/readMore";

export default function Sobre() {
  const ReadMoreFunctions = useRef<{ changeHelperTextOpacity: VoidFunction }>(
    null
  );

  return (
    <>
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
        <div className="h-full overflow-y-scroll">
          <div className="mr-3">
            <p className="mb-3">
              Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris
              que eu tomo, mas ninguém vê os tombis que eu levo!Si num tem leite
              então bota uma pinga aí cumpadi!Nullam volutpat risus nec leo
              commodo, ut interdum diam laoreet. Sed non consequat
              odio.Delegadis gente finis, bibendum egestas augue arcu ut est. Si
              u mundo tá muito paradis?
            </p>
            <p className="mb-6">
              Toma um mé que o mundo vai girarzis!Viva Forevis aptent taciti
              sociosqu ad litora torquent.Copo furadis é disculpa de bebadis,
              arcu quam euismod magna.Admodum accumsan disputationi eu sit. Vide
              electram sadipscing et per.
            </p>
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

Sobre.getLayout = function getLayout(page: ReactElement) {
  return <Default navBar={1}>{page}</Default>;
};
