import styles from "./Footer.module.scss";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__section"]}>
          <h4 className={styles["footer__title"]}>Company</h4>
          <ul className={styles["footer__list"]}>
            <li>About</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles["footer__section"]}>
          <h4 className={styles["footer__title"]}>Help</h4>
          <ul className={styles["footer__list"]}>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className={styles["footer__section"]}>
          <h4 className={styles["footer__title"]}>Follow Us</h4>
          <div className={styles["footer__socials"]}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className={styles["footer__bottom"]}>
        <p>© 2024 Jewelry Shop. All rights reserved.</p>
        <div className={styles["footer__policies"]}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
