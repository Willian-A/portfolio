import { ReactNode } from "react";

interface ItemRootProps {
  children: ReactNode;
}

export default function ItemRoot({ children }: ItemRootProps) {
  return <div className="mt-4">{children}</div>;
}
