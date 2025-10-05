import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Willian - Desenvolvedor Web Front-end & Full-stack",
  description:
    "Desenvolvedor web com 4+ anos de experiência, especializado em front-end e soluções completas (React, Node.js, MySQL). Apaixonado por resolver problemas, otimizar workflows (GitHub Actions, VPS) e manter equipes produtivas e descontraídas. Foco em entregas estratégicas, documentação clara e escolha inteligente de tecnologias para atingir objetivos.",
};

// If loading a variable font, you don't need to specify the font weight
const IBMPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--ibm-plex-sans",
});
const IBMPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--ibm-plex-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IBMPlexSans.variable} ${IBMPlexMono.variable} bg-bg-primary p-4`}
      >
        {children}
      </body>
    </html>
  );
}
