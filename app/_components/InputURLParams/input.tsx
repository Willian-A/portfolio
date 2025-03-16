"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { Input, InputProps } from "../Input/input";

import { useDebounce, useURLParams } from "@/hooks";

interface InputURLParamsProps extends InputProps {
  name: string;
}

export const InputURLParams = ({
  onChange,
  defaultValue = "",
  ...rest
}: InputURLParamsProps) => {
  const [inputValue, setInputValue] = useState(String(defaultValue));

  const setInputURLParam = useURLParams(rest.name);
  const debouncedInputValue = useDebounce(inputValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputURLParam(debouncedInputValue);
  }, [debouncedInputValue, setInputURLParam]);

  return <Input onChange={handleInputChange} value={inputValue} {...rest} />;
};
