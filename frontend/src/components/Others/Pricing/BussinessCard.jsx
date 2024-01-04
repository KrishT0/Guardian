import React from "react";
import classes from "./pricing.module.css";

function BussinessCard({ data }) {
  return (
    <div className={classes.cardB}>
      <h1>{data.heading}</h1>
      <p>{data.ptop}</p>
      {data.price && (
        <>
          <p className={classes.price}>{data.price}</p>
          <p className={classes.smallP}>per month</p>
        </>
      )}
      {data.pdown ? (
        <p className={classes.medP}>{data.pdown}</p>
      ) : (
        <ul>
          {data.list.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      )}
      <p className={classes.lastP}>{data.smallp}</p>
      <button>{data.btn}</button>
    </div>
  );
}

export default BussinessCard;
