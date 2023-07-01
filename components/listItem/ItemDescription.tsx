interface ItemDescriptionProps {
  text: string;
}
export default function ItemDescription({ text }: ItemDescriptionProps) {
  return <p className="mb-1">{text}</p>;
}
