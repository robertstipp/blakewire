import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = ({ key, img, label, text }) => {
  return (
    <main key={key} className={styles.infoCard}>
      <section className={styles.imageSection}>
        <img className={styles.image} src={img} alt={label} />
      </section>
      <section className={styles.textSection}>
        <div className={styles.textLabel}>{label}</div>
        <div className={styles.text}>{text}</div>
      </section>
    </main>
  );
};

export default InfoCard;
