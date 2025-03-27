"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const navbarVariants = cva(
  "z-40 flex flex-col items-center justify-start gap-10 text-sm transition-colors px-6 py-8 font-vcr font-normal text-text-tertiary bg-section-secondary/90",
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
    href: string;
  }[];
}

const Navbar = ({ navigationItems, variant, className }: NavbarProps) => {
  const pathName = usePathname();

  return (
    <nav className={cn(navbarVariants({ variant, className }))}>
      {navigationItems.map((link, index) => (
        <Link
          key={`navbar-link-${index}`}
          href={link.href}
          className={cn(
            pathName === link.href && " text-accent",
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
