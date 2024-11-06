import styles from './PlaylistMenu.module.css';

const PlaylistMenu: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainItem}>Obras destacadas</div>
            <div>
                <ul className={styles.listItems}>
                    <li>Music</li>
                    <li>Collectibles</li>
                    <li>Utility</li>
                </ul>
            </div>
        </div>
    );
};

export default PlaylistMenu;
