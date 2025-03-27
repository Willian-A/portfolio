import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("z-30 flex flex-col rounded-3xl p-6 glass", {
  variants: {
    variant: {
      default: "bg-section-primary/60",
      dark: "bg-section-secondary/90",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  title?: string;
  description?: string;
  showVersionTag?: boolean;
}

const Section = ({
  title,
  description,
  className,
  variant,
  children,
  showVersionTag = true,
  ...rest
}: SectionProps) => {
  const generateRandomVersion = () => {
    const number = Math.floor(Math.random() * 900) + 100;
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return `v-${number} ${letter}`;
  };

  const generateRandomPosition = () => {
    const randomTopPercentage = (limit = false) => {
      if (limit) return `${Math.floor(Math.random() * 75)}%`;
      const options = ["-20px", "calc(100% - 15px)"];
      return options[Math.floor(Math.random() * options.length)];
    };
    const randomLeftPercentage = (limit = false) => {
      if (limit) return `${Math.floor(Math.random() * 75)}%`;
      const options = ["-15px", "calc(100% - 15px)"];
      return options[Math.floor(Math.random() * options.length)];
    };

    const randomRotation = () => {
      const rotations = ["sideways-rl", "sideways-lr", "horizontal-tb"];
      return rotations[Math.floor(Math.random() * rotations.length)];
    };

    let rotate = randomRotation() as React.CSSProperties["writingMode"];
    let top, left;

    if (rotate === "horizontal-tb") {
      top = randomTopPercentage();
    }
    if (rotate === "sideways-lr" || rotate === "sideways-rl") {
      top = randomTopPercentage(true);
    }

    if (rotate === "horizontal-tb") {
      left = randomLeftPercentage(true);
    }
    if (rotate === "sideways-lr" || rotate === "sideways-rl") {
      left = randomLeftPercentage();
    }

    if (rotate === "sideways-lr" && left === "100%") {
      rotate = "sideways-rl";
    } else if (rotate === "sideways-rl" && left === "-20px") {
      rotate = "sideways-lr";
    }

    return { top, left, rotate };
  };

  const randomVersionPosition = generateRandomPosition();

  return (
    <section className={cn(sectionVariants({ variant, className }))} {...rest}>
      {showVersionTag && (
        <span
          className={cn(
            "absolute text-xs w-max h-max font-bold p-2 rounded-sm text-text-tertiary bg-accent-contrast"
          )}
          style={{
            top: randomVersionPosition.top,
            left: randomVersionPosition.left,
            writingMode: randomVersionPosition.rotate,
          }}
        >
          {generateRandomVersion()}
        </span>
      )}
      {title && (
        <h2 className={cn(variant === "dark" && "text-accent", "mb-1")}>
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            variant === "dark" ? "text-accent" : "text-text-secondary",
            "font-medium mb-5"
          )}
        >
          # {description}
        </p>
      )}
      {children}
    </section>
  );
};

Section.displayName = "Section";

export { Section };
