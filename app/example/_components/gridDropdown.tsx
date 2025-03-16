"use client";

import { useEffect, useState } from "react";
import { LayoutGrid } from "lucide-react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components";

import { useURLParams } from "@/hooks";

interface GridDropdownProps {
  currentGrid: string;
}

export const GridDropdown = ({ currentGrid }: GridDropdownProps) => {
  const [gridOption, setGridOption] = useState(currentGrid);

  const setGridURLParam = useURLParams("grid");

  useEffect(() => {
    setGridURLParam(gridOption);
  }, [gridOption, setGridURLParam]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <LayoutGrid />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Items per row</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={gridOption}
          onValueChange={(value) => setGridOption(value)}
        >
          <DropdownMenuRadioItem value="4">4 items</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="6">6 items</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="8">8 items</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
