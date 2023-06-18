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
          className="relative w-full h-[120px] mt-4 mb-2 px-2 bg-transparent peer duration-300 z-10"
          onChange={(e) => setValue(e.target.value)}
        />
      );
    }

    return (
      <input
        className="relative w-full p-2 pt-4 bg-transparent peer duration-300 z-10"
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }, [isTextarea]);

  const handleDefaultTopDistance =
    value.length > 0
      ? "text-xs top-2"
      : "top-2/4 -translate-y-2/4 peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0";

  const handleTextAreaTopDistance =
    value.length > 0
      ? "text-xs top-2"
      : "top-5 -translate-y-2/4 peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0";

  return (
    <div
      className={`relative text-left border rounded-lg border-white-500 focus-within:border-white-900 duration-300 bg-black/25 ${className}`}
      {...rest}
    >
      <RenderInputTypes />
      <label
        className={`absolute font-light left-2 duration-300 z-0 ${
          isTextarea ? handleTextAreaTopDistance : handleDefaultTopDistance
        } `}
      >
        {placeholder}
      </label>
    </div>
  );
}
