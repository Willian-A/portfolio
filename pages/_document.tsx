import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="bg-black h-full absolute w-full flex justify-center items-center">
        <section
          className={`
                p-3 
                h-[calc(100%-theme(space.4)-theme(space.3))] 
                w-[calc(100%-theme(space.4)-theme(space.3))] 
                border 
                border-solid 
                border-white-500 
                bg-page bg-cover 
                bg-no-repeat`}
        >
          <Main />
          <NextScript />
        </section>
      </body>
    </Html>
  );
}
