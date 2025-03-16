import Image from "next/image";

import { InputURLParams, Navbar } from "@/components";
import { SheetExample } from "./_components/sheetExample";
import { GridDropdown } from "./_components/gridDropdown";
import { cn } from "@/lib/utils";

import { AuthResponse, SearchResponse } from "./_types/albumSearch";
import { CarouselExample } from "./_components/carouselExample";
import { CardExample } from "./_components/cardExample";
import { AccordionExample } from "./_components/accordionExample";

const GRID_ITEMS_ENUM = {
  "4": "sm:grid-cols-4 sm:gap-x-4 sm:gap-y-6",
  "6": "sm:grid-cols-6 sm:gap-x-4 sm:gap-y-6",
  "8": "sm:grid-cols-8 sm:gap-x-2 sm:gap-y-4",
};

const API_ENDPOINTS = {
  SPOTIFY_TOKEN: "https://accounts.spotify.com/api/token",
  SPOTIFY_SEARCH: "https://api.spotify.com/v1/search",
};

const DEFAULT_SEARCH = "bk tokyodk leall don l pumapjl";

async function getSpotifyToken(): Promise<AuthResponse> {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.SPOTIFY_TOKEN}?` +
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.SPOTIFY_CLIENT_ID!,
          client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
        }).toString(),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to get token: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error getting Spotify token:", error);
    throw error;
  }
}

async function searchSpotifyAlbums(
  token: string,
  query: string
): Promise<SearchResponse> {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.SPOTIFY_SEARCH}?` +
        new URLSearchParams({
          q: query,
          type: "album",
          market: "BR",
        }).toString(),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to search albums: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error searching Spotify albums:", error);
    throw error;
  }
}

export default async function Example({
  searchParams,
}: {
  searchParams: Promise<{ search: string; grid: keyof typeof GRID_ITEMS_ENUM }>;
}) {
  const params = await searchParams;
  const search = params.search || DEFAULT_SEARCH;
  const grid = params.grid || "4";

  let authResponse: AuthResponse;
  let albumsList: SearchResponse;

  try {
    authResponse = await getSpotifyToken();
    albumsList = await searchSpotifyAlbums(authResponse.access_token, search);
  } catch (error) {
    console.error("Error at example page:", error);
    return (
      <div className="default-container">
        <h2>Error loading content</h2>
        <p>Sorry, something went wrong. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar
        variant="glass"
        position="fixed-bottom"
        navigationItems={[
          { label: "home", href: "/" },
          { label: "example", href: "/example" },
        ]}
      />

      <aside className="h-0">
        <SheetExample />
      </aside>
      <div className="default-container flex gap-4">
        <InputURLParams
          name="search"
          placeholder="Search albums here"
          defaultValue={search}
        />
        <span className="hidden sm:block">
          <GridDropdown currentGrid={grid} />
        </span>
      </div>
      <main className="flex flex-col gap-20">
        <section
          className={cn(
            "default-container grid grid-cols-2 gap-x-2 gap-y-4",
            `${GRID_ITEMS_ENUM[grid]}`
          )}
        >
          {albumsList.albums.items.map((album) => (
            <a
              key={album.id}
              className="flex flex-col justify-center truncate group transition-transform hover:scale-105"
              href={album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded mb-2 opacity-70 group-hover:opacity-100 transition-opacity"
                src={album.images[1].url}
                alt={`Cover image from ${album.name}`}
                width={album.images[1].width}
                height={album.images[1].height}
              />

              <div className="px-1">
                <h4 className="mb-1 truncate">{album.name}</h4>
                <p className="description truncate">
                  {album.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </a>
          ))}
        </section>
        <section className="default-container rounded glass">
          <div className="mb-6">
            <h2 className="mb-1">New releases</h2>
            <p className="description">
              New releases from your favorite artists
            </p>
          </div>

          <div className="flex justify-center mx-auto w-full max-w-[250px] sm:max-w-lg md:max-w-xl lg:max-w-4xl">
            <CarouselExample accessToken={authResponse.access_token} />
          </div>
        </section>
        <section className="default-container">
          <h2 className="mb-4">Featured album</h2>
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:items-start">
            <CardExample albumInfo={albumsList.albums.items[0]} />
            <span className="w-full">
              <AccordionExample />
            </span>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-20"></footer>
    </div>
  );
}
