import React from "react";

import styles from "./About.module.css";

import ServicesModal from "../Components/ServicesModal/ServicesModal";
import Affiliations from "../Components/Affiliations/Affiliations";

import { affiliations } from "../Components/Affiliations/affiliationsData";
import { aboutData } from "./aboutData";

export const About = () => {
  return (
    <main className={styles.container}>
      {aboutData.map((section) => {
        const { id, name, label, text } = section;
        return (
          <section key={id} name={name} className={styles.aboutCard}>
            <h1 className={styles.cardTitle}>{label}</h1>
            <p className={styles.cardText}>{text}</p>
          </section>
        );
      })}
      <ServicesModal />
      <Affiliations affiliations={affiliations} />
    </main>
  );
};
