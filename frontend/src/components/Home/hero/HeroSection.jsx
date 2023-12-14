import React from "react";
import classes from "./hero.module.css";

import image from "../../../assets/website-demo.png";

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
          <button className={classes.btn}>Get Started today</button>
          <button className={classes.btn}> View Pricing</button>
        </div>
      </div>
      <img src={image} alt="Application demo image" className={classes.right} />
    </section>
  );
}

export default HeroSection;
