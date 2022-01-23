import React, { useState } from "react";

import styles from "./CustomCableForm.module.css";

import { awgSelection } from "./customCableFormData";

const CustomCableForm = () => {
  const [state, setState] = useState({
    name: "",
    phoneNum: "",
    company: "",
    email: "",
    quantity: "",
    numConductors: "",
    awgSize: "",
    conductorInsulation: "",
    shieldMaterial: "",
    condutorMaterial: "",
    jacketMaterial: "",
    cableConstruction: "",
    cableColor: "",
    finishedDiameter: "",
    printing: "",
    printText: "",
    comments: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
    console.log(state);
  };

  return (
    <main>
      <form className={styles.cableForm} onSubmit={handleSubmit}>
        <h3>Cable Form</h3>
        <div className={styles.formControl}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={state.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phoneNum"
            value={state.phoneNum}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Company</label>
          <input
            type="text"
            name="company"
            value={state.company}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Email-Address</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <h4>Cable Description</h4>
        <section className={styles.optionsBox}>
          <div className={styles.formBox}>
            <h5>Quanity</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Number of Conductors</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>AWG Size</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Conductor Insulation</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Shield Material</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Conductor Material</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Jacket Material</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Cable Construction</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Cable Color</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Finished Diameter</h5>
            <input type="text" />
          </div>
          <div className={styles.formBox}>
            <h5>Printing on Jacket</h5>
            <input type="text" />
          </div>
        </section>
        <div className={styles.formControl}>
          <h3>If Yes, Please write here</h3>
          <input type="text" />
        </div>
        <div className={styles.formControl}>
          <h3>Comments</h3>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CustomCableForm;
