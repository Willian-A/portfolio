import type { Metadata } from "next";

import "./globals.css";

import {
  ttInterphasesPro,
  ttInterphasesProMono,
  VCR_OSD_MONO,
} from "./_constants/fonts";

import { Toaster } from "@/components/Sooner/Sonner";
import { TooltipProvider } from "@/components/Tooltip/Tooltip";

export const metadata: Metadata = {
  title: "Willian - Desenvolvedor Web Front-end & Full-stack",
  description:
    "Desenvolvedor web com 4+ anos de experiência, especializado em front-end e soluções completas (React, Node.js, MySQL). Apaixonado por resolver problemas, otimizar workflows (GitHub Actions, VPS) e manter equipes produtivas e descontraídas. Foco em entregas estratégicas, documentação clara e escolha inteligente de tecnologias para atingir objetivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <html lang="en">
        <body
          className={`${ttInterphasesPro.variable} ${VCR_OSD_MONO.variable} ${ttInterphasesProMono.variable} bg-page max-w-[1440px] m-auto mb-12 md:p-6`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </TooltipProvider>
  );
}
