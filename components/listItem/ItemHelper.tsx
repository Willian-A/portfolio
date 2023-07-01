interface ItemHelperProps {
  text: string;
  type?: "link" | "text";
}

export default function ItemHelper({ text, type = "text" }: ItemHelperProps) {
  return (
    <p className="font-medium text-white-500">
      {type === "text" ? (
        <>{text}</>
      ) : (
        <a target="_blank" href={text}>
          {text}
        </a>
      )}
    </p>
  );
}
