import React from "react";
import styles from "./Affiliation.module.css";

const Affiliations = ({ affiliations }) => {
  return (
    <main className={styles.container}>
      {affiliations.map((item) => {
        const { id, name, img } = item;
        return <img key={id} alt={name} className={styles.image} src={img} />;
      })}
    </main>
  );
};

export default Affiliations;
