'use client'
import React, { useState } from 'react';
import styles from '../../styles/NavBar.module.css';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <nav className={styles.navBar}>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? <X /> : <Menu />}
            </button>
            <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                {isMenuOpen && (
                    <div className={styles.dropdownMenu}>
                        <button className={styles.navButton}>Shop</button>
                        <button className={styles.navButton}>Skills</button>
                        <button className={styles.navButton}>Story</button>
                        <button className={styles.navButton}>About</button>
                        <button className={styles.navButton}>Contact </button>
                    </div>
                )}
            </div>
            <div className={styles.desktopMenu}>
                <button className={styles.navButton}>Shop</button>
                <button className={styles.navButton}>Skills</button>
                <button className={styles.navButton}>Story</button>
                <button className={styles.navButton}>About</button>
                <button className={styles.navButton}>Contact Us</button>
            </div>
        </nav>
    );
};

export default NavBar;
