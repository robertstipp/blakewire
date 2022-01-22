import React, { useState } from "react";

import styles from "./ServicesNavBar.module.css";

// const tabs = [
//   "Striping",
//   "VMI",
//   "Twisting",
//   "Cutting",
//   "Stripping",
//   "Etching",
//   "LaserMarking",
// ];

const ServicesNavBar = ({ tabs, activeTab, handleTab }) => {
  console.log(tabs);
  console.log(activeTab);
  return (
    <main className={styles.container}>
      {tabs.map((tab) => {
        return (
          <div
            key={tab}
            name={tab}
            className={
              activeTab === tab ? `${styles.activeTab}` : `${styles.tab}`
            }
            onClick={handleTab}
          >
            {tab}
          </div>
        );
      })}
    </main>
  );
};

export default ServicesNavBar;
