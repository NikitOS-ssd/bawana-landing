import React from 'react';
import styles from './Footer.module.css';

const BWANA_IMAGE = 'https://bwanabet.com/files/webexIconsDesktop/assets/image/header/bwanabet_large.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <img src={BWANA_IMAGE} width={400} alt="Bwana logo" className={styles.logo} />
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.links}>
            <li className={styles.linkItem}>Betting Tips</li>
            <li className={styles.linkItem}>How to bet on Bwana?</li>
            <li className={styles.linkItem}>Web Version</li>
            <li className={styles.linkItem}>Rules</li>
          </ul>
        </div>
        <div className={styles.rightSection}>
          <ul className={styles.socialLinks}>
            <li className={styles.socialLinkItem}><a href="https://facebook.com">Facebook</a></li>
            <li className={styles.socialLinkItem}><a href="https://instagram.com">Instagram</a></li>
            <li className={styles.socialLinkItem}><a href="https://telegram.org">Telegram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>Copyright © 2019 – 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
