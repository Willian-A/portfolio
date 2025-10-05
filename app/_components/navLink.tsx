"use client";

import { cn } from "@/lib/utils";
import { useURLParams } from "../_hooks";
import { useSearchParams } from "next/navigation";
import { NavLinkPaths } from "../_shared/_types/pathNames";
import clsx from "clsx";

interface NavLinksProps {
  label: string;
  linkValue: NavLinkPaths;
}

export function NavLink({ label, linkValue }: NavLinksProps) {
  const searchParams = useSearchParams();
  const path = searchParams.get("path");
  const setPageLink = useURLParams("path");
  const isActivePath = path === linkValue;

  return (
    <button
      onClick={() => setPageLink(linkValue)}
      className={clsx(
        "relative flex uppercase font-semibold transition-colors duration-300 border",
        {
          "text-text-primary bg-accent-dark/20 border-accent-primary":
            isActivePath,
          "text-text-600 bg-bg-600/10 border-bg-600": !isActivePath,
        }
      )}
    >
      <p
        className={clsx(
          "text-sm py-2 px-4 text-inherit transition-colors duration-300",
          {
            "bg-accent-dark": isActivePath,
            "bg-bg-600": !isActivePath,
          }
        )}
      >
        /
      </p>
      <p className="text-sm py-2 px-4 text-inherit transition-colors duration-300">
        {label}
      </p>

      <div className="absolute z-50 -top-0.5 -left-0.5">
        <div
          className={clsx("w-2 h-0.5 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
        <div
          className={clsx("w-0.5 h-2 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
      </div>
      <div className="absolute z-50 -top-0.5 -right-0.5 flex flex-col items-end">
        <div
          className={clsx("w-2 h-0.5 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
        <div
          className={clsx("w-0.5 h-2 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
      </div>
      <div className="absolute z-50 -bottom-0.5 -left-0.5 flex flex-col">
        <div
          className={clsx("w-0.5 h-2 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
        <div
          className={clsx("w-2 h-0.5 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
      </div>
      <div className="absolute z-50 -bottom-0.5 -right-0.5 flex flex-col items-end">
        <div
          className={clsx("w-0.5 h-2 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
        <div
          className={clsx("w-2 h-0.5 bg-bg-400/30", {
            "bg-bg-400/100": isActivePath,
          })}
        ></div>
      </div>
    </button>
  );
}
