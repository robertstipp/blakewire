import React, { useState } from "react";

import { qualityModalData } from "./qualityModalData";
import styles from "./QualityModal.module.css";

const QualityModal = () => {
  const [value, setValue] = useState(0);

  const { name, text } = qualityModalData[value];

  return (
    <main className={styles.container}>
      <main className={styles.tabContainer}>
        {qualityModalData.map((tab, index) => {
          const { id, name } = tab;
          return (
            <div
              key={id}
              name={name}
              className={
                name === qualityModalData[value].name
                  ? `${styles.activeTab}`
                  : `${styles.tab}`
              }
              onClick={() => setValue(index)}
            >
              {name}
            </div>
          );
        })}
      </main>
      <main>
        <label htmlFor="">{name}</label>
        <p>{text}</p>
      </main>
    </main>
  );
};

export default QualityModal;
