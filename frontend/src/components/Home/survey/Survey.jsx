import React from 'react';
import classes from './survey.module.css';

function Survey() {
  return (
    <section className={classes.section}>
      <p>
        Decoding tomorrow: Developer secrets, security and the future of
        passkeys
      </p>
      <button>Download survey result</button>
    </section>
  );
}

export default Survey;
