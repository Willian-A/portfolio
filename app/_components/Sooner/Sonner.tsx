"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-section-secondary/80 group-[.toaster]:text-accent group-[.toaster]:border-zinc-700  group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-md",
          description: "!text-accent",
          title:
            "group-[.toaster]:font-bold group-[.toaster]:font-tt_interphases_mono",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
