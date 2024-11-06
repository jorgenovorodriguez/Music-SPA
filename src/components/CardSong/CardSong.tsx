import { CardProps, IconProps } from '../../interfaces/interfaces';
import { AgreeIcon, HeartIcon, ShoppingIcon } from '../SvgIcons';
import styles from './CardSong.module.css';

const IconButton: React.FC<IconProps> = ({ icon: Icon }) => (
    <div className={styles.iconButton}>
        <Icon color='#FFFFFF' width='1.5rem' />
    </div>
);

const CardSong: React.FC<CardProps> = ({ imageUrl, songTitle, author }) => {
    const icons = [
        { icon: AgreeIcon },
        { icon: ShoppingIcon },
        { icon: HeartIcon },
    ];

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={songTitle} className={styles.image} />
            <div className={styles.details}>
                <h3 className={styles.songTitle}>{songTitle}</h3>
                <p className={styles.author}>{`@${author}`}</p>
            </div>
            <div className={styles.menu}>
                {icons.map(({ icon }, index) => (
                    <IconButton key={index} icon={icon} />
                ))}
            </div>
        </div>
    );
};

export default CardSong;
