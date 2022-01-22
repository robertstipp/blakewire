import styles from "./Footer.module.css";
import { socialLinks, copyright, portal } from "./footerData";

import React from "react";

const { text, year } = copyright;
const { label, url } = portal;

const Footer = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.leftSection}>
        <div className={styles.socialIcons}>
          {socialLinks.map((social) => {
            const { id, name, icon } = social;
            return <div className={styles.icon}>{icon}</div>;
          })}
        </div>
        <div>
          <h6 className={styles.copyright}>{`${text} ${year}`}</h6>
        </div>
      </section>
      <section className={styles.middleSection}></section>
      <section className={styles.rightSection}>
        <div className={styles.portal}>
          <h6>{label}</h6>
        </div>
      </section>
    </div>
  );
};
export default Footer;
