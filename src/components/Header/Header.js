import React from 'react';
import styles from '../../styles/Header.module.css';
import NavBar from './NavBar';
import { Search, Heart, ShoppingCart, User, Globe, Orbit } from 'lucide-react'; 

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}></div>
            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <div className={styles.navbarcomponent1}>
                        <NavBar />
                    </div>
                    <span><Orbit /></span>
                </div>
                <div className={styles.logoName}>Logo</div>
                <div className={styles.icons}>
                    <span >
                        <Search />
                    </span>
                    <span >
                        <Heart />
                    </span>
                    <span >
                        <ShoppingCart />
                    </span>
                    <span className={styles.hideicon}>
                        <User />
                    </span>
                    <span className={styles.hideicon}>
                        <Globe />
                    </span>
                </div>
            </div>
            <div className={styles.navbarcomponent2}>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
