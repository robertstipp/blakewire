import React from "react";
import QualityModal from "../Components/QualityModal/QualityModal";
import styles from "./Quality.module.css";

export const Quality = () => {
  return (
    <main className={styles.container}>
      <section>
        <h1 className={styles.sectionTitle}>Quality Policy</h1>
        <p className={styles.sectionText}>
          Blake Wire and Cable Corporation strives to deliver the service and
          value that meet or exceed customer and regulatory requirements. We
          commit to continually improve our Quality Management System by
          establishing quality objectives, addressing risks and opportunities
          and promoting ethical behavior.
        </p>
      </section>
      <section>
        <h1 className={styles.sectionTitle}>
          Quality Regulations and Environmental Compliance
        </h1>
        <QualityModal />
      </section>
      <section>
        <h1 className={styles.sectionTitle}>Supplier and Vendor Links</h1>
      </section>
    </main>
  );
};
