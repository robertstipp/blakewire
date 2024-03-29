import React from "react";

import { slideImages } from "../Components/Slideshow/slideshowData";

import styles from "./Home.module.css";
import InfoCard from "../Components/Homepage/InfoCard";
import { infoCardData } from "../Components/Homepage/infoCardData";

const { id, name, src } = slideImages[0];

export const Home = () => {
  return (
    <main>
      {/* SlideShow */}
      <div className={styles.heroContainer}>
        <img key={id} className={styles.hero} src={src} alt={name} />
      </div>
      <div className={styles.horizontal}></div>
      {infoCardData.map((card) => {
        const { id, img, label, text } = card;
        return <InfoCard key={id} img={img} label={label} text={text} />;
      })}
    </main>
  );
};
