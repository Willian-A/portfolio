import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@/styles/globals.css";
import "@/styles/typography.css";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type FixedAppProps = AppProps & {
  Component: Page;
};

const neueMontreal = localFont({
  src: [
    {
      path: "../static/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../static/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../static/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neueMontreal",
});

export default function App({ Component, pageProps }: FixedAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <main className={`h-full ${neueMontreal.variable} font-NeueMontreal`}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
