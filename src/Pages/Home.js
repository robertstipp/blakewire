import React from "react";
import Slideshow from "../Components/Slideshow/Slideshow";
import { slideImages } from "../Components/Slideshow/slideshowData";

import styles from "./Home.module.css";
import InfoCard from "../Components/Homepage/InfoCard";
import { infoCardData } from "../Components/Homepage/infoCardData";

export const Home = () => {
  return (
    <main>
      <img
        className={styles.hero}
        src="https://www.blakewire.com/images/job_4_web_header__.jpg?crc=309824504"
        alt="img"
      />
      <div className={styles.horizontal}></div>
      {infoCardData.map((card) => {
        const { id, img, label, text } = card;
        return <InfoCard key={id} img={img} label={label} text={text} />;
      })}
    </main>
  );
};
