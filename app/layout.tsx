import type { Metadata } from "next";

import "./globals.css";

import {
  ttInterphasesPro,
  ttInterphasesProMono,
  VCR_OSD_MONO,
} from "./_contants/fonts";

export const metadata: Metadata = {
  title: "Hefestos Boilerplate",
  description:
    "A boilerplate with build-in components and custom design builded with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ttInterphasesPro.variable} ${VCR_OSD_MONO.variable} ${ttInterphasesProMono.variable} bg-page max-w-[1440px] m-auto mb-12 md:p-6`}
      >
        {children}
      </body>
    </html>
  );
}
