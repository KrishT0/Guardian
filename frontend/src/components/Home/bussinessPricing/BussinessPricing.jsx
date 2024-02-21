import React from 'react';
import classes from './bussinessPricing.module.css';
// import { Link } from 'react-router-dom';

function BussinessPricing() {
  return (
    <section className={classes.section}>
      <p>Work more productively and power up your protection</p>
      {/* <Link to="/pricing"> */}
      <button>Start bussiness Trial</button>
      {/* </Link> */}
    </section>
  );
}

export default BussinessPricing;
