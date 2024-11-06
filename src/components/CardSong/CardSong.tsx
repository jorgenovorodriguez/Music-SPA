import { CardProps } from '../../interfaces/interfaces';
import { AgreeIcon, HeartIcon, ShoppingIcon } from '../SvgIcons';
import styles from './CardSong.module.css';

const CardSong: React.FC<CardProps> = ({ imageUrl, songTitle, author }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={songTitle} className={styles.image} />
            <div className={styles.details}>
                <h3 className={styles.songTitle}>{songTitle}</h3>
                <p className={styles.author}>{`@${author}`}</p>
            </div>
            <div className={styles.menu}>
                <div className={styles.iconButton}>
                    <AgreeIcon color={'#FFFFFF'} width={'1.5rem'} />
                </div>
                <div className={styles.iconButton}>
                    <ShoppingIcon color={'#FFFFFF'} width={'1.5rem'} />
                </div>
                <div className={styles.iconButton}>
                    <HeartIcon color={'#FFFFFF'} width={'1.5rem'} />
                </div>
            </div>
        </div>
    );
};

export default CardSong;
