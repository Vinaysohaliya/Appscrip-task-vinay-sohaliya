import React from 'react';
import styles from '../../styles/Footer/Footer.module.css';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <footer className={styles.footer}>
           <TopFooter/>
           <BottomFooter/>
        </footer>
    );
};

export default Footer;
