import { ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";

import "@/styles/globals.css";
import "@/styles/typography.css";

import { WavesBG } from "../components/wavesBackground";

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
    <AnimatePresence mode="wait">
      <Head>
        <title>Willian Almeida</title>
      </Head>
      <WavesBG />
      <main
        className={`relative p-3 h-full z-20 ${neueMontreal.variable} font-NeueMontreal`}
      >
        {getLayout(<Component {...pageProps} />)}
      </main>
    </AnimatePresence>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
