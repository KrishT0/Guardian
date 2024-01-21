import React from 'react';
import classes from './hero.module.css';

import image from '../../../assets/website-demo.png';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className={classes.container}>
      <div className={classes.left}>
        <h1>The password manager trusted by millions</h1>
        <p>
          At home, at work, or on the go, Bitwarden easily secures all your
          passwords, passkeys, and sensitive information.
        </p>
        <div className={classes.btnGroup}>
          <Link to="/auth/sign-up">
            <button className={classes.btn}>Get Started today</button>
          </Link>
          <Link to="/pricing">
            <button className={classes.btn}> View Pricing</button>
          </Link>
        </div>
      </div>
      <img src={image} alt="Application demo image" className={classes.right} />
    </section>
  );
}

export default HeroSection;
