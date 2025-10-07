import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input"> & {
  helperText?: string;
  error?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, helperText, error, ...props }, ref) => {
    return (
      <div className={cn("mb-2", className)}>
        <label
          className={cn("text-text-tertiary mb-1", { "text-red-500": error })}
        >
          {placeholder}
        </label>
        <input
          ref={ref}
          type={type}
          className={cn(
            "mb-1 flex w-full rounded border border-section-primary bg-transparent px-4 py-3 text-xl text-text-tertiary transition-colors placeholder:text-text-tertiary focus-visible:outline-none focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-50",
            { "border-red-500": error }
          )}
          {...props}
        />
        <p className={cn({ "text-red-500": error })}>{helperText}</p>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
