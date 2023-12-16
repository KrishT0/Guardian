import React, { useState } from "react";
import classes from "./pricing.module.css";
import PersonalPricing from "./PersonalPricing";
import BussinessPricing from "./BussinessPricing";

function Pricing() {
  const [priceMode, setPriceMode] = useState("personal");

  function priceclickHandler() {
    setPriceMode((prevMode) =>
      prevMode === "personal" ? "bussiness" : "personal"
    );
  }

  return (
    <section className={classes.section}>
      <section className={classes.pricing}>
        <h1>Choose the plan that fits your needs</h1>
        <div className={classes.btnGroup}>
          <button
            onClick={priceclickHandler}
            className={`${classes.btn} ${
              priceMode === "personal" ? classes.active : ""
            }`}
          >
            Personal
          </button>
          <button
            onClick={priceclickHandler}
            className={`${classes.btn} ${
              priceMode === "bussiness" ? classes.active : ""
            }`}
          >
            Bussiness
          </button>
        </div>
        {priceMode === "personal" ? <PersonalPricing /> : <BussinessPricing />}
        <p className={classes.finalP}>
          Pricing shown in USD. Enterprise plan based on annual subscription
        </p>
      </section>
      <p>core features</p>
    </section>
  );
}

export default Pricing;
