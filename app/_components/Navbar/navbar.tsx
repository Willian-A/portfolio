"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const navbarVariants = cva(
  "z-10 flex items-center justify-center gap-4 text-sm transition-colors bg-zinc-950 py-4 px-5 text-neutral-50",
  {
    variants: {
      variant: {
        default: "w-full border-b border-zinc-900",
        glass: "rounded-2xl glass",
      },
      position: {
        top: "absolute top-0 left-[50%] -translate-x-1/2",
        bottom: "absolute bottom-0 left-[50%] -translate-x-1/2",
        "fixed-bottom": "fixed left-[50%] -translate-x-1/2 bottom-5",
        "fixed-top": "fixed left-[50%] -translate-x-1/2 top-5",
      },
    },

    defaultVariants: {
      variant: "default",
      position: "top",
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

const Navbar = ({
  navigationItems,
  variant,
  className,
  position,
}: NavbarProps) => {
  const pathName = usePathname();

  return (
    <nav className={cn(navbarVariants({ variant, position, className }))}>
      {navigationItems.map((link, index) => (
        <Link
          key={`navbar-link-${index}`}
          href={link.href}
          className={cn(pathName === link.href && " underline")}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
