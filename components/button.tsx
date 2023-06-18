import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`px-1 py-2 rounded-lg bg-white-500 text-black focus:bg-white-900 hover:bg-white-900 duration-300 backdrop-blur-[2px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
