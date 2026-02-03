"use client";

import { useState } from "react";
import { Section } from "@/components/Section/Section";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip/Tooltip";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);

  const email = "willian.contatoal@gmail.com";

  const resetStates = () => {
    setHoverEmail(false);
    setTimeout(() => {
      setCopied(false);
    }, 100);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Section className="section" variant="dark" title="contato" id="contato">
      <p className="text-accent mb-4"># deseja entrar em contato?</p>

      <div className="flex flex-wrap gap-4 text-text-tertiary font-semibold text-lg">
        <Tooltip open={hoverEmail}>
          <TooltipTrigger asChild>
            <a
              onClick={handleCopyEmail}
              onMouseEnter={() => setHoverEmail(true)}
              onMouseLeave={resetStates}
              className="cursor-pointer transition-all duration-300 hover:scale-105"
            >
              {email}
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copiado!" : "Clique para copiar"}</p>
          </TooltipContent>
        </Tooltip>

        <a
          href="https://linkedin.com/in/willian-al"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-105"
        >
          in/willian-al
        </a>
      </div>
    </Section>
  );
}
