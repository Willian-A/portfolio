import { InputHTMLAttributes, useCallback, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isTextarea?: boolean;
}

export default function Input({
  isTextarea = false,
  className,
  placeholder,
  ...rest
}: InputProps) {
  const [value, setValue] = useState("");

  const RenderInputTypes = useCallback(() => {
    if (isTextarea) {
      return (
        <textarea
          className="relative w-full h-[120px] mt-4 mb-2 px-2 bg-transparent peer z-10"
          onChange={(e) => setValue(e.target.value)}
        />
      );
    }

    return (
      <input
        className="relative w-full p-2 pt-4 bg-transparent peer z-10"
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }, [isTextarea]);

  return (
    <div
      className={`relative text-left border rounded-lg border-white-500 focus:border-white-900 ${className}`}
      {...rest}
    >
      <RenderInputTypes />
      <label
        className={`absolute font-light top-2/4 left-2 -translate-y-2/4 z-0 ${
          !!value ? "text-xs top-2" : "peer-focus:text-xs peer-focus:top-2"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
}
