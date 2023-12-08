import React from "react";
import classes from "./extra.module.css";

function ExtraCard({
  leftImage,
  leftHeading,
  leftDescription,
  rightImage,
  rightHeading,
  rightDescription,
}) {
  return (
    <section className={classes.cardGroup}>
      <div className={classes.card}>
        <img src={leftImage} alt="leftImage" />
        <div className={classes.side}>
          <h1>{leftHeading}</h1>
          <p>{leftDescription}</p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.side}>
          <h1>{rightHeading}</h1>
          <p>{rightDescription}</p>
        </div>
        <img src={rightImage} alt="rightImage" />
      </div>
    </section>
  );
}

export default ExtraCard;
