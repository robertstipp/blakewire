import React from "react";
import styles from "./Contact.module.css";
import { pageHeader, contactData } from "./contactData";

export const Contact = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageHeader}>{pageHeader}</h1>
      <section className={styles.contentContainer}>
        <section className={styles.leftSection}>
          {contactData.map((contact) => {
            const {
              id,
              label,
              location,
              strAddr,
              cityStZip,
              officeNum,
              faxNum,
              email,
            } = contact;
            return (
              <section className={styles.contactCard}>
                <h2 className={styles.contactLabel}>{label}</h2>
                <h4 className={styles.contactLocation}>{location}</h4>
                <p>{strAddr}</p>
                <p>{cityStZip}</p>
                <p>Office: {officeNum}</p>
                <p>Fax: {faxNum}</p>
                <p>{email}</p>
              </section>
            );
          })}
        </section>
        <section className={styles.rightSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13198.7525179129!2d-118.484915!3d34.205444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9747ebd2d9c80ad9!2sBlake%20Wire%20%26%20Cable%20Corporation!5e0!3m2!1sen!2sus!4v1642876191364!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </section>
      </section>
    </main>
  );
};
