import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <>
        <label className="text-text-tertiary mb-1">{placeholder}</label>
        <input
          type={type}
          className={cn(
            "flex w-full rounded border border-section-primary bg-transparent px-4 py-3 text-xl text-text-tertiary transition-colors placeholder:text-text-tertiary focus-visible:outline-none focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
