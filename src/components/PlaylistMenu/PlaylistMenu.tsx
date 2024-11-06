import { ListItemProps } from '../../interfaces/interfaces';
import styles from './PlaylistMenu.module.css';

const ListItem: React.FC<ListItemProps> = ({ text }) => <li>{text}</li>;

const PlaylistMenu: React.FC = () => {
    const listItems = ['Music', 'Collectibles', 'Utility'];

    return (
        <div className={styles.container}>
            <div className={styles.mainItem}>Obras destacadas</div>
            <div>
                <ul className={styles.listItems}>
                    {listItems.map((item, index) => (
                        <ListItem key={index} text={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlaylistMenu;
