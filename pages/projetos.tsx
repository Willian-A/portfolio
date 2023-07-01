import Default from "../layouts/Default";
import { ReactElement, useRef } from "react";
import ReadMore from "@/components/readMore";
import { ListItem } from "@/components/listItem";

export default function Projetos() {
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
        <div className="h-full overflow-scroll">
          <div className="mr-3">
            <div>
              <h2>Projetos que já realizei:</h2>
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
                <ListItem.Helper type="link" text="https://mussumipsum.com/" />
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
                <ListItem.Helper type="link" text="https://mussumipsum.com/" />
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
                <ListItem.Helper type="link" text="https://mussumipsum.com/" />
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
                <ListItem.Helper type="link" text="https://mussumipsum.com/" />
              </ListItem.Root>
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
