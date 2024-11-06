import axios from 'axios';
import { SPOTIFY_API } from '../constants/constants';

export const getSpotifyToken = async (): Promise<string> => {
    const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
            headers: {
                'Authorization': 'Basic ' + btoa(`${SPOTIFY_API.CLIENT_ID}:${SPOTIFY_API.CLIENT_SECRET}`),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );
    
    return response.data.access_token;
};