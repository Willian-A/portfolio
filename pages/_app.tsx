import { ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
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

export default function App({ Component, pageProps }: FixedAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <AnimatePresence mode="wait">
      <Head>
        <title>Willian Almeida</title>
      </Head>
      <WavesBG />
      <main className={`relative p-3 h-full z-20`}>
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
