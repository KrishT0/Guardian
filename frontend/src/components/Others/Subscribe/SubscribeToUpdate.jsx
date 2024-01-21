import React from 'react';
import classes from './subscribe.module.css';
import subsImage from '../../../assets/subs.svg';
import Form from './Form';

function SubscribeToUpdate() {
  return (
    <section className={classes.bg}>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1>Subscribe to Guardian Updates</h1>
          <p>
            Receive the latest Guardian news, product updates, and security
            resources.
          </p>
          <img src={subsImage} alt="image" />
        </div>
        <Form />
      </div>
    </section>
  );
}

export default SubscribeToUpdate;
