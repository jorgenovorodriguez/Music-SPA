import axios from 'axios';

import { SPOTIFY_API } from '../constants/constants';

export const fetchPlaylist = async ( token: string) => {
  
  const response = await axios.get(`${SPOTIFY_API.API_URL}/playlists/${SPOTIFY_API.PLAYLIST_ID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
