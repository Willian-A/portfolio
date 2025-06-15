"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const navbarVariants = cva(
  "z-40 hidden md:flex flex-col items-center justify-start gap-10 text-base transition-colors px-6 py-8 font-vcr font-normal text-text-tertiary bg-section-secondary/90",
  {
    variants: {
      variant: {
        glass: "rounded-full glass fixed h-[96vh]",
      },
    },

    defaultVariants: {
      variant: "glass",
    },
  }
);

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  navigationItems: {
    label: string;
    href: string | null;
  }[];
}

const Navbar = ({ navigationItems, variant, className }: NavbarProps) => {
  const searchParams = useSearchParams();
  const currentSection = searchParams.get("section");

  return (
    <nav className={cn(navbarVariants({ variant, className }))}>
      {navigationItems.map((link, index) => (
        <Link
          key={`navbar-link-${index}`}
          href={{ query: { section: link.href }, hash: link.href }}
          className={cn(
            (currentSection === link.href ||
              (!currentSection && index === 0)) &&
              " text-accent",
            "[writing-mode:sideways-lr] mr-1"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
