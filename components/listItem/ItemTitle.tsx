interface ItemTitleProps {
  text: string;
}

export default function ItemTitle({ text }: ItemTitleProps) {
  return <h3 className="mb-2">{text}</h3>;
}
