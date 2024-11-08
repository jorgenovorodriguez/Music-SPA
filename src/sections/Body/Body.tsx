import React from 'react';
import { useSpotifyPlaylist } from '../../hooks/useSpotifyPlaylist';
import AddBlock from '../../components/AddBlock/AddBlock';
import styles from './Body.module.css';
import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu';
import SongList from '../../components/SongList/SongList';
import { Loading } from '../../components/Loading/Loading';

const Body: React.FC = () => {
    const { playlist, isLoading } = useSpotifyPlaylist();

    const songs = playlist?.tracks.items.map((item) => {
        const track = item.track;
        return {
            imageUrl: track.album.images[0]?.url || '',
            songTitle: track.name,
            author: track.artists[0].name,
        };
    });

    return (
        <div className={styles.bodyContainer}>
            <AddBlock />
            <PlaylistMenu />
            {isLoading ? <Loading /> : <SongList songs={songs} />}
        </div>
    );
};

export default Body;
