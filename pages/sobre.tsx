import Default from "../layouts/Default";
import { ReactElement, useRef } from "react";
import ReadMore from "@/components/readMore";
import { ListItem } from "@/components/listItem";

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
            <p className="mb-6">
              Nesta seção, você encontrará um resumo sobre a minha jornada de
              estudante e profissional na área de Desenvolvimento Web, desde
              minha formação até as experiências que moldaram minha carreira.
              Conheça um pouco mais sobre mim e como cheguei até aqui.
            </p>
            <div>
              <h2>Experiências e formações:</h2>
              <ListItem.Root>
                <ListItem.Title text="Pra lá , depois divoltis porris, paradis" />
                <ListItem.Description
                  text={`Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os
                  porris que eu tomo, mas ninguém vê os tombis que eu
                  levo!Mauris nec dolor in eros commodo tempor. Aenean aliquam
                  molestie leo, vitae iaculis nisl.Aenean aliquam molestie leo,
                  vitae iaculis nisl.Praesent malesuada urna nisi, quis volutpat
                  erat hendrerit non. Nam vulputate dapibus.`}
                />
                <ListItem.Helper text="De 09/20 à 02/24" />
              </ListItem.Root>
              <ListItem.Root>
                <ListItem.Title text="Pra lá , depois divoltis porris, paradis" />
                <ListItem.Description
                  text={`Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os
                  porris que eu tomo, mas ninguém vê os tombis que eu
                  levo!Mauris nec dolor in eros commodo tempor. Aenean aliquam
                  molestie leo, vitae iaculis nisl.Aenean aliquam molestie leo,
                  vitae iaculis nisl.Praesent malesuada urna nisi, quis volutpat
                  erat hendrerit non. Nam vulputate dapibus.`}
                />
                <ListItem.Helper text="De 09/20 à 02/24" />
              </ListItem.Root>
              <ListItem.Root>
                <ListItem.Title text="Pra lá , depois divoltis porris, paradis" />
                <ListItem.Description
                  text={`Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os
                  porris que eu tomo, mas ninguém vê os tombis que eu
                  levo!Mauris nec dolor in eros commodo tempor. Aenean aliquam
                  molestie leo, vitae iaculis nisl.Aenean aliquam molestie leo,
                  vitae iaculis nisl.Praesent malesuada urna nisi, quis volutpat
                  erat hendrerit non. Nam vulputate dapibus.`}
                />
                <ListItem.Helper text="De 09/20 à 02/24" />
              </ListItem.Root>
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
