import React, { useState } from 'react';
import styles from './Header.module.css';
import { getImageUrl } from '../../utils';
import { CloseIcon, HomeIcon, MenuIcon } from '../../components/SvgIcons';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {
            label: 'Home',
            className: styles.navItem,
            icon: <HomeIcon color='#FFFFFF' width='0.75rem' />,
        },
        { label: 'Descubrir', className: styles.navItem },
        { label: 'Favoritos', className: styles.navItem },
        { label: 'Subir Obra', className: styles.navItem },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={getImageUrl('polygonLogo.png')} alt='Logo' />
                <h1>polygon</h1>
                {!menuOpen && (
                    <div
                        className={styles.mobileMenu}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <MenuIcon color={`#FFFFFF`} width={`3rem`} />
                    </div>
                )}
            </div>

            <nav>
                <ul className={styles.navMenu}>
                    {navItems.map((item, index) => (
                        <li key={index} className={item.className}>
                            {item.icon && (
                                <span className={styles.icon}>{item.icon}</span>
                            )}
                            {item.label}
                        </li>
                    ))}
                    <li className={styles.profileItem}>
                        <img src={getImageUrl('user.png')} alt='Profile' />
                    </li>
                </ul>
            </nav>

            {menuOpen && (
                <div
                    className={`${styles.navMobileOverlay} ${
                        menuOpen ? styles.open : ''
                    }`}
                >
                    <div className={styles.listMobile}>
                        <div onClick={() => setMenuOpen(!menuOpen)}>
                            <CloseIcon color={`#FFFFFF`} width={`3rem`} />
                        </div>
                        <nav>
                            <ul className={styles.navMenuMobile}>
                                {navItems.map((item, index) => (
                                    <li key={index}>{item.label}</li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
