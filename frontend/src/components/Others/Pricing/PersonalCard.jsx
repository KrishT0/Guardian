import React from "react";
import classes from "./pricing.module.css";

function PersonalCard({
  heading,
  price,
  para,
  smallhead,
  features,
  smallpara,
  btn,
}) {
  return (
    <div className={classes.card}>
      <h1>{heading}</h1>
      <p className={classes.price}>{price}</p>
      <p className={classes.smallP}>per month</p>
      <p className={classes.smallP}>{para}</p>
      <h2 className={classes.smallH}>{smallhead}</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className={classes.lastP}>{smallpara}</p>
      <button>{btn}</button>
    </div>
  );
}

export default PersonalCard;
