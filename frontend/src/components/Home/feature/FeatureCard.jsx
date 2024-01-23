import React from 'react';
import classes from './feature.module.css';

function FeatureCard({ image, head, desc }) {
  return (
    <div className={classes.card}>
      <img src={image} alt="feature" />
      <h2>{head}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default FeatureCard;
