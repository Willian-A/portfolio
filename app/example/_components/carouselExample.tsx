import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components";

import { SearchResponse } from "../_types/albumSearch";

interface CarouselExampleProps {
  accessToken: string;
}
export const CarouselExample = async ({
  accessToken,
}: CarouselExampleProps) => {
  const albumsRequest = await fetch(
    "https://api.spotify.com/v1/search?" +
      new URLSearchParams({
        q: "sant bk don-l",
        type: "album",
        market: "BR",
      }).toString(),
    {
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    }
  );
  const albumsList: SearchResponse = await albumsRequest.json();

  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {albumsList.albums.items.map((album) => (
          <CarouselItem
            key={album.id}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="relative mb-2 w-full h-60 transition-opacity sm:size-60 md:size-44 lg:size-52">
              <Image
                className="rounded"
                src={album.images[1].url}
                alt={`Cover image from ${album.name}`}
                fill
              />
            </div>
            <div className="px-1">
              <h4 className="mb-1 truncate">{album.name}</h4>
              <p className="description truncate">
                {album.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
