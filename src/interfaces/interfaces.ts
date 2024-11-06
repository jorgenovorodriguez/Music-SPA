
export interface SvgIconProps {
  color: string;
  width: string;
}

export interface CardProps {
  imageUrl: string;
  songTitle: string;
  author: string;
}

export interface IconProps {
  icon: React.ElementType;
}

export interface ListItemProps {
  text: string;
}

export interface Song {
  imageUrl: string;
  songTitle: string;
  author: string;
}

export interface SongListProps {
  songs: Song[] | undefined;
}

export interface UseSpotifyPlaylistResult {
  token: string | undefined;
  playlist: Playlist | undefined;
  isLoading: boolean;
  error: Error | null;
}

export interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    owner: {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string | null;
        total: number;
      };
      href: string;
      id: string;
      type: string;
      uri: string;
      display_name: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      limit: number;
      next: string | null;
      offset: number;
      previous: string | null;
      total: number;
      items: {
        added_at: string;
        added_by: {
          external_urls: {
            spotify: string;
          };
          followers: {
            href: string | null;
            total: number;
          };
          href: string;
          id: string;
          type: string;
          uri: string;
        };
        is_local: boolean;
        track: {
          album: {
            album_type: string;
            total_tracks: number;
            available_markets: string[];
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            images: {
              url: string;
              height: number;
              width: number;
            }[];
            name: string;
            release_date: string;
            release_date_precision: string;
            restrictions?: {
              reason: string;
            };
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
          available_markets: string[];
          disc_number: number;
          duration_ms: number;
          explicit: boolean;
          external_ids: {
            isrc: string;
            ean?: string;
            upc?: string;
          };
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          is_playable: boolean;
          linked_from?: Record<string, unknown>;
          restrictions?: {
            reason: string;
          };
          name: string;
          popularity: number;
          preview_url: string | null;
          track_number: number;
          type: string;
          uri: string;
          is_local: boolean;
        };
      }[];
    };
    type: string;
    uri: string;
  }