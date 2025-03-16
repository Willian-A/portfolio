export type AlbumsItem = {
  album_type: string;
  total_tracks: 1;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
};

export type SearchResponse = {
  albums: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
    items: AlbumsItem[];
  };
};

export type AuthResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};
