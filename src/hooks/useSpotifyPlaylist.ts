import { useQuery } from '@tanstack/react-query';
import { fetchPlaylist } from '../services/fetchPlaylist';
import { getSpotifyToken } from '../services/getSpotifyToken';
import { Playlist, UseSpotifyPlaylistResult } from '../interfaces/interfaces';

export const useSpotifyPlaylist = (): UseSpotifyPlaylistResult => {   
    const { data: token, isLoading: isLoadingToken, error: tokenError } = useQuery<string, Error>({
        queryKey: ['spotifyToken'],
        queryFn: getSpotifyToken,
        retry: 1
      });

    const { data: playlist, isLoading: isLoadingPlaylist, error: playlistError } = useQuery<Playlist, Error>({
        queryKey: ['playlist'],
        queryFn: () => fetchPlaylist(token!),
        enabled: !!token,
        retry: 2
      });
      
    const isLoading = isLoadingToken || isLoadingPlaylist;
    const error = tokenError || playlistError;

    return {
        token,
        playlist,
        isLoading,
        error,
    };
};
