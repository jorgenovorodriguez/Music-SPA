import { SongListProps } from '../../interfaces/interfaces';
import CardSong from '../CardSong/CardSong';
import styles from './SongList.module.css';

const SongList: React.FC<SongListProps> = ({ songs }) => {
    return (
        <div className={styles.container}>
            {songs?.map((song, index) => (
                <CardSong
                    key={index}
                    imageUrl={song.imageUrl}
                    songTitle={song.songTitle}
                    author={song.author}
                />
            ))}
        </div>
    );
};

export default SongList;
