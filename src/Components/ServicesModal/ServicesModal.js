import React, { useState } from "react";

import styles from "./ServicesModal.module.css";

import { servicesModalData } from "./servicesModalData";

const ServicesModal = () => {
  const [value, setValue] = useState(0);

  const { name, text, img } = servicesModalData[value];
  return (
    <main className={styles.container}>
      <main className={styles.tabContainer}>
        {servicesModalData.map((tab, index) => {
          const { id, name, isActive } = tab;
          return (
            <div
              key={id}
              name={name}
              className={
                name === servicesModalData[value].name
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
        <section className="left">
          <img src="" alt="" />
        </section>
        <section className="right">
          <label htmlFor="">{name}</label>
          <p>{text}</p>
        </section>
      </main>
    </main>
  );
};

export default ServicesModal;
