import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const ttInterphasesProMono = localFont({
  src: [
    {
      path: "./_fonts/TT Interphases Pro Mono Trial Var.ttf",
      weight: "variable",
      style: "normal",
    },
  ],
  variable: "--font-tt-interphases-pro-mono",
});

const VCR_OSD_MONO = localFont({
  src: [
    {
      path: "./_fonts/VCR_OSD_MONO.ttf",
      weight: "variable",
      style: "normal",
    },
  ],
  variable: "--font-vcr-osd-mono",
});

const ttInterphasesPro = localFont({
  src: [
    {
      path: "./_fonts/TT Interphases Pro Trial ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./_fonts/TT Interphases Pro Trial Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-tt-interphases-pro",
});

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
        className={`${ttInterphasesPro.variable} ${VCR_OSD_MONO.variable} ${ttInterphasesProMono.variable} bg-page max-w-[1440px] m-auto mb-4 md:p-6`}
      >
        {children}
      </body>
    </html>
  );
}
