"use client";

import { ReactElement, useEffect, useState } from "react";
import { getRandomInt } from "@/lib/utils";
import { logMessage } from "@/constants/logMessage";
import { Section } from "@/components/Section/Section";

export const CMDSection = () => {
  const [messages, setMessages] = useState<ReactElement[]>([]);
  const [messagesIndex, setMessagesIndex] = useState(0);

  const lines = logMessage.trim().split("\n");

  const result = lines.map((line) => {
    const match = line.match(
      /^\[(\d{2}:\d{2}:\d{2})\]\s+(.+?)\s{2,}(.+?)\s{2,}(OK|ERROR|START|FAIL|WARNING)$/
    );
    if (match) {
      return [match[1], match[2].trim(), match[3].trim(), match[4]];
    } else {
      return line.trim();
    }
  });

  const formatLogMessages = (line: string | string[], index: number) => {
    if (typeof line === "object") {
      return (
        <div key={line[0]} className="grid grid-cols-6 gap-1 w-full">
          <p className="text-[10px] col-span-3">
            [{line[0]}] {line[1]}
          </p>
          <p className="text-[10px] col-span-2">{line[2]}</p>
          <p className="text-[10px] text-right">{line[3]}</p>
        </div>
      );
    }

    if (line.includes("----")) {
      return (
        <p className="my-4 font-bold text-[10px]" key={line}>
          {line}
        </p>
      );
    }

    if (line.includes("-")) {
      return (
        <p className="text-[10px] my-4 font-bold" key={line}>
          {line}
        </p>
      );
    }

    if (line.includes("Operator Signature")) {
      return (
        <p className="text-[10px] mt-4" key={line}>
          {line}
        </p>
      );
    }

    if (line.includes("Status:")) {
      return (
        <p className="text-[10px] mb-6" key={line}>
          {line}
        </p>
      );
    }
    if (index + 1 === result.length) {
      return (
        <p className="text-[12px] font-bold text-center" key={line}>
          {line}
        </p>
      );
    }

    return (
      <p className="text-[10px]" key={line + index}>
        {line}
      </p>
    );
  };

  useEffect(() => {
    if (messagesIndex < result.length) {
      const interval = setTimeout(() => {
        const formattedMessage = formatLogMessages(
          result[messagesIndex],
          messagesIndex
        );
        setMessages([...messages, formattedMessage]);
        setMessagesIndex(messagesIndex + 1);
      }, getRandomInt(100, 400));

      return () => clearTimeout(interval);
    }
  }, [messagesIndex]);

  return (
    <Section
      variant="dark"
      className="hidden md:flex flex-col-reverse h-[400px] overflow-hidden"
      showVersionTag={false}
    >
      <div className="text-text-accent-dark text-[10px] font-tt_interphases_mono">
        {messages}
      </div>
    </Section>
  );
};
