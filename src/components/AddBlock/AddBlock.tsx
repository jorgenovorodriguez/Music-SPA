import styles from './AddBlock.module.css';

import { getImageUrl } from '../../utils';

const AddBlock: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <div className={styles.title}>
                    Membresía <br />
                    Premium
                </div>
                <div className={styles.buttons}>
                    <div>Suscribirse</div>
                    <div>Descubrir planes</div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img src={getImageUrl('bgGirl.png')} alt='addImage' />
            </div>
        </div>
    );
};

export default AddBlock;
