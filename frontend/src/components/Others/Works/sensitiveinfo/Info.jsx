import React from "react";
import classes from "./sensitiveinfo.module.css";

function Info({ data }) {
  return (
    <div className={classes.card}>
      <img src={data.image} alt="" />
      <h1>{data.heading}</h1>
      <p>{data.para}</p>
    </div>
  );
}

export default Info;
