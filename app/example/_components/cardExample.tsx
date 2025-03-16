import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components";

import { AlbumsItem } from "../_types/albumSearch";

interface CardExampleProps {
  albumInfo: AlbumsItem;
}

export const CardExample = ({ albumInfo }: CardExampleProps) => {
  return (
    <Card className="w-full max-w-xs h-min">
      <a
        key={albumInfo.id}
        className="flex flex-col truncate"
        href={albumInfo.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardHeader>
          <Image
            className="rounded"
            src={albumInfo.images[1].url}
            alt={`Cover image from ${albumInfo.name}`}
            width={albumInfo.images[1].width}
            height={albumInfo.images[1].height}
          />
        </CardHeader>
        <CardContent>
          <h4 className="mb-1 truncate">{albumInfo.name}</h4>
          <p className="description truncate">
            {albumInfo.artists.map((artist) => artist.name).join(", ")}
          </p>
        </CardContent>
      </a>
    </Card>
  );
};
