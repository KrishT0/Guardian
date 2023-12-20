import React from "react";
import classes from "./coreFeatures.module.css";

function CoreFeatureList({ list }) {
  return (
    <div className={classes.card}>
      <ul>
        {list.list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CoreFeatureList;
